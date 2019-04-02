"use strict";
let datafire = require('datafire');

let google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  description: "Contact Backend for Website",
  inputs: [{
    title: "first_name",
    maxLength: 254,
    type: "string"
  }, {
    type: "string",
    maxLength: 254,
    title: "last_name"
  }, {
    type: "string",
    maxLength: 254,
    title: "from",
    pattern: ".*@.*\\..*"
  }, {
    type: "string",
    maxLength: 5000,
    title: "message"
  }],
  handler: async (input, context) => {
    
    let user = await google_gmail.users.getProfile({
      userId: "me",
    }, context);
    let message = await google_gmail.buildMessage({
      to: user.emailAddress,
      from: user.emailAddress,
      subject: input.first_name + " " + input.last_name + " [ " + input.from + " ] contacted you via Coatesmode.com",
      body: input.message,
    }, context);
    let sent = await google_gmail.users.messages.send({
      userId: "me",
      body: {
        raw: message,
      },
    }, context);
    return "Success";
  },
});
