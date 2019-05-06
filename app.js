// Can run app with npm start
const SlackBot = require('slackbots');
const axios = require('axios');
const csvJSON = require('./utils/csv-to-json');
const http = require('http');
const request = require('request');
const fs = require('fs');
const csv = require('csv-parser');
require('dotenv').config();


// User Story:
// Medi is scrolling through Slack on Monday around Noon when he gets a message from the Unconference Slack Bot
// that is Notifying him that he is up to present this week

// Rquirements:
// Users should be gettting a message at Noon on Monday everyweek based on spreadsheet entries
// There should only be one message sent out
// The Slackbot should appropriatly deal with user input, ie: confirming/denying/rescheduling schedules
// Slackbot should stop when there are no more people to alert


// Business Value:
// Automated communication for Unconference messaging is a great way to save employee time that they could be
// spending on their work for the comapny. This SlackBot removes the need for humans to communicate about Unconference updates
// and converse about scheduling.


// Slackbot JS documentation
// https://github.com/mishk0/slack-bot-api

// Slack Channel Testing
// https://slack-bot-testingtalk.slack.com/messages/DGTR9HVKQ/



// var options = {
//      path:  "https://unconference-api.herokuapp.com/"
//      method: "GET"
//  };



const bot = new SlackBot({
    token: process.env.TOKEN,
    name: 'UnconferenceReminderBot'
});


// TODO: Need to add an interval. How can I have the bot start up every Monday at 12:00 P.M?
// TODO: Probably should use Moment.js in order to create a timestamp that reflect the format of the json keys
// TODO: Probably need a heroku scheduler to run the server every Monday at 11:59 --> https://devcenter.heroku.com/articles/scheduler

var now = new Date();
var millisTill12 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0) - now;
 // NOTE: Is this conditional even needed?
 // The entirity of this script is run every Monday at 11:59 via a Heroku Scheduler. If millisTill12 < 0 (When the timer counts down to 12:00, run setTimeout )
// Since the script is being run every Monday at 11:58, we don't really need to reset the milisecond countdown timer (millisTill12), because the current date is being reset everytime we run the script from Heroku
if (millisTill12 < 0) {
     millisTill12 += 86400000; // it's after 10am, try 10am tomorrow.
     console.log("It's 10:00 AM!")
}
setTimeout(function(){console.log("ASDASDASDAS");}, millisTill12);






// Start Handler
bot.on('start', () => {


    var req = request("https://unconference-api.herokuapp.com/", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    });




    const params = {
        icon_emoji: ":smiley:"
    }

    bot.postMessageToChannel('general', 'This is a message to General Channel', params);
    var message = "Hey <Insert Name>! This is a reminder that you have your unconference talk on <Insert Topic> scheduled for this week!"
    bot.postTo('natepill', message, params);

})

// Required the csv file, converting it into json, then writing the json object to a file




// NOTE: SHOULD HOLD OFF ON CLEANING AND READING IN CSV FILE UNTIL AAKASH AND I UPDATE IT
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




//NOTE: Below is not needed for an MVP. Keeping it because I may have users want to respond to the slack bot via /commands to confirm or deny the talk


// Error Handler
bot.on('error', (err) => console.log(err));


// Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message'){
        return;
    }

    handleMessage(data.text);

})

// Respond to messages
function handleMessage(message){
    if(message.includes(' chucknorris')){
        chuckResponse();

    }
}

// Tell ChuckNorris Joke
function chuckResponse(){

    const params = {
        icon_emoji: ":laughing:"
    }

    bot.postMessageToChannel('general', 'This is a message to General Channel', params);
}
