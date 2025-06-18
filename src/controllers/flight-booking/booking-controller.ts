        import { Request, Response } from "express";
        import fetch from "node-fetch";
        import { ensureToken } from "../../utils/token-manager";
        
        // Optionally, define a response type if you know it
        // interface PricingResponse { ... }
        
        export const booking = async (req: Request, res: Response) => {
          try {
            const token = await ensureToken();
            const payload = req.body;
            const bookingRes = await fetch(
              "https://airiqapi.tesepr.com/TravelAPI.svc/Booking",
              {
                method: "POST",
                headers: {
                  TOKEN: token,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              }
            );
            if (!bookingRes.ok) {
              throw new Error(`Booking request failed with status ${bookingRes.status}`);
            }
            const data = await bookingRes.json();
            console.log("Booking response:", data);
            res.json(data);
          } catch (err: any) {
            res.status(500).json({ error: err.message });
          }
        };
        