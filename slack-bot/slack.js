const { WebClient } = require("@slack/web-api");
require("dotenv").config();
const express = require("express");
const router = express.Router();

const API_TOKEN = process.env.API_TOKEN;
const web = new WebClient(API_TOKEN);
const conversationId = process.env.CONVERSATIONID;

router.post("/", (req, res) => {
  res.send("Hello, User");
  (async () => {
    // Post a message to the channel, and await the result.
    // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
    const result = await web.chat.postMessage({
      text: "Hello world!",
      channel: conversationId,
    });
  
    // The result contains an identifier for the message, `ts`.
    console.log(
      `Successfully send message ${result} in conversation ${conversationId}`
    );
  })();
});

module.exports = router;
