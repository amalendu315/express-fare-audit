

// import axios from "axios";
// import { IEnrichmentService } from "./interface";
// import { parse, isValid } from "date-fns";
// import { EnrichmentResultModel } from "../../models/enrichment-result-model";

// export class AoEnrichmentService implements IEnrichmentService {
//   async enrich(
//     flightNumber: number,
//     flightSector: string,
//     travelDateTime: Date
//   ): Promise<EnrichmentResultModel> {
//     if (!flightSector) {
//       return {
//         sameFlightFare: 0,
//         lowestFlightFare: 0,
//         sameFlightStock: 0,
//         averageFare: 0,
//         availableStock: 0,
//         lowestFareFlightNumber: null,
//         lowestFareFlightDepartureTime: null,
//         windowedLowestFare: null,
//         windowedLowestFareFlightNumber: null,
//         windowedLowestFareDepartureTime: null,
//         errorMessage: "Missing FlightSector or FlightDate",
//         remarks: "Cannot enrich without flight info",
//       };
//     }
//     const [origin, destination] = flightSector.split("-");
//     if (!origin || !destination) {
//       return {
//         sameFlightFare: 0,
//         lowestFlightFare: 0,
//         sameFlightStock: 0,
//         averageFare: 0,
//         availableStock: 0,
//         lowestFareFlightNumber: null,
//         lowestFareFlightDepartureTime: null,
//         windowedLowestFare: null,
//         windowedLowestFareFlightNumber: null,
//         windowedLowestFareDepartureTime: null,
//         errorMessage: "Invalid sector format",
//         remarks: "Expected format: ORIGIN-DEST",
//       };
//     }
//     const payload = {
//       Sectors: flightSector,
//       FlightDate: travelDateTime
//         .toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "2-digit",
//           day: "2-digit",
//         })
//         .split("-")
//         .reverse()
//         .join("/"),
//       FlightNumber: "",
//     };

//     try {
//       const res = await axios.post(
//         "http://13.203.38.118:8080/B2BFareTest/Availability",
//         payload,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       const items = res.data?.Flights?.[0]?.JourneysList?.[0]?.LIST || [];

//       if (items?.length === 0) {
//         return {
//           sameFlightFare: 0,
//           lowestFlightFare: 0,
//           sameFlightStock: 0,
//           averageFare: 0,
//           availableStock: 0,
//           lowestFareFlightNumber: null,
//           lowestFareFlightDepartureTime: null,
//           windowedLowestFare: null,
//           windowedLowestFareFlightNumber: null,
//           windowedLowestFareDepartureTime: null,
//           errorMessage: "No flights found",
//           remarks: "No flights found for the given sector",
//         };
//       }

//       // ----------- Step 1: Find Target Departure Time -----------
//       let targetDepartureTime: Date | null = null;
//       for (const item of items) {
//         const flightData = item.AirlinetList?.[0];
//         if (!flightData) continue;
//         const flightNoRaw = flightData.AirlineNo || "";
//         const flightNo = flightNoRaw.split(" ").pop()?.trim();
//         const departureDateTime = flightData.DepartureDateTime || "";
//         let segmentDepartureDate: Date | null = null;
//         if (departureDateTime) {
//           const parsed = parse(
//             departureDateTime,
//             "dd MMM yyyy HH:mm",
//             new Date()
//           );
//           segmentDepartureDate = isValid(parsed) ? parsed : null;
//         }
//         if (parseInt(flightNo) === flightNumber) {
//           targetDepartureTime = segmentDepartureDate;
//           // **DO NOT BREAK**. Collect ALL matches.
//         }
//       }

//       // ----------- Step 2: Collect Data -----------
//       let sameFlightFare: number | undefined;
//       let sameFlightSeats: number | undefined;
//       let lowestFlightFare: number | undefined;
//       let lowestFareFlightNumber: string | null = null;
//       let lowestFareFlightDepartureTime: Date | null = null;
//       let totalFareSum = 0;
//       let totalFareCount = 0;
//       let totalSeats = 0;

//       for (const item of items) {
//         const flightData = item.AirlinetList?.[0];
//         if (!flightData) continue;
//         const flightNoRaw = flightData.AirlineNo || "";
//         const flightNo = flightNoRaw.split(" ").pop()?.trim();
//         const availSeats = parseInt(flightData.AvailSeat || "0");
//         const departureDateTime = flightData.DepartureDateTime || "";
//         let segmentDepartureDate: Date | null = null;
//         if (departureDateTime) {
//           const parsed = parse(
//             departureDateTime,
//             "dd MMM yyyy HH:mm",
//             new Date()
//           );
//           segmentDepartureDate = isValid(parsed) ? parsed : null;
//         }
//         const priceList = item.PriceDetails || [];
//         for (const fare of priceList) {
//           const priceDesc = fare?.Pricedescription?.[0];
//           const grossAmountStr = priceDesc?.GrossAmount || "0";
//           const netAmount = parseFloat(grossAmountStr);

//           // -- Collect Same Flight Fare (lowest fare for that flight) --
//           if (parseInt(flightNo) === flightNumber) {
//             if (sameFlightFare === undefined || netAmount < sameFlightFare) {
//               sameFlightFare = netAmount;
//               sameFlightSeats = availSeats;
//             }
//           }
//           // -- Collect Overall Lowest Fare --
//           if (lowestFlightFare === undefined || netAmount < lowestFlightFare) {
//             lowestFlightFare = netAmount;
//             lowestFareFlightNumber = flightNoRaw;
//             lowestFareFlightDepartureTime = segmentDepartureDate;
//           }

//           totalFareSum += netAmount;
//           totalFareCount++;
//         }
//         totalSeats += availSeats;
//       }

//       // ----------- Step 3: Windowed Direct Lowest Fare -----------
//       let windowedLowestFare: number | null = null;
//       let windowedLowestFareFlightNumber: string | null = null;
//       let windowedLowestFareDepartureTime: Date | null = null;
//       let foundDirectFlight = false;
//       if (targetDepartureTime) {
//         for (const item of items) {
//           const flightData = item.AirlinetList?.[0];
//           if (!flightData) continue;
//           const flightNoRaw = flightData.AirlineNo || "";
//           const isDirect =
//             flightData?.Stops === 0 ||
//             flightData?.Stops === "0" ||
//             flightData?.Stops === null ||
//             flightData?.Stops === undefined;
//           const departureDateTime = flightData.DepartureDateTime || "";
//           let segmentDepartureDate: Date | null = null;
//           if (departureDateTime) {
//             const parsed = parse(
//               departureDateTime,
//               "dd MMM yyyy HH:mm",
//               new Date()
//             );
//             segmentDepartureDate = isValid(parsed) ? parsed : null;
//           }
//           // Only consider direct flights within window
//           if (
//             isDirect &&
//             segmentDepartureDate &&
//             targetDepartureTime &&
//             segmentDepartureDate.getTime() >=
//               targetDepartureTime.getTime() - 4 * 60 * 60 * 1000 &&
//             segmentDepartureDate.getTime() <=
//               targetDepartureTime.getTime() + 4 * 60 * 60 * 1000
//           ) {
//             const priceList = item.PriceDetails || [];
//             for (const fare of priceList) {
//               const priceDesc = fare?.Pricedescription?.[0];
//               const grossAmountStr = priceDesc?.GrossAmount || "0";
//               const netAmount = parseFloat(grossAmountStr);

//               foundDirectFlight = true;
//               if (
//                 windowedLowestFare === null ||
//                 netAmount < windowedLowestFare
//               ) {
//                 windowedLowestFare = netAmount;
//                 windowedLowestFareFlightNumber = flightNoRaw;
//                 windowedLowestFareDepartureTime = segmentDepartureDate;
//               }
//             }
//           }
//         }
//       }

//       const averageFare =
//         totalFareCount > 0 ? totalFareSum / totalFareCount : 0;

//       if (!foundDirectFlight) {
//         return {
//           sameFlightFare: sameFlightFare ?? 0,
//           lowestFlightFare: lowestFlightFare ?? 0,
//           sameFlightStock: sameFlightSeats ?? 0,
//           averageFare: averageFare,
//           availableStock: totalSeats,
//           lowestFareFlightNumber: lowestFareFlightNumber ?? null,
//           lowestFareFlightDepartureTime: lowestFareFlightDepartureTime ?? null,
//           windowedLowestFare: null,
//           windowedLowestFareFlightNumber: null,
//           windowedLowestFareDepartureTime: null,
//           errorMessage: "No direct flights found in ±4 hour window",
//           remarks: "No direct flights found for windowed search",
//         };
//       } else {
//         return {
//           sameFlightFare: sameFlightFare ?? 0,
//           lowestFlightFare: lowestFlightFare ?? 0,
//           sameFlightStock: sameFlightSeats ?? 0,
//           averageFare: averageFare,
//           availableStock: totalSeats,
//           lowestFareFlightNumber: lowestFareFlightNumber ?? null,
//           lowestFareFlightDepartureTime: lowestFareFlightDepartureTime ?? null,
//           windowedLowestFare: windowedLowestFare ?? lowestFlightFare ?? null,
//           windowedLowestFareFlightNumber:
//             windowedLowestFareFlightNumber ?? lowestFareFlightNumber ?? null,
//           windowedLowestFareDepartureTime:
//             windowedLowestFareDepartureTime ??
//             lowestFareFlightDepartureTime ??
//             null,
//           errorMessage: sameFlightFare ? "" : "Same Flight Fare Not Found",
//           remarks: "AO API Enriched",
//         };
//       }
//     } catch (e: any) {
//       return {
//         sameFlightFare: 0,
//         lowestFlightFare: 0,
//         sameFlightStock: 0,
//         averageFare: 0,
//         availableStock: 0,
//         lowestFareFlightNumber: null,
//         lowestFareFlightDepartureTime: null,
//         windowedLowestFare: null,
//         windowedLowestFareFlightNumber: null,
//         windowedLowestFareDepartureTime: null,
//         errorMessage: `AO API Error: ${e.message}`,
//         remarks: "Enrichment Error",
//       };
//     }
//   }
// }

import axios from "axios";
import { IEnrichmentService } from "./interface";
import { parse, isValid } from "date-fns";
import { EnrichmentResultModel } from "../../models/enrichment-result-model";

// --- Helper function to get all Goa variants for the sector
function getGoaVariants(
  origin: string,
  destination: string
): [string, string][] | null {
  const goaCodes = ["GOI", "GOX"];
  let variants: [string, string][] = [];

  if (goaCodes.includes(origin)) {
    // Goa as origin, try both GOI and GOX as origin
    for (const goa of goaCodes) variants.push([goa, destination]);
  }
  if (goaCodes.includes(destination)) {
    // Goa as destination, try both GOI and GOX as destination
    for (const goa of goaCodes) variants.push([origin, goa]);
  }
  // Deduplicate in case both origin/dest are GOI/GOX (like GOI-GOX)
  variants = variants.filter(
    (v, idx, arr) =>
      arr.findIndex((a) => a[0] === v[0] && a[1] === v[1]) === idx
  );
  return variants.length > 0 ? variants : null;
}

export class AoEnrichmentService implements IEnrichmentService {
  async enrich(
    flightNumber: number,
    flightSector: string,
    travelDateTime: Date
  ): Promise<EnrichmentResultModel> {
    if (!flightSector) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        sameFlightStock: 0,
        averageFare: 0,
        availableStock: 0,
        lowestFareFlightNumber: null,
        lowestFareFlightDepartureTime: null,
        windowedLowestFare: null,
        windowedLowestFareFlightNumber: null,
        windowedLowestFareDepartureTime: null,
        errorMessage: "Missing FlightSector or FlightDate",
        remarks: "Cannot enrich without flight info",
      };
    }

    const [origin, destination] = flightSector.split("-");
    if (!origin || !destination) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        sameFlightStock: 0,
        averageFare: 0,
        availableStock: 0,
        lowestFareFlightNumber: null,
        lowestFareFlightDepartureTime: null,
        windowedLowestFare: null,
        windowedLowestFareFlightNumber: null,
        windowedLowestFareDepartureTime: null,
        errorMessage: "Invalid sector format",
        remarks: "Expected format: ORIGIN-DEST",
      };
    }

    // --- Goa sector logic: get all variants if GOI/GOX present
    const goaVariants = getGoaVariants(origin, destination);

    let items: any[] = [];
    let remarksExtra: string = "";

    if (goaVariants) {
      // Fetch all sector codes (BOM-GOI + BOM-GOX, etc), merge all LISTs
      const sectorStrings = goaVariants.map((v) => `${v[0]}-${v[1]}`);
      remarksExtra = ` (Merged Goa sector: ${sectorStrings.join(", ")})`;

      // Run API calls in parallel for all variants
      const results = await Promise.all(
        sectorStrings.map(async (sec) => {
          const payload = {
            Sectors: sec,
            FlightDate: travelDateTime
              .toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .split("-")
              .reverse()
              .join("/"),
            FlightNumber: "",
          };
          try {
            const res = await axios.post(
              "http://13.203.38.118:8080/B2BFareTest/Availability",
              payload,
              { headers: { "Content-Type": "application/json" } }
            );
            return res.data?.Flights?.[0]?.JourneysList?.[0]?.LIST || [];
          } catch (e) {
            return []; // If one fails, just skip that result
          }
        })
      );
      // Merge all items from all responses
      items = ([] as any[]).concat(...results);
    } else {
      // --- Non-Goa sector: do normal fetch
      const payload = {
        Sectors: flightSector,
        FlightDate: travelDateTime
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          .split("-")
          .reverse()
          .join("/"),
        FlightNumber: "",
      };
      try {
        const res = await axios.post(
          "http://13.203.38.118:8080/B2BFareTest/Availability",
          payload,
          { headers: { "Content-Type": "application/json" } }
        );
        items = res.data?.Flights?.[0]?.JourneysList?.[0]?.LIST || [];
      } catch (e) {
        items = [];
      }
    }

    // --- Your enrichment logic starts here. 'items' is merged for Goa
    if (items?.length === 0) {
      return {
        sameFlightFare: 0,
        lowestFlightFare: 0,
        sameFlightStock: 0,
        averageFare: 0,
        availableStock: 0,
        lowestFareFlightNumber: null,
        lowestFareFlightDepartureTime: null,
        windowedLowestFare: null,
        windowedLowestFareFlightNumber: null,
        windowedLowestFareDepartureTime: null,
        errorMessage: "No flights found",
        remarks: "No flights found for the given sector" + remarksExtra,
      };
    }

    // ----------- Step 1: Find Target Departure Time -----------
    let targetDepartureTime: Date | null = null;
    for (const item of items) {
      const flightData = item.AirlinetList?.[0];
      if (!flightData) continue;
      const flightNoRaw = flightData.AirlineNo || "";
      const flightNo = flightNoRaw.split(" ").pop()?.trim();
      const departureDateTime = flightData.DepartureDateTime || "";
      let segmentDepartureDate: Date | null = null;
      if (departureDateTime) {
        const parsed = parse(
          departureDateTime,
          "dd MMM yyyy HH:mm",
          new Date()
        );
        segmentDepartureDate = isValid(parsed) ? parsed : null;
      }
      if (parseInt(flightNo) === flightNumber) {
        targetDepartureTime = segmentDepartureDate;
        // **DO NOT BREAK**. Collect ALL matches.
      }
    }

    // ----------- Step 2: Collect Data -----------
    let sameFlightFare: number | undefined;
    let sameFlightSeats: number | undefined;
    let lowestFlightFare: number | undefined;
    let lowestFareFlightNumber: string | null = null;
    let lowestFareFlightDepartureTime: Date | null = null;
    let totalFareSum = 0;
    let totalFareCount = 0;
    let totalSeats = 0;

    for (const item of items) {
      const flightData = item.AirlinetList?.[0];
      if (!flightData) continue;
      const flightNoRaw = flightData.AirlineNo || "";
      const flightNo = flightNoRaw.split(" ").pop()?.trim();
      const availSeats = parseInt(flightData.AvailSeat || "0");
      const departureDateTime = flightData.DepartureDateTime || "";
      let segmentDepartureDate: Date | null = null;
      if (departureDateTime) {
        const parsed = parse(
          departureDateTime,
          "dd MMM yyyy HH:mm",
          new Date()
        );
        segmentDepartureDate = isValid(parsed) ? parsed : null;
      }
      const priceList = item.PriceDetails || [];
      for (const fare of priceList) {
        const priceDesc = fare?.Pricedescription?.[0];
        const grossAmountStr = priceDesc?.GrossAmount || "0";
        const netAmount = parseFloat(grossAmountStr);

        // -- Collect Same Flight Fare (lowest fare for that flight) --
        if (parseInt(flightNo) === flightNumber) {
          if (sameFlightFare === undefined || netAmount < sameFlightFare) {
            sameFlightFare = netAmount;
            sameFlightSeats = availSeats;
          }
        }
        // -- Collect Overall Lowest Fare --
        if (lowestFlightFare === undefined || netAmount < lowestFlightFare) {
          lowestFlightFare = netAmount;
          lowestFareFlightNumber = flightNoRaw;
          lowestFareFlightDepartureTime = segmentDepartureDate;
        }

        totalFareSum += netAmount;
        totalFareCount++;
      }
      totalSeats += availSeats;
    }

    // ----------- Step 3: Windowed Direct Lowest Fare -----------
    let windowedLowestFare: number | null = null;
    let windowedLowestFareFlightNumber: string | null = null;
    let windowedLowestFareDepartureTime: Date | null = null;
    let foundDirectFlight = false;
    if (targetDepartureTime) {
      for (const item of items) {
        const flightData = item.AirlinetList?.[0];
        if (!flightData) continue;
        const flightNoRaw = flightData.AirlineNo || "";
        const isDirect =
          flightData?.Stops === 0 ||
          flightData?.Stops === "0" ||
          flightData?.Stops === null ||
          flightData?.Stops === undefined;
        const departureDateTime = flightData.DepartureDateTime || "";
        let segmentDepartureDate: Date | null = null;
        if (departureDateTime) {
          const parsed = parse(
            departureDateTime,
            "dd MMM yyyy HH:mm",
            new Date()
          );
          segmentDepartureDate = isValid(parsed) ? parsed : null;
        }
        // Only consider direct flights within window
        if (
          isDirect &&
          segmentDepartureDate &&
          targetDepartureTime &&
          segmentDepartureDate.getTime() >=
            targetDepartureTime.getTime() - 4 * 60 * 60 * 1000 &&
          segmentDepartureDate.getTime() <=
            targetDepartureTime.getTime() + 4 * 60 * 60 * 1000
        ) {
          const priceList = item.PriceDetails || [];
          for (const fare of priceList) {
            const priceDesc = fare?.Pricedescription?.[0];
            const grossAmountStr = priceDesc?.GrossAmount || "0";
            const netAmount = parseFloat(grossAmountStr);

            foundDirectFlight = true;
            if (windowedLowestFare === null || netAmount < windowedLowestFare) {
              windowedLowestFare = netAmount;
              windowedLowestFareFlightNumber = flightNoRaw;
              windowedLowestFareDepartureTime = segmentDepartureDate;
            }
          }
        }
      }
    }

    const averageFare = totalFareCount > 0 ? totalFareSum / totalFareCount : 0;

    if (!foundDirectFlight) {
      return {
        sameFlightFare: sameFlightFare ?? 0,
        lowestFlightFare: lowestFlightFare ?? 0,
        sameFlightStock: sameFlightSeats ?? 0,
        averageFare: averageFare,
        availableStock: totalSeats,
        lowestFareFlightNumber: lowestFareFlightNumber ?? null,
        lowestFareFlightDepartureTime: lowestFareFlightDepartureTime ?? null,
        windowedLowestFare: null,
        windowedLowestFareFlightNumber: null,
        windowedLowestFareDepartureTime: null,
        errorMessage: "No direct flights found in ±4 hour window",
        remarks: "No direct flights found for windowed search" + remarksExtra,
      };
    } else {
      return {
        sameFlightFare: sameFlightFare ?? 0,
        lowestFlightFare: lowestFlightFare ?? 0,
        sameFlightStock: sameFlightSeats ?? 0,
        averageFare: averageFare,
        availableStock: totalSeats,
        lowestFareFlightNumber: lowestFareFlightNumber ?? null,
        lowestFareFlightDepartureTime: lowestFareFlightDepartureTime ?? null,
        windowedLowestFare: windowedLowestFare ?? lowestFlightFare ?? null,
        windowedLowestFareFlightNumber:
          windowedLowestFareFlightNumber ?? lowestFareFlightNumber ?? null,
        windowedLowestFareDepartureTime:
          windowedLowestFareDepartureTime ??
          lowestFareFlightDepartureTime ??
          null,
        errorMessage: sameFlightFare ? "" : "Same Flight Fare Not Found",
        remarks: "AO API Enriched" + remarksExtra,
      };
    }
  }
}
