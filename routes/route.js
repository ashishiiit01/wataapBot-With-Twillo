const Dialogflow = require('../config/dialogflow')
const MessagingResponse =
    require("twilio").twiml.MessagingResponse;

const TwilloApi = require('../twilloApi')

module.exports = (app, io) => {
    var payments = [];

    app.route('/sms')
        .post(async function(req, res) {
        	//console.log("Route Page")
            //console.log("req", req.body)
            const twiml = new MessagingResponse();
            var senderNumber = req.body.From

           	var response = await Dialogflow(req.body.Body)
           	var dfResponse = responses[0].queryResult.fulfillmentText;
           	//console.log("dfResponse",dfResponse)

           	TwilloApi(dfResponse,senderNumber)

            twiml.message("Thanks for signing up!");
            res.end(twiml.toString());
        })



}