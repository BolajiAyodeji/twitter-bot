
const bot = require('./keys');

module.exports = {
    tweet: (tweet) => {
        bot.post('statuses/update', {
            status: tweet
        });
    },

    retweet: (tweet) => {
        bot.post('statuses/retweet/:id', {id: tweet.id_str});
    },

    reply: (tweet, reply) => {
        bot.post('statuses/update', {
            status: `@${tweet.user.screen_name} ${reply}`,
            in_reply_to_status_id: tweet.id_str
        });
    },

    like: (tweet) => {
        bot.post('favorites/create', {id: tweet.id_str});
    },

    addToList: (list, user) => {
        bot.post('lists/members/create', {
            slug: list,
            owner_screen_name: iambolajiayo.screen_name,
            screen_name: user
        });
    }
}
