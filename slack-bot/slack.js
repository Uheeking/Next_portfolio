const { WebClient } = require("@slack/web-api");
require('dotenv').config();

// 생성한 token
const API_TOKEN = process.env.API_TOKEN;

const web = new WebClient(API_TOKEN);
const conversationId = process.env.CONVERSATIONID;

(async () => {

    // Post a message to the channel, and await the result.
    // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
    const result = await web.chat.postMessage({
      text: 'Hello world!',
      channel: conversationId,
    });
  
    // The result contains an identifier for the message, `ts`.
    console.log(`Successfully send message ${result} in conversation ${conversationId}`);
  })();