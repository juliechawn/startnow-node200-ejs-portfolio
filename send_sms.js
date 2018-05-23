const accountSid = 'ACb66dcfd46009eda5e3ee13952d4a270c';
const authToken = '225b5c59dfb79c5b80f36824de711a9d';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19592008783',
     to: '+18608742863'
   })
  .then(message => console.log(message.sid))
  .done();