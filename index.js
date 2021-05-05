const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new discord.Client();
client.login(process.env.token);


client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({status: "idle"})//;
    //client.user.setActivity("Hans van MaanstadRP", {type: "WATCHING"})
    });
