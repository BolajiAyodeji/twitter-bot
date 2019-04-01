
require('dotenv').config()

const Twit = require('twit');

module.exports = new Twit({
  consumer_key: process.env.BOLAJI_CONSUMER_KEY,
  consumer_secret: process.env.BOLAJI_CONSUMER_SECRET,
  access_token: process.env.BOLAJI_ACCESS_TOKEN,
  access_token_secret: process.env.BOLAJI_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000
});
