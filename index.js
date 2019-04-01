
require('dotenv').config()

const Twit = require('twit');

let bot = new Twit({
  consumer_key: process.env.BOLAJI_CONSUMER_KEY,
  consumer_secret: process.env.BOLAJI_CONSUMER_SECRET,
  access_token: process.env.BOLAJI_ACCESS_TOKEN,
  access_token_secret: process.env.BOLAJI_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000
})

const bolaji = {
    id: 890634172716527616,
    screen_name: 'iambolajiayo'
};

const emojis = ['👊', '👊', '🙌', '👍', '💁', '👌', '🙅', '👯'];


function sendReply() {
    const randomNumber = Math.random();
    if (randomNumber > 0.3) return true;
    return false;
}

function getEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function getTweet(tweet) {
    const text = `Thanks for sharing! ${ getEmoji() }`;
    return text;
}

const stream = bot.stream('statuses/filter', { track: ['bolaji ayodeji'] });

stream.on('tweet', (tweet) => {

	if ( tweet.user.id === bolaji.id ) {
        Twitter.like(tweet);
        Twitter.retweet(tweet);
		return;
	}

    if ( tweet.retweeted_status ) return;

	if ( tweet.text.toLowerCase().includes('@iambolajiayo') ) {
		if ( sendReply() ) {
            Twitter.reply(tweet, getTweet(tweet));
		}
		return;
  }

    Twitter.reply(tweet, getTweet(tweet));

});
