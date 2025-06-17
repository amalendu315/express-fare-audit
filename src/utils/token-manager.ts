import fs from "fs";
import path from "path";
import fetch from "node-fetch";

interface LoginResponse {
    AgentID: string,
    UserName: string,
    Token: string,
    Status: {
    ResultCode: string,
    Error: string,
    SequenceID: string
    }
}
  

const tokenPath = path.resolve(__dirname, "../token-cache.json");
const TOKEN_EXPIRY = 8 * 60 * 60 * 1000; // 8 hours in ms

type TokenFile = {
  token: string;
  fetchedAt: number;
};

export function saveToken(token: string) {
  const data: TokenFile = { token, fetchedAt: Date.now() };
  fs.writeFileSync(tokenPath, JSON.stringify(data));
}

export function getToken(): string | null {
  if (!fs.existsSync(tokenPath)) return null;
  const { token, fetchedAt } = JSON.parse(
    fs.readFileSync(tokenPath, "utf-8")
  ) as TokenFile;
  if (!token || !fetchedAt) return null;
  if (Date.now() - fetchedAt > TOKEN_EXPIRY) return null; // Expired
  return token;
}

export async function fetchNewToken(): Promise<string> {
  const res = await fetch(
    "http://testairiq.mywebcheck.in/TravelAPI.svc/Login",
    {
      method: "POST",
      headers: {
        Authorization: "Basic QVFBRzA1MTI2NSo5NzEwMTAxMDEwOjM0ODkzMQ==",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        AgentID: "AQAG051265",
        Username: "9710101010",
        Password: "348931",
      }),
    }
  );
    if (!res.ok) {
        throw new Error(`Login failed with status ${res.status}`);
    }
  const data = await res.json() as LoginResponse;
  console.log("Login response:", data);
  if (!data?.Token) throw new Error("Login failed");
  saveToken(data.Token);
  return data.Token;
}

export async function ensureToken(): Promise<string> {
  let token = getToken();
  if (token) return token;
  token = await fetchNewToken();
  return token;
}
