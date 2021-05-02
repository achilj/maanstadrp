const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new discord.Client();
client.login(process.env.token);


client.on("ready", () =>{
    console.log(`Logged in as ${Bart Peters
               }!`);
    client.user.setPresence({
        status: "dnd",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: "Gay Porn",  // The message shown
            type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
 });
