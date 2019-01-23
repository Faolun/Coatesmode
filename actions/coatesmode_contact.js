"use strict";
let datafire = require('datafire');

let google_gmail = require('@datafire/google_gmail').actions;
module.exports = new datafire.Action({
  description: "Contact Backend for Website",
  handler: async (input, context) => {
    let encodedMessage = await google_gmail.buildMessage({
      to: "james.coatesiii@gmail.com",
      from: "james.coatesiii@gmail.com",
      subject: input.first_name + " " + input.last_name + " contacted you via Coatesmode.com",
      body: input.message,
    }, context);
    let message = await google_gmail.users.messages.send({}, context);
    return message;
  },
});
