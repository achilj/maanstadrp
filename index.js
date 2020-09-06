const discord = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new discord.Client();
client.login(process.env.token);


client.on("ready", async () =>{

    console.log(`${client.user.username} Is Online!`);
    client.user.setActivity("/help | MaanstadRP", {type: "WATCHING"})

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ")

    var command = messageArray[0];

    if(command === `${prefix}status`){
        return message.channel.send("**Status:** `Under Maintenance...👷🏼‍♂️🔧`")
    }
    if(command === `${prefix}help`){
        return message.author.send("**Information Of Bot Commands**\n*Het prefix van de bot is `/`*\n\n`/Info`: Geeft deze lijst weer!\n\n`/server`: Geeft informatie over de FiveM Server weer!\n\n`/info`: Geeft informatie over Maanstad weer!\n\n`/status`: Geeft de status van de bot\n\n`/rules`: Geeft de regels"), message.channel.send("Check je DM lieve schat💖!");
    }
    if(command === `${prefix}hallo`){
        return message.author.send("Vuile hond, waarom stoor je mij op deze rustige dag🤬\nhttps://media1.tenor.com/images/54734cc85cfbf575de2b9f170d0e58e9/tenor.gif", message.channel.send("Fuckin hell waarom dit nou weer, kijk je pm maar gauw snotjonk👶🏼🤬!"));
    }
    if(command === `${prefix}18+`){
        var role= member.guild.roles.cache.find(role => role.name === ("741425000799535176"));
        return member.roles.add(role), message.author.send("Ik heb je de 18+ rol gegeven!");  
    }

    if(command === `${prefix}info`){
        
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
        .setFooter("Made By RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/740917308872065084/icon_donationpage.png")
        .setTimestamp("Now")


        return message.author.send(botEmbed), message.channel.send("Check je DM lieve schat💖!");
        }

        if(command === `${prefix}server`){
        
            var botEmbed = new discord.MessageEmbed()
            .setTitle("**__DE FIVEM SERVER?__**")
            .setDescription("*Hier vind je informatie over onze FiveM server!*")
            .setColor("#1efd00")
            .addFields(
                {name: "*__Het speel niveau:__*", value: "In Maanstad verwachten wij van elke speler een hoog niveau van roleplay, dit houd in dat je weet wat je doet en je goed in je character kunt houden!"},
                {name: "*__Spelers & Whitelist__*", value: "Op onze server staat een whitelist, om op de whitelist te komen staan moet je eerst een intake gesprek doen.\nDoor een whitelist en een intake systeem op onze server hopen wij het Roleplay niveau te versterken, zo kiezen wij of jij geschikt bent ja of nee!"},
                {name: "*__Regels & Downloads__*", value: "Voor de regels kan je op onze website terecht: https://maanstadrp.nl/regels\n\nVoor Downloads kan je hier terecht: https://maanstadrp.nl/downloads"},
                {name: "*__Discord en IC kanalen__*", value: "Als je speelt in onze server staat rechtboven https://invite.gg/maanstadrp, als je deze link invoert op je browser kom je terecht op onze discord!\nOp de discord hebben wij verschillende kanalen, ook hebben wij InCharacter kanalen en in deze kanalen kan jij jou twitter foto's plaatsen, solliciteren, maar ook complimentjes aan elkaar geven!"}
            )
            .setThumbnail("https://cdn.discordapp.com/attachments/678506660666277889/740625216287539230/maandstad_logo.jpg")
            .setFooter("Made By RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/740917308872065084/icon_donationpage.png")
            .setTimestamp("Now")

            return message.author.send(botEmbed), message.channel.send("Check je DM lieve schat💖!");
        }

        if(command === `${prefix}regels`){

        	var botEmbed = new discord.MessageEmbed()
        	.setTitle("**__WIE OF WAT IS MAANSTAD?__**")
        	.setDescription("*In de bericht vind je informatie over maanstad!*")
        	.setColor("#1efd00")
        	.addFields(
                {name: "**__Een aantal begrippen:__**", value: "*– RP -> Dit betekent RolePlay, dit zijn we hier bij Maanstad aan het doen.*\n*– OOC -> Out of Character. Dit zijn dingen die dus buiten de Roleplay om gebeuren.*\n*– IC > In Character. Dit zijn dingen die dus binnen de Roleplay gebeuren.*\n– VDM -> Vehicle Deathmatch. Zonder aanleiding mensen doodrijden.*\n*– RDM -> Random Deathmatch. Zonder aanleiding of RP iemand vermoorden. (mes, knuppel of slaan)*\n*– Deathmatch -> Zonder aanleiding mensen doodschieten.*\n*– FailRP -> Slechte of niet kloppende roleplay waarbij iemand daadwerkelijk wordt benadeeld.*\n*– Frituurtaal -> Op het moment dat je in de stad bent, over Out Of Character zaken praten*\n\n__Ten alle tijden dient men zich behoorlijk te gedragen op onze openbare kanalen. Dit betreft dus in de server en op Discord.__\n*Met behoorlijk bedoelen wij:*\n*– Respect naar anderen;*\n*– Fatsoenlijk taalgebruik;*\n*– Niet schelden;*\n*– De juiste kanalen gebruiken voor hetgeen wat je nodig hebt;*\n*– Niet onnodig management, developers en andere hulp kanalen aanspreken;*"},
        	)
        	.setThumbnail("https://cdn.discordapp.com/attachments/678506660666277889/740625216287539230/maandstad_logo.jpg")
        	.setFooter("Made By RealistiqRP", "https://media.discordapp.net/attachments/629335056095117312/740917308872065084/icon_donationpage.png")
        	.setTimestamp("Now")


        	return message.author.send(botEmbed), message.channel.send("Check je DM lieve schat💖!");
        }

        if(command === `${prefix}verwijder`) {
 
            const args = message.content.slice(prefix.length).split(/ +/);
     
            if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Missing Permissions, Contact the developers or owners!");
     
            if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Missing Permissions, Contact our developers or owners!");
     
            if (!args[1]) return message.reply("Je bent de username vergeten!");
     
            if (!args[2]) return message.reply("Wat is de reden? Noteer de reden bij je commando!");
     
            var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
     
            var reason = args.slice(2).join(" ");
     
            if (!kickUser) return message.reply("Kan de gebruiker niet vinden...");
     
            var embed = new discord.MessageEmbed()
                .setColor("#ff0000")

                .setThumbnail(kickUser.user.displayAvatarURL)

                .setFooter(message.member.displayName, message.author.displayAvatarURL)

                .setTimestamp()

                .setDescription(`**Verwijderd:** ${kickUser}
                **Admin:** ${message.author}
                **Reden:** ${reason}`);
     
            var embedPrompt = new discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Gelieve binnen 30 seconden te reageren!")
                .setDescription(`Ben je zeker dat je ${kickUser} wilt verwijderen?`);
     
     
            message.channel.send(embedPrompt).then(async msg => {
     
                var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
     
                if (emoji === "✅") {
     
                    msg.delete();
     
                    kickUser.kick(reason).catch(err => {
                        if (err) return message.channel.send(`Er is iets mis gegaan...`);
                    });
     
                    message.reply(embed);
     
                } else if (emoji === "❌") {
     
                    msg.delete();
     
                    message.reply("Verwijdering werdt geanuleerd").then(m => m.delete(5000));
     
                }
     
            });
        }
     
     
        if (command === `${prefix}verban`) {
     
            const args = message.content.slice(prefix.length).split(/ +/);
     
            if (!args[1]) return message.reply("Geen gebruiker gevonden...");
     
            if (!args[2]) return message.reply("Er werdt geen reden opgegeven!");
     
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Je hebt niet genoeg permissies om dit commando uit te voeren...");
     
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Missing Permissions");
     
            var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
     
            var reason = args.slice(2).join(" ");
     
            if (!banUser) return message.reply("Kan de gebruiker niet vinden...");
     
            var embed = new discord.MessageEmbed()
                .setColor("#ff0000")

                .setThumbnail(banUser.user.displayAvatarURL)

                .setFooter(message.member.displayName, message.author.displayAvatarURL)

                .setTimestamp()

                .setDescription(`**Verbannen:** ${banUser}
                **Admin:** ${message.author}
                **Reden: ** ${reason}`);
     
            var embedPrompt = new discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Gelieve binnen 30 seconden te reageren")
                .setDescription(`Wil je ${banUser} echt verbannen?`);
     
     
            message.channel.send(embedPrompt).then(async msg => {
     
                var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
     
     
                if (emoji === "✅") {
     
                    msg.delete();
     
                    
                    banUser.ban(reason).catch(err => {
                        if (err) return message.channel.send(`Something went wrong...`);
                    });
     
                    message.reply(embed);
     
                } else if (emoji === "❌") {
     
                    msg.delete();
     
                    message.reply("Verbanning geanuleerd").then(m => m.delete(5000));
     
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