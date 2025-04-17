import fs from "fs";
import path from "path";
import axios from "axios";

// Configure token cache expiry
const TOKEN_EXPIRY_MINUTES = 720;

// Path to your local cache file
const cacheFilePath = path.resolve(process.cwd(), "token-cache.json");

// Read from the token cache file
const readTokenCache = (): { token: string | null; fetchedAt: Date | null } => {
  try {
    const raw = fs.readFileSync(cacheFilePath, "utf-8");
    const json = JSON.parse(raw);
    return {
      token: json.token,
      fetchedAt: json.fetchedAt ? new Date(json.fetchedAt) : null,
    };
  } catch {
    return { token: null, fetchedAt: null };
  }
};

// Write to the token cache file
const writeTokenCache = (token: string) => {
  const cache = {
    token,
    fetchedAt: new Date().toISOString(),
  };
  fs.writeFileSync(cacheFilePath, JSON.stringify(cache), "utf-8");
};

// Main token getter
export const getToken = async (): Promise<string | null> => {
  const now = new Date();
  const { token, fetchedAt } = readTokenCache();

  if (
    token &&
    fetchedAt &&
    (now.getTime() - fetchedAt.getTime()) / (1000 * 60) < TOKEN_EXPIRY_MINUTES
  ) {
    console.log("✅ Using file-cached token");
    return token;
  }

  try {
    console.log("🔄 Fetching new token...");

    const data = {
      AgentID: "AQAG051265",
      Username: "9710101010",
      Password: "348931",
    };
    const config = {
      headers: {
        Authorization: "Basic QVFBRzA1MTI2NSo5NzEwMTAxMDEwOjM0ODkzMQ==",
      },
    };

    const response = await axios.post(
      "https://airiqapi.tesepr.com/TravelAPI.svc/Login",
      data,
      config
    );

    const newToken = response.data?.Token;

    if (newToken) {
      writeTokenCache(newToken);
      console.log("✅ Token written to file cache");
    }

    return newToken;
  } catch (err) {
    console.error("❌ Error fetching token:", err);
    return null;
  }
};
