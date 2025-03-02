import { useState } from "react";
import axios from "axios";

const Sms = () => {
  const [numbers, setNumbers] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendSMS = async () => {
    const phoneNumbers = numbers.split(",").map((num) => num.trim()); // Convert input to array

    try {
      setStatus("Sending...");
      const response = await axios.post("http://localhost:8080/send-sms", {
        numbers: phoneNumbers,
        message: message,
      });

      setStatus(`✅ SMS Sent to ${phoneNumbers.length} users!`);
    } catch (error) {
      setStatus(`❌ Error: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📩 Send Bulk SMS</h2>
      <textarea
        rows="3"
        placeholder="Enter numbers separated by commas"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <textarea
        rows="4"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button
        onClick={sendSMS}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Send SMS
      </button>
      <p>{status}</p>
    </div>
  );
};

export default Sms;
