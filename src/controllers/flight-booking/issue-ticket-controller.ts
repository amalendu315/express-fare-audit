        import { Request, Response } from "express";
        import fetch from "node-fetch";
        import { ensureToken } from "../../utils/token-manager";
        
        // Optionally, define a response type if you know it
        // interface PricingResponse { ... }
        
        export const ticketing = async (req: Request, res: Response) => {
          try {
            const token = await ensureToken();
            const payload = req.body;
            console.log("Booking request payload:", payload);
            const issueRes = await fetch(
              "https://airiqapi.tesepr.com/TravelAPI.svc/IssueTicket",
              {
                method: "POST",
                headers: {
                  TOKEN: token,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              }
            );
            const data = await issueRes.json();
            console.log("Ticketing response:", data);
            res.json(data);
          } catch (err: any) {
            res.status(500).json({ error: err });
          }
        };
        