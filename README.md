# Farahamrah WhatsApp Sender

This server is used to send WhatsApp messages using Meta Cloud API as part of the **Farahamrah** project.

## ✅ Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add `.env` file with:
   ```
   ACCESS_TOKEN=your_access_token_here
   PHONE_NUMBER_ID=your_phone_id_here
   ```

3. Start server:
   ```bash
   npm start
   ```

## 🌐 Endpoint

```
POST /send-whatsapp
Content-Type: application/json
Body:
{
  "name": "مشتری",
  "estimate": "25,000,000 تومان",
  "link": "https://link.to/pdf"
}
```