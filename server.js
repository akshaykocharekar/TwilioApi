import "dotenv/config";
import express from "express";
import cors from "cors";
import twilio from "twilio";

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Twilio Config
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// API to send SMS to multiple users
app.post("/send-sms", async (req, res) => {
  const { numbers, message } = req.body;

  if (!numbers || numbers.length === 0) {
    return res.status(400).json({ error: "No phone numbers provided" });
  }

  let results = [];
  let errors = [];

  // Using Promise.all to handle async operations
  await Promise.all(
    numbers.map(async (number) => {
      try {
        const sms = await client.messages.create({
          from: process.env.TWILIO_PHONE_NUMBER,
          to: number,
          body: message,
        });
        results.push({ number, status: "Sent", sid: sms.sid });
      } catch (error) {
        errors.push({ number, error: error.message });
      }
    })
  );

  res.status(200).json({ success: true, messages: results, errors });
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
