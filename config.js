const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gpp1GT5C#JNVe3M3Kk6ybsx0tzf-EYTxHsHjL7uZRsj1fWonC9W8", 
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
AUTO_VOICE:"true" //true or false
};
