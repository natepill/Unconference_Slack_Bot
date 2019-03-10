// Run app with npm start

const SlackBot = require('slackbots');
const axios = require('axios');


const bot = new SlackBot({
    token: 'xoxb-569833390945-569851127617-dLInZww2cnGaiwLpEoZP3Rwe',
    name: 'UnconferenceReminderBot'
});

//Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ":smiley:"
    }

    bot.postMessageToChannel('general', 'This is a message to General Channel', params);

})


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
    if(message.includes(' chucknorris')){}
}
