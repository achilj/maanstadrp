const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () =>{

    console.log(`${client.user.username} Is Online!`);
    client.user.setActivity("/help to get started!", {type: "PLAYING"})

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ")

    var command = messageArray[0];

    if(command === `${prefix}status`){
        return message.channel.send("**Status:** `Under Maintenance... :)`")
    }
    if(command === `${prefix}help`){
        return message.author.send("**Information Of Bot Commands**\n*Het prefix van de bot is `/`*\n\n`/Info`: Geeft deze lijst weer!\n\n`/server`: Geeft informatie over de FiveM Server weer!\n\n`/info`: Geeft informatie over Maanstad weer!\n\n`/status`: Geeft de status van de bot\n\n`/rules`: Geeft de regels")
    }
    if(command === `${prefix}hallo`){
        return message.author.send("Doei: https://media0.giphy.com/media/jttzrTgEahKVolSPWw/source.gif", message.channel.send("Check je DM!"));

    }

    if(command === `${prefix}maanstad`){
        
        var botEmbed = new discord.MessageEmbed()
        .setTitle("**__WIE OF WAT IS MAANSTAD?__**")
        .setDescription("*In de bericht vind je informatie over maanstad!*")
        .setColor("#1efd00")
        .addFields(
            {name: "*Team:*", value: "Wij als TeamMaanstad zullen er voor zorgen dat jij in een kwalitatieve server kunt roleplayen!\nHeb jij last van FailRP dan zullen wij daar ook streng op toetreden"},
            {name: "*Wat is Maanstad?*", value: "Maanstad is een whitelisted FiveM server die zich richt op goede en serieuze roleplay, ook heeft de stad een volledig custom framework en dat is het klein dingetje dat Maanstad Speciaal maakt!"},
            {name: "*Hoe kan ik op de Whitelist terecht komen?*", value: "Je bent verplciht een intake gesprek te vormen met onze intake managers, zij bepalen ook of jij in de server komt ja of nee, ook heeft hogerop het volste recht om je van de whitelist te verwijderen!\nAlvorens je een intake gesprek aangaat moet je eerst alle regels hebben doornomen!"}
        )
        .setThumbnail("https://cdn.discordapp.com/attachments/678506660666277889/740625216287539230/maandstad_logo.jpg")
        .setImage("https://cdn.discordapp.com/attachments/678506660666277889/740625704848457759/FIVEM_SERVER_BANNER.jpg")
        .setFooter("Made By RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/740917308872065084/icon_donationpage.png")
        .setTimestamp("Now")


        return message.channel.send(botEmbed);
        }

        if(command === `${prefix}server`){
        
            var botEmbed = new discord.MessageEmbed()
            .setTitle("**__DE FIVEM SERVER?__**")
            .setDescription("*Hier vind je informatie over onze FiveM server!*")
            .setColor("#1efd00")
            .addFields(
                {name: "*__Het speel niveau:__*", value: "In Maanstad verwachten wij van elke speler een hoog niveau van roleplay, dit houd in dat je weet wat je doet en je goed in je character kunt houden!"},
                {name: "*__Spelers & Whitelist__*", value: "Op onze server staat een whitelist, om op de whitelist te komen staan moet je eerst een intake gesprek doen.\nDoor een whitelist en een intake systeem op onze server hopen wij het Roleplay niveau te versterken, zo kiezen wij of jij geschikt bent ja of nee!"},
                {name: "*__Regels & Downloads__*", value: "Voor de regels kan je op onze website terecht: https://maanstadrp.nl/regels\nVoor Downloads kan je hier terecht: https://maanstadrp.nl/downloads"},
                {name: "*__Discord en IC kanalen__*", value: "Als je speelt in onze server staat rechtboven https://invite.gg/maanstadrp, als je deze link invoert op je browser kom je terecht op onze discord!\nOp de discord hebben wij verschillende kanalen, ook hebben wij InCharacter kanalen en in deze kanalen kan jij jou twitter foto's plaatsen, solliciteren, maar ook complimentjes aan elkaar geven!"}
            )
            .setThumbnail("https://cdn.discordapp.com/attachments/678506660666277889/740625216287539230/maandstad_logo.jpg")
            .setFooter("Made By RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/740917308872065084/icon_donationpage.png")
            .setTimestamp("Now")

            return message.channel.send(botEmbed);
        }

if(command === `${prefix}regels`){

        var botEmbed = new discord.MessageEmbed()
        .setTitle("ALGEMENE FIVEM SERVER REGELS")
        .setDescription("*Rule Version: `1.1`*")
        .setColor("#ff0000")
        .addFields(
            {name: "__Roleplay Rules:__", value: "Je bent verplicht je karakter eigenschappen te volgen, bv. als je een oud persoon bent dat je ook als een opa praat!"},
            {name: "__Powergaming:__", value: "Je mag geen misbruik maken van je revives, ook telt dit mee dat je geen tactics mag gebruiken bv na een ambulance revive dat je meteen begint te vechten"},
            {name: "__Safezones:__", value: "Dit houd in dat je binnen de volgende zones niet mag vechten of mensen ontvoeren!\nHet Ziekenhuis, Hier is de enige plaats waar mensen kunnen komen om hun te laten verzorgen, hier mag je dus niet vechten of mensen ontvoeren (inclusief de stoep)\nJe mag burgers niet verplichten om geld te pinnen om daarna ze te bestelen!\nJe Appartement, Hier mag je niemand ontvoeren of vermoorden!\nHeel blokkenpark is een savezone, hier mag je wel vechten maar niemand ontvoeren!"},
            {name: "__Algemene Regels:__", value: "VDM, VehicleDeathMatch, mensen met opzet aanrijden of dood rijden is niet toegestaan\nRDM, RandomDeathMatch, zonder aanleiding tot RP mag je niet zomaar iemand doodmaken"}
        )
        .setThumbnail("https://cdn.discordapp.com/attachments/678506660666277889/740625216287539230/maandstad_logo.jpg")
        .setFooter("Made By RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/740917308872065084/icon_donationpage.png")
        .setTimestamp("Now")
        
            return message.author.send(botEmbed, message.channel.send("Check je DM! seksie tijger! 😘"));
        }

        if (command === `${prefix}kick`) {
 
            const args = message.content.slice(prefix.length).split(/ +/);
     
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Missing Permissions, contact the developers or owners!");
     
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Missing Permissions, Contact our developers or owners!");
     
            if (!args[1]) return message.reply("Who need a kick? You forgot the username!");
     
            if (!args[2]) return message.reply("What's the reason? Plz enter a reason!");
     
            var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
     
            var reason = args.slice(2).join(" ");
     
            if (!kickUser) return message.reply("Can't find the user");
     
            var embed = new discord.MessageEmbed()
                .setColor("#ff0000")

                .setThumbnail(kickUser.user.displayAvatarURL)

                .setFooter(message.member.displayName, message.author.displayAvatarURL)

                .setTimestamp()

                .setDescription(`**Kicked:** ${kickUser}
                **Admin:** ${message.author}
                **Reason:** ${reason}`);
     
            var embedPrompt = new discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Please, react within 30 seconds!")
                .setDescription(`Do you want to kick ${kickUser}?`);
     
     
            message.channel.send(embedPrompt).then(async msg => {
     
                var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
     
                if (emoji === "✅") {
     
                    msg.delete();
     
                    kickUser.kick(reason).catch(err => {
                        if (err) return message.channel.send(`Something went wrong...`);
                    });
     
                    message.reply(embed);
     
                } else if (emoji === "❌") {
     
                    msg.delete();
     
                    message.reply("kick canceled").then(m => m.delete(5000));
     
                }
     
            });
        }
     
     
        if (command === `${prefix}ban`) {
     
            const args = message.content.slice(prefix.length).split(/ +/);
     
            if (!args[1]) return message.reply("No user found...");
     
            if (!args[2]) return message.reply("What's the reason? Plz enter a reason!");
     
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("sorry jij kan dit niet");
     
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Missing Permissions, contact the developers or owners!");
     
            var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
     
            var reason = args.slice(2).join(" ");
     
            if (!banUser) return message.reply("Can't found the user...");
     
            var embed = new discord.MessageEmbed()
                .setColor("#ff0000")

                .setThumbnail(banUser.user.displayAvatarURL)

                .setFooter(message.member.displayName, message.author.displayAvatarURL)

                .setTimestamp()

                .setDescription(`**Banned:** ${banUser}
                **Admin:** ${message.author}
                **Reason: ** ${reason}`);
     
            var embedPrompt = new discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Please, react within 30 seconds!")
                .setDescription(`Do you want to ban ${banUser}?`);
     
     
            message.channel.send(embedPrompt).then(async msg => {
     
                var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
     
     
                if (emoji === "✅") {
     
                    msg.delete();
     
                    
                    banUser.ban(reason).catch(err => {
                        if (err) return message.channel.send(`Something went wrong`);
                    });
     
                    message.reply(embed);
     
                } else if (emoji === "❌") {
     
                    msg.delete();
     
                    message.reply("Ban Canceled").then(m => m.delete(5000));
     
                }
     
            });
        }
     
    async function promptMessage(message, author, time, reactions) {
        time *= 1000;

        for (const reaction of reactions) {
            await message.react(reaction);
        }

        const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
     
        return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }});