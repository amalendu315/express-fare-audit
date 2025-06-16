import { Request, Response } from "express";
import fetch from "node-fetch";
import { ensureToken } from "../../utils/token-manager";

// Optionally, define a response type if you know it
// interface PricingResponse { ... }

export const pricing = async (req: Request, res: Response) => {
  try {
    const token = await ensureToken();
    const payload = req.body;
    const pricingRes = await fetch(
      "http://testairiq.mywebcheck.in/TravelAPI.svc/Pricing",
      {
        method: "POST",
        headers: {
          TOKEN: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await pricingRes.json();
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
