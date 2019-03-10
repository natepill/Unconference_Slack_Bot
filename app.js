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

// TODO: Add everything that this app does to a README.md

// NOTE: SHOULD HOLD OFF ON CLEANING AND READING IN CSV FILE UNTIL AAKASH UPDATES IT
// TODO: Clean CSV file locally in pandas,
 // grab row in csv file based on current date,
// use that row to identify who is speaking that week and what their topic is,
// Send message to each user in csv row to remind them to prepare their talk,
// The message should read: "Hey <Insert Name>! This is a reminder that you have your unconference talk on <Insert Topic> scheduled for this week!"
// "Please respond with /<OPTION>" list out options and what they do
// user should be able to respond with:
// NOTE: Users should be alerted to the fact that they are sending information to a channel with other students and instructors
// NOTE: May not add this feature if those in channel do not want it.
// /confirm: sends message to unconference channel saying that the user confirmed their unconference talk and topic
// /deny: sends message to unconference channel saying that they are cancelling




// NOTE: Methods that I may be using:

// postTo(name, message [, params, callback]) (return: promise) - posts a message to channel | group | user by name,
// postMessageToUser(name, message [, params, callback]) (return: promise) - posts a direct message by user name,


// getUser(name) (return: promise) - gets user by name,
// getChatId(name) (return: promise) - it returns or opens and returns a direct message channel ID,
// postMessage(id, text, params) (return: promise) - posts a message to channel | group | user by ID


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
