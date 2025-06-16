import { Request, Response } from "express";
import fetch from "node-fetch";
import { ensureToken } from "../../utils/token-manager";

export const search = async (req: Request, res: Response) => {
  try {
    const token = await ensureToken();
    const payload = req.body;
    console.log("Search payload:", payload);
    // Validate payload structure if needed
    
    const searchRes = await fetch(
      "https://airiqapi.tesepr.com/TravelAPI.svc/Availability",
      {
        method: "POST",
        headers: {
          TOKEN: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await searchRes.json();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
