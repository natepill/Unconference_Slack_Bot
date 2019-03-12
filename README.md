# Unconference Reminder Slack Bot

A Slack Bot application in the Product College workspace that reminds Unconference participants of their obligation to speak at Friday's Unconference event. Is also used by organizers to identify who has and has not spoken, or who needs to reschedule their talk.

*PROJECT STATS: ONGOING*

## What are Unconference Talks?

Also referred to as "Lightning Talks", Unconference Talks are 3 to 5-minute prepared presentations that focus on a speaker’s ability to take a topic, break the topic down into core elements, and resourcefully convey that topic by structuring those core elements in a way that makes sense to the audience.

Reference: https://docs.google.com/document/d/1iqY68uklD3nJmeC_WnXTCN0Dwx0iMpnc9H_6Vz2rdH0/


## What's happening

To process the data from the csv, We are currently downloading the Google Spreadsheets as a csv and utilizing the the file in an external API that responds back to this project's server. The API will return the names and topics of the people who are supposed to be giving Unconference talks.

Unconference Google Spreadsheets Schedule: https://docs.google.com/spreadsheets/d/1eJNFUyjM74hElIS8XgvasPpx-CKacNyfx_HAbZfjmuc/edit
Unconference API repo: https://github.com/natepill/Unconference-Flask-API

Hitting this endpoint will return a json object with key, values looking like:
"<Date>": {<object with key,values of who is speaking and their topic>}

We then utilize the Slack API in order to create a Slack Bot application in the Product College workspace. The Slack bot will hit the API on a time interval (Every Monday at 12:00 P.M) to retrieve who is speaking that week and send out the appropriate direct messages.


## Contributors


## Versioning
* Need to use (http://semver.org/) for versioning


## Acknowledgments
