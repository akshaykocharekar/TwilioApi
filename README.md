# Twilio SMS Notification System

This project implements an SMS notification system using Twilio's API. The system allows sending SMS messages to multiple users through a simple frontend and backend setup.

## Features 🚀
- Send automated SMS notifications
- Support for sending messages to multiple users at once
- Simple UI for user interaction
- Scalable backend using Node.js and Express

## Tech Stack 🛠️
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database (Optional):** MongoDB (if needed for storing numbers)
- **API:** Twilio API

## Installation 📥

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/twilio-sms-system.git
cd twilio-sms-system
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

### 4️⃣ Run the Server
```sh
npm start
```
The server will start on **http://localhost:3000**.

## Usage 🚀
1. Open the frontend UI.
2. Enter phone numbers and a message.
3. Click **Send SMS** to send messages to all users.
4. Messages will be sent using Twilio's API.

## Deployment 🌍
To deploy the app on platforms like **Render, Vercel, or Heroku**, ensure environment variables are set up correctly in the deployment settings.

## Troubleshooting ⚠️
- If `ERR_MODULE_NOT_FOUND`, reinstall dependencies: `npm install`
- Ensure Twilio credentials are correct in `.env`
- If sending fails, verify Twilio phone number permissions

## License 📝
This project is licensed under the **MIT License**.

## Author ✨
[Akshay Kocharekar](https://github.com/akshaykocharekar)
