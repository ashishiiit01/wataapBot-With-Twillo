

const Config = require("./index");
const Dialogflow = require('dialogflow');
const projectId = Config.projectId; 
const sessionId = Config.sessionId;
const languageCode = Config.languageCode;

var request;

//DialogFlow configuration setup
const dialogflow_config = {
    credentials: {
        private_key: Config.privateKey,
        client_email: Config.clientEmail
    }
};

const sessionClient = new Dialogflow.SessionsClient(dialogflow_config);
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

/**
*
 *** @author     : Anupam Saha, Ashish Kumar
 *
 *** @date       : 25-05-2019 
 *
 *** @Description: Passes the text to the dialogflow and returns the response to the calling function
 * 
 **/

 async function findUserLanguage(userid) {
   let user = await UserCtrl.findUserById(userid)
   return user.language;

}

module.exports = async (text) => {    
    if (text) {
        var message = text;
        request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: "en-Us",
                }
            },
        };
        responses = await sessionClient.detectIntent(request);
        return responses; //returns the dialogFlow message to message-webhook
    }

}