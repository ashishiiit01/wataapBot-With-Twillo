const twilio = require('twilio');


const client = twilio(
    process.env.twilloId,
    process.env.twilloSecret
);


module.exports = (response,sender)=> {
 client.messages
        .create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body:response
        })
        .then(message => {
            console.log(message);
        })
        .catch(err => {
            console.error(err);
        });
}

   