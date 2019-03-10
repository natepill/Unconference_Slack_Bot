// Run app with npm start

const SlackBot = require('slackbots');
const axios = require('axios');
require('dotenv').config();


const bot = new SlackBot({
    token: process.env.TOKEN,
    name: 'UnconferenceReminderBot'
});

//Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ":smiley:"
    }

    bot.postMessageToChannel('general', 'This is a message to General Channel', params);

})

// NOTE: Methods that I may be using:

// getUser(name) (return: promise) - gets user by name,
// getChatId(name) (return: promise) - it returns or opens and returns a direct message channel ID,
// postMessage(id, text, params) (return: promise) - posts a message to channel | group | user by ID
// postTo(name, message [, params, callback]) (return: promise) - posts a message to channel | group | user by name,
// postMessageToUser(name, message [, params, callback]) (return: promise) - posts a direct message by user name,


// NOTE: Notify the unconference channel that someone has confirmed
// postMessageToChannel(name, message [, params, callback]) (return: promise) - posts a message to channel by name





//Error Handler
bot.on('error', (err) => console.log(err));


//Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message'){
        return;
    }

    handleMessage(data.text);

})


//Respond to messages
function handleMessage(message){
    if(message.includes(' chucknorris')){
        chuckResponse();

    }
}




//Tell ChuckNorris Joke

function chuckResponse(){

    const params = {
        icon_emoji: ":laughing:"
    }

    bot.postMessageToChannel('general', 'This is a message to General Channel', params);
}
