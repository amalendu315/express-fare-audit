# 📘 Fare Audit API

This API allows vendors or internal tools to log and enrich fare audit data using flight and fare-related information.

## 🌐 Base URL

```
http://35.154.145.73:6000/api
```

---

## 📬 Endpoints

### 🔹 POST `/log-fare-manage`

Logs fare audit entries in bulk for multiple tickets.

#### ✅ Request Body

```json
{
  "ticketIds": ["120", "121", "122"],
  "fareLogIds": ["900", "901", "902"]
}
```

> Ticket IDs and Fare Log IDs must be equal in length.

#### ✅ Success Response

```json
{
  "status": "completed",
  "added": ["120", "121"],
  "duplicates": ["122"],
  "message": "Bulk fare manage log processed."
}
```

#### ❌ Error (400)

```json
{
  "status": "error",
  "message": "TicketIDs and FareLogIDs are not the same count"
}
```

---

### 🔹 POST `/log-booking-ticket`

Logs a single booking ticket's fare audit entry.

#### ✅ Request Body

```json
{
  "bookingId": 101,
  "ticketId": 120,
  "fareLogId": 888,
  "source": "VendorIntegration"
}
```

#### ✅ Success Response

```json
{
  "status": "success",
  "message": "BookingTicket log added and queued for enrichment."
}
```

#### 🚫 Duplicate Response

```json
{
  "status": "duplicate",
  "message": "Booking log already exists."
}
```

---

## 🔄 Background Enrichment

Once logs are added, they are queued for asynchronous enrichment using:

- FS API (JustClick)
- AO API (AirIQ system)

The enriched data is saved in the database, including fares and seat availability.

---

## 🧪 Testing Tools

You can test this API using:

- Postman
- Insomnia
- curl

#### Curl Example

```bash
curl -X POST http://35.154.145.73:6000/api/log-fare-manage \
  -H "Content-Type: application/json" \
  -d '{ "ticketIds": ["120"], "fareLogIds": ["900"] }'
```

---

## 🔐 Security

Currently, there is **no authentication layer** in place. For production use, it is highly recommended to implement:

- API Key headers
- JWT authentication
- IP whitelisting

---

## 📞 Need Help?

For integration or issue tracking, contact the backend team maintaining the Fare Audit System.