
module.exports = {
    // host: "127.0.0.1",
    port: process.env.PORT, // change with production port
    projectId:process.env.PROJECT_ID,
    sessionId:process.env.SESSION_ID,
    privateKey:process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail:process.env.CLIENT_EMAIL,
    languageCode:process.env.LANGUAGE_CODE
 
};