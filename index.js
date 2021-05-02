const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new discord.Client();
client.login(process.env.token);


client.on("ready", async () =>{

    console.log(`${client.user.username} Is Online!`);
    client.user.setActivity("/help | MaanstadRP", {type: "WATCHING"})

});
