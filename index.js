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
                {name: "**__Permantnete bans__**", value: "*Allereerst, de “Non Appealable” bans. Deze bans gaan we dus nooit terug draaien, en zijn altijd permanent:*\n*– Hacking/Cheating – Een menu hebben waarmee zaken ingespawned kunnen worden;*\n*– Software gebruiken waardoor er iets aangepast wordt in de game behalve een Visual Pack;*\n*(Hier geldt ook onder: Mods/Trainers/Cheat Engine)*\n\n*Bij een aanvankelijk nieuwe speler zien wij het als “Niet voor de Roleplay komen, en dus een “permaban” voor onderstaande zaken:\n*– Schelden met het K woord (ziekte)*\n*– Discriminatie/Racisme*"},
                {name: "**__Bepaalde Tijd Ban__**", value: "*Een bepaalde tijd ban is ook niet appealable. Ben je gebanned voor een bepaalde tijd, dan dien je deze uit te zitten.*\n*Deze zullen dan ook niet behandeld worden in de ban appeals.*\n*– Schelden met het K woord (ziekte)*\n*– Discrimineren/Racisme*\n*– VDM / RDM / Fail RP*\n*– OOC Praten ingame, of in de IC kanalen op Discord*\n\n*Verder kunnen we het niet benoemen, maar “gebruik je gezonde verstand”. Als je zelf al het gevoel hebt van: “Dit kan niet door de beugel”, doe het dan ook niet!*\n\n*Een bepaalde tijd ban kan aan de hand van het vergrijp liggen op een uur, een dag, 3 dagen, 7 dagen en een maand. Wij gaan er van uit dat mensen leren van fouten en dat wanneer ze weer op Maanstad willen spelen, ze hun gedrag dermate aanpassen dat het niet meer zal gebeuren. Gebeurd het dan toch, dan wordt er een permanente ban gegeven.*\n\n*Het is dus zo dat een hoop bans “Non Appealable” zijn. Mocht je het echt niet eens zijn met een verbanning, dan kun je dat aangeven via een ban appeal op www.Maanstadrp.nl. Verwacht niet dat deze binnen een zeer korte tijd is afgehandeld.*\n*Wij behandelen deze zodra daar tijd voor is, en zodra allles besproken is.*"},
                {name: "**__Roleplay And Sich__**", "*Wij verwachten van de mensen die inloggen bij ons op de server, dat zij bewust kiezen voor Roleplay.*\n*Dit houdt in dat GTA achtige praktijken op andere servers, dan wel op de globale GTA Online uitgevoerd mogen worden, maar niet bij ons.*\n\n– Niet zomaar mensen doodrijden (Vehicle Deathmatch)\n– Niet zomaar in het rond gaan schieten (Random Deathmatch)\n– Je houd je aan de regels, dan wel aan de verkeersregels\n– Je volgt aanwijzingen van admins en management op": any},
                {name: "**__OOC in de stad__**", value: "*Wij hebben in Maanstad de /ooc functie uit staan. Voor eventuele noodgevallen kun je /looc gebruiken.*\n*Dit zal directe mensen in jouw omgeving bereiken. Misbruik dit niet! Dit betekent dat de /looc functie gebruikt mag worden als je bijvoorbeeld:*\n*– Binnen de roleplay als je iets niet weet (bijvoorbeeld hoe je je ID geeft);*\n*– Binnen de roleplay als je bijvoorbeeld vroegtijdig weg moet;\n\n*Vragen met betrekking tot de RP, of als je vast zit o.i.d., dien je een Report aan te maken via /report.*\n\n*Verkeerd gebruik zal bestraft worden met een warn. Na de 2de waarschuwing zullen wij bij een overtreding direct overgaan tot verwijdering voor een bepaalde tijd. Mocht het daarna nog een keer gebeuren, zal er overgegaan worden naar onbepaalde tijd.*"},
                {name: "**__Schelden en grof taalgebruik__**", value: "*Ja, het kan bij je character horen dat deze scheld. Maar houd wel rekening met anderen.*\n*Bepaalde woorden zijn sociaal totaal niet verantwoord en zullen dan ook niet getolereerd worden.*\n*Respectloosheid hierin zal direct worden bestraft. Hier geldt een zero tolerance beleid.*\n\n*Ditzelfde geldt voor respectloosheid op basis van gender.*\n*Dus respectloosheid naar specifiek mannen of specifiek vrouwen. Eenieder in Maanstad moet zich altijd op zijn/haar gemak kunnen voelen.*\n*Mocht het zo zijn dat er een Roleplay “Te Ver” gaat, dan kan de persoon “OKLAHOMA” in voice of in /LOOC aangeven.*\n*Hiermee dient de betreffende Roleplay afgebroken te moeten worden. Degene die OKLAHOMA aangeeft, moet dit uiteraard wel gegrond doen.*\n*Dus niet omwille van dat je het simpelweg ergens niet mee eens bent. Het gaat er daadwerkelijk om: “Voel je je niet gemakkelijk in bepaalde RP, dan kun je OKLAHOMA” aangeven. Uiteraard geldt dit voor zowel vrouwen, als voor mannen!*\n*Mocht er iemand zich hier niet aan houden, kun je /report doen in het tekstvak.*\n*Een admin zal je zo snel mogelijk komen helpen!*"},
                {name: "**__1. Basisregels__**", value: "*Het breken van de basisregels zal vaak worden afgedaan met een “aanspreking”.*\n*Dus je doet iets verkeerd, wij of de community spreekt je aan, en wij gaan er vanuit dat het dan niet meer gebeurd.*\n*Wij gaan er van uit dat eenieder binnen Maanstad al deze regels heeft gelezen.*\n*Mocht je er “schijt” aan hebben, dan zullen we daar gepaste maatregelen voor treffen in de vorm van een verbanning.*\n*Dit kan voor bepaalde tijd zijn voor een lichte overtreding, of permanent zijn als je gewoon letterlijk alles aan je laars lapt.*"},
                {name: "*__1.1 Vehicle Deathmatch__*", value: "*Dit is ook bekend als VDM en is tegen de regels van Maanstad.*\n*Wij verstaan onder VDM een voertuig gebruiken als wapen. Zoals bijvoorbeeld mensen overrijden (Spelers, dan wel NPC’s). Het overtreden van de VDM regels zullen worden bestraft met een verwijdering en verbanning van de server.*\n*Uiteraard is een vorm van VDM wel toegestaan als dit binnen de Roleplay valt. Maar dit is een serieuze dunne lijn en zul je wel goed moeten kunnen verantwoorden om hier onder uit te komen. In de praktijk betekent het dus dat het dus niet toegestaan is!*\n\n*Op het moment dat dit gebeurd, kun je dus een /report doen.*\n*Een admin zal bepalen of het een VDM is, of dat het “Roleplay” is.*\n*Het is dus niet de bedoeling dat je het zelf gaat lopen roepen!*"},
                {name: "*__1.2 Random Deathmatch__*", value: "*Dit is ook bekend als RDM en is tegen de regels van Maanstad.*\n*Wij verstaan onder RDM het zomaar schieten op mensen zonder enige vorm van roleplay.*\n*Je moet altijd, net zoals in het echt, iemand de kans geven om aan eventuele roleplay te kunnen voldoen. Zomaar een te korte roleplay starten met de intentie om “iemand” te kunnen vermoorden zien wij als random deathmatch. En ook dit zal natuurlijk worden bestraft.*\n\n*,Op het moment dat dit gebeurd, kun je dus een /report doen. Een admin zal bepalen of het een RDM is, of dat het “Roleplay” is. Het is dus niet de bedoeling dat je het zelf gaat lopen roepen!*"},
                {name: "*__1.3 Combat logging__*", value: "*Combat Logging is niet toegestaan. Onder combat logging verstaan wij dat je binnen een gaande roleplay situatie de server verlaat, bijvoorbeeld ten tijde van een gijzeling, een achtervolging, een ambulance actie of wat dan ook. Het is dan ook de bedoeling dat je bij je huis, of bij de auto garage de server verlaat. Hierdoor kom je de volgende keer ook op die locatie weer terug, en maakt het voor jezelf weer gemakkelijker.*\n\n*Indien je vroegtijdig de server moet verlaten, kun je dit doen door het te melden via /looc. Je kunt dan bijvoorbeeld melden `/looc Achtervolgende agent, sorry ik moet gauw gaan eten. Ik zal mij later melden bij het bureau.`*\n*Uiteraard verwachten we dan ook dat de Roleplay op een ander moment wordt voortgezet.*\n*Doe je dit niet, is het alsnog Combat Logging.*"},
                {name: "**__2.0 Roleplay Regels__**"},
                {name: "*__2.1 Uitlokken__*", value: "*Het uitlokken van overheidsdiensten is niet toegestaan.*\n*Wij zien het als uitlokken als je steeds bij de politie voorbij rijd, steeds de ANWB belt voor niets of andere zaken die een reactie uitlokken.*\n*Als je dan een politieagent uitlokt, wees dan ook een vent om je te laten staande houden en roleplay dan mee.*\n*(Dit geldt niet alleen voor de ANWB/Politie, maar ook voor andere bedrijven en ook zelfs voor spelers)*"},
                {name: "*__2.2 Powergaming*", value: "*Als gijzelnemer kun je een deel “powergamen” als je dit goed inpakt in de roleplay.*\n*Als je iemand een geweer op zijn hoofd richt, en je typt /me doet tyraps om, dan is dat geldige roleplay. Het is aan de tegenspeler dan ook dat hij daar aan voldoet. Dat betekent dat die niet opeens kan gaan slaan of kan gaan schieten of iets anders. Je moet je in dat geval dan over geven. In elk ander geval als je opeens achter iemand staat en je doet tyraps om, is geen geldige roleplay en mag ook gemeld worden. Wat dan wel de bedoeling is, is dat het “slachtoffer” een report indient.*\n*Hierbij kunnen de admins de personen aanspreken en de roleplay pauzeren om het recht te zetten.*\n\n*Voorbeeld van Powergaming:\n*/me trekt sleutels uit het contactslot*\n\n__Voorbeeld van hoe het geen Powergaming is:__\n*/me probeert sleutels uit het contactslot te trekken*\n\n__Hiermee geef je de ander de kans om “leuk” mee te doen. De tegenpartij kan dus doen:__\n*/me heeft niets in de gaten*\n\nWaarna jij doet:\n/me trekt de sleutels uit het contactslot en stopt ze stiekem in zijn zak\n\n*Het uitvoeren van Powergaming is dus niet toegestaan. Enkel in bepaalde gevallen waarbij je het goed roleplayed zou het kunnen, maar daar dient wel goede, kwalitatieve roleplay aan vooraf te gaan. Zorg er voor dat de situaties die er zijn, ook in het “echt” kunnen gebeuren en dat de reacties en de eisen ook “echt” zijn.*\n*Zorg er voor dat de andere speler een keuze heeft. Als iemand aan jouw eisen voldoet, hoef je diegene dus niet alsnog dood te maken.*\n*Dit zal als FailRP worden gezien.*"},
                {name: "*__2.3 Respawn Rule__*", value: "*Voorheen was dit de New Life Rule. We hebben besloten om de New Life Rule te herzien.*\n*Het was vaak RP slopend om mensen dood te schieten en dan te verwachten dat ze een New Life Rule pakten.*\n\n__Wat veranderd er?__\nOp het moment dat iemand wordt neergestoken, dan wel wordt neergeschoten of van een brug af gegooid wordt o.i.d. dan kan deze persoon ALTIJD geholpen worden door de Ambulance. De persoon hoeft dan niets te vergeten. Op het moment dat de Ambulance, dan wel een ander soort “dokter” zich er mee zal bemoeien, dan komt er een moment dat de persoon in het ziekenhuis terecht komt.\nOp het moment dat je in het ziekenhuis komt dan zal de Ambulance aangeven hoe lang je moet “herstellen”. (dit kan 20, 30, 45 en 60 minuten zijn)\nDit houdt in dat je voor deze tijd je niet mag bemoeien met de gaande Roleplay.\nDaarna kun je jezelf weer vervoegen in de gaande Roleplay en hoef je niet te zeggen “dat was een goed feestje o.i.d.”.\n\nOp het moment dat er geen Ambulance aanwezig is, en je zal moeten “respawnen”, dan zal je niet meer je spullen kwijt raken. Na het respawnen moet je MINIMAAL 60 minuten je niet meer bemoeien met de betreffende Roleplay waarin je bent dood gegaan. Uiteraard mag je even gaan “chillen” met andere vrienden of iets dergelijks, maar voor die bepaalde tijd niet meer met de betreffende roleplay waarin je “knock out” bent gegaan.\nJe zal dus ook niet meer je spullen verliezen als je in het ziekenhuis respawned. Wel zal hier een (florisant) geld bedrag worden afgeschreven van je contanten of je bankrekening als kosten voor het ziekenhuis."},
                {name: "*__2.4 Perma Death__*", value: "*Dat betekent dus ook dat het mogelijk is om jouw character permanent te laten sterven.*\nDit houdt dus in dat:\n– Alle spullen die je hebt worden verwijderd;\n– Je naam wordt verwijderd;\n– Je auto’s worden verwijderd;\n– Je huis wordt vrijgegeven (opnieuw in de verkoop);*\n\n*Jij bent ten alle tijden ZELF degene die dit beslist. Als je niet Perma dood wilt gaan, dan geldt regel 2.4. Houd er wel rekening mee dat er gevallen “kunnen” zijn waarbij jouw character echt niet meer verder kan.*\n*Als jij daadwerkelijk in een grote RP wordt dood geschoten, dan zou je voor jezelf volwassen moeten beslissen of je nog wel verder kan op deze manier.*\n*Wij gaan er vanuit dat wij allen “goede” roleplayers zijn, en dat we dus zelf op een volwassen manier hiermee kunnen omgaan.*\n*Het zou vervelend zijn als het management zich met deze keuzes moet gaan bemoeien omdat je zelf niet capabel genoeg bent om de juiste beslissing te maken.*\n\n*Overigens, als jouw character perma dood gaat, dan kun je dat vermelden in een ticket, en hierbij een nieuw character aanvragen.*"},
                {name: "*__2.5 Roleplay 112__*", value: "*Als je op straat ligt en je bent “knock out”, dan dient er een ambulance te komen om je te helpen.*\n*Hierbij dien je de instructies van de Ambulance Broeder (of een politie agent) op te volgen. Uiteraard kun je dit zelf ook beinvloeden door op een bepaalde manier te reageren dat je onwijs last hebt van je been of iets dergelijks. Hierbij beinvloed je de roleplay en is dit ook aan te moedigen.*\n*Als je met 200 onderuit bent gegaan op een motorfiets, dan kun je natuurlijk niet alleen wat schrammen hebben. Roleplay dit dan ook mee. Laat het uitdagend zijn voor het ambulance personeel. Bijvoorbeeld: /me heeft een hartslag maar reageert verder niet. (voorbeeld natuurlijk..)*"},
                {name: "*__2.6 FailRP__*", value: "*Als je op straat ligt en je bent “knock out”, dan dient er een ambulance te komen om je te helpen.*\n*Hierbij dien je de instructies van de Ambulance Broeder (of een politie agent) op te volgen. Uiteraard kun je dit zelf ook beinvloeden door op een bepaalde manier te reageren dat je onwijs last hebt van je been of iets dergelijks. Hierbij beinvloed je de roleplay en is dit ook aan te moedigen. Als je met 200 onderuit bent gegaan op een motorfiets, dan kun je natuurlijk niet alleen wat schrammen hebben. Roleplay dit dan ook mee. Laat het uitdagend zijn voor het ambulance personeel. Bijvoorbeeld: /me heeft een hartslag maar reageert verder niet. (voorbeeld natuurlijk..)*\n\n*– Vrienden of kennissen gijzelen voor een overval.*\n*Het is niet toegestaan om tijdens een overval gijzelaars te hebben die bevriend met je zijn.*\n*Zorg dat je een overval goed planned en vraag/huur mensen in die je er bij kunnen helpen. Daarna is het alleen nog een slachtoffer vinden die de gijzelaar is. RP dit dus dan ook goed uit!*n*– Gigantische stunt achtige dingen uithalen met voertuigen*\n*Zorg er voor dat je rijstijl maar een beetje realistisch blijft. Als jij achtervolgt wordt kun je prima over een grasveld rijden en als je auto het kan, kan er eens een trappetje genomen worden. Een keer een ramp nemen moet dus ook kunnen maar zorg er voor dat het een beetje “realistisch” is.*\n*– Stelen van een overheidsvoertuig zonder enige reden (Zoals genoemd in 4.3)(Politie, ANWB, Ambulance, Taxi, Brandweer)*\n*– Deze lijst zal verder aangevuld worden.*"},
                {name: "*__2.7 Stemherkenning en Voice Changers__*", value: "*Op basis van de bekende gevallen hebben wij besloten stemherkenning toe te staan.*\n*Als jij eerder gehoord bent bij een overval, en je komt een keer de Politie tegen, dan kan de Politie, met voldoende bewijs, je aanhouden als verdachte. Uiteraard moet het dan nog wel bewezen worden.*\n*Het gebruik van een Voice Changer is toegestaan. Echter, dit kan alleen aan de telefoon gebruikt worden. Het rond lopen met een speciaal Darth Vader masker is geen reden om een voice changer in de stad te gebruiken. Telefonisch kan dit dus wel.*"},
                {name: "*__2.8 Value Your Life__*", value: "Je moet altijd je leven waarderen en spelen alsof gewond raken of vermoord worden echt het einde van je leven betekent waar alles van af hangt.*\n*Als iemand je benadert en je bent duidelijk in een minder sterke positie (bijvoorbeeld geen dekking hebben of de persoon heeft een wapen op je gericht en jij hebt nog geen wapen beet), zul je gehoor moeten geven aan de eisen van die persoon. Een aantal voorbeelden:\n\n*• Je hebt een wapen in je hand en iemand benadert je van achteren en richt het wapen op je achterhoofd en zegt dat je je handen omhoog moet doen**\n• Je hebt je wapen in je zak en je tegenspeler heeft een wapen direct op jou gericht en zegt dat je je handen omhoog moet doen*\n*• Je bent chauffeur van een voertuig en iemand richt een wapen op je en zegt dat je moet uitstappen*\n*Dus: Ben jij in het nadeel qua positie / dekking / wapen dan zul je moeten luisteren.*\n*Dit betekent dus ook, als zij de kantjes er van af lopen en je bent in de mogelijkheid om te ontsnappen (bijvoorbeeld, ze kijken niet), dan kun je dit dus ook doen!*"},
                {name: "**__3 Politie__**", value: "*De Politie is een belangrijk orgaan in de meeste Roleplay servers.*\n*Omdat zij meer “rechten” hebben en met zeer veel mensen in aanraking komen, zijn daar ook bepaalde regels voor gemaakt.*"},
                {name: "*__3.1 Het Dienstwapen__*", value: "Een Politieagent mag nooit een dienstwapen of iets wat bij de dienstuitrusting hoort doorspelen, of verkopen.*\n*Hierop staat ontslag en een verbanning van de server.*\n*Eventueel in speciale situaties mag een agent zijn wapen “afgeven”, maar dit ligt alleen aan de roleplay. Een agent “mag” zijn leven geven voor een wapen daar het de nationale veiligheid in gevaar zou brengen als hij het wapen zou afgeven.*"},
                {name: "*__3.2 Illegale zaken als agent__*", value: "*Tijdens de dienst mogen Politieagenten geen illegale activiteiten uitvoeren.*\n*Bij illegale activiteiten of het betrappen hier op, kunnen ze hun baan verliezen.*\n*Het verliezen van hun baan is een “Koninklijke zaak”.*"},
                {name: "**__4 HoofdStaff/Management__**", value: "*Het management van Maanstad zorgt er voor dat Maanstad gemodereerd wordt.*\n*Zij zorgen er voor dat eenieder zich op zijn gemak kan voelen hier.*\n*Dat betekent ook dat zij beslissingen maken voor andere spelers indien dat nodig is. (In het kader van een warn/kick of een ban)*"},
                {name: "*__4.1 Het maken van Reports__*", value: "*Wij weten ook dat we een spel aan het spelen zijn, dat gebasseerd is op een bestaand spel. Zo kan er een keer wat mis gaan, of het kan een keer gebeuren dat iemand zich niet gedraagd. Je dient hiervoor een /report aan te maken in het spel.*\n*Houdt er rekening mee dat admins ook bezig zijn. Dus als ze niet meteen voor je neus staan, ga ze dan niet lopen spammen, waarschijnlijk komen ze dan helemaal niet. Zorg er voor dat je /report zo duidelijk mogelijk is. Dus /report HELP zal niet helpen. /report Hallo Admins, ik sta helemaal vast tussen 2 deuren in. Ik kom er met geen mogelijkheid uit. Zou ik geholpen kunnen worden? is een betere manier van communiceren.               \n*Eventuele reports die via RP op te lossen zijn, dien je ook via RP op te lossen. Dus: /report HELP! IK WORDT IN EEN AUTO ONTVOERD, is iets wat je dus in RP moet oplossen.*"},
                {name: "*__4.2 Beheerders__*", value: "*De eigenaren van Maanstad staan 100% achter hun Management.*\n*Alle beslissingen vanuit het Management zijn definitief.*"},
                {name: "**__Algemene Informatie__**", value: "*• Dit is een stad. Geen server.*\n*• Ben je AFK? Gebruik dan het F3-menu om een animatie aan te zetten. Bijvoorbeeld het roken van een sigaret of het drinken van koffie. (let op na lange inactiviteit wordt je gekickt.)*\n*• Ga je weg? Zeg dan dat je gaat slapen of buiten de stad gaat.*\n*• Gedraag je zoals je in het echte leven ook zou doen. En vergeet niet dat je karakter in de stad leeft, dus het is “het echte leven” voor je karakter.*\n*• Gebruik /me om te beschrijven wat je karakter tijdens de RP doet\n*• Politiebureaus, gevangenissen en de militaire basis mogen NIET BETREDEN worden, tenzij je bijvoorbeeld naar het bureau gaat om aangifte te doen of met de politie te spreken.*\n*• Je bent verplicht je standaard kleding te veranderen als je voor het eerst in spawnt.\n*• Het is niet toegestaan om als burger in bepaalde overheids kleding te lopen. Bijvoorbeeld in Politie kleding, Ambulance kleding of in ANWB kleding. Hoewel dit wel in de kleding winkel verkrijgbaar is, mag dit niet gebruikt worden.*\n*• Wil je een toets aan iemand uitleggen? Gebruik dan het woord “spier”. Bijvoorbeeld, “Gebruik de F3-spier om het menu te openen”.*\n*• Je bent verplicht om te allen tijde je voice chat in de stad aan te hebben*\n*• Je kunt met W/Z toets de afstand van je stem veranderen (bijv fluisteren hoort iemand je als diegene direct naast je staat.)*\n*• Als je iemand wil bereiken gebruik je je mobiele telefoon als je het nummer van die persoon hebt.*\n*• Als je een admin nodig hebt? Kom op Discord en ga naar het wacht op hulp kanaal.*\n *• Heb je vragen, stel ze dan op Discord. Niet in de ingame chat.*\n*• Gebruik je telefoon voor alle in-game communicatie.*\n*• Nep Belletjes naar overheidsdiensten is NIET TOEGESTAAN.*\n*• Als je politie, ambulance, wegenwacht of een taxi belt dien je in je bericht aan te geven wat er aan de hand is. Zo gedetailleerd mogelijk. Als je alleen “kom” typt zal er niemand komen en zal je belletje worden genegeerd.*\n*• Als er een ambulanceverpleegkundige bij je komt, gebruik dan /me om aan te geven wat er met je aan de hand is. Geef hier ook aan hoe je op de behandeling reageert en wat je lichaam doet.\n*• Als je een wapen bij je draagt die groter is dan wat in je zak past, ben je verplicht een tas te dragen en het pakken van je wapen te roleplayen. Bijvoorbeeld door te typen: “/me pakt een shotgun uit zijn tas”.*\n*• Wil je een wapen testen? Gebruik dan de schietbaan op de Elgin Ave. Niet in de stad!*\n*• De Nederlandse wet is altijd leidend tenzij anders aangegeven binnen Maanstad*\n*• Als je bent verbannen dan is dat met een geldige reden, het is dan ook niet toegestaan om je verbanning te omzeilen door met een ander account de community te joinen. Denk hierbij aan het joinen van Discord op een ander account of het joinen van de server met een ander account. Hier staat een permanente en IP ban op.*\n\n**__Streaming Regels__**\nHet is binnen Maanstad toegestaan om te streamen, alleen moet je daar enkele dingen voor doen.\n*Het is verplicht om een content creator rang aan te vragen in een ticket. Bij het streamen op onze server zonder de content creator rang zal je gekickt worden uit de fivem server.*\n*• Zorg er in ieder geval voor als je live bent, en de Discord chat is te horen op stream, dat je een rood balletje voor jouw naam zet: :red_circle:.*\n*• Zorg er voor dat de mensen met wie je in Discord zit, dat deze van jouw streaming af weten.*\n*• Je bent als streamer een visite kaartje voor Maanstad. Mochten er dingen gebeuren, laat het ons weten.*\n*• Doordat je jezelf vrij makkelijk in de picture zet, kunnen wij wat strenger zijn tegen streamers aangezien we live beelden van ze hebben.*\n*• Mocht je iets zien bij een andere streamer wat je niet bevalt. Spreek dan een stafflid aan.*\n*• FailRP, RDM, VDM en dat soort zaken On-Stream (ook off-stream natuurlijk) wordt direct bestraft.*\n*• De naam Maanstad moet in de titel van de stream staan zodat het ook door ons gevonden kan worden, en ook de discord server: https://invite.gg/maanstadrp.*\n*• Als je aan het streamen bent, dan is het niet de bedoeling dat je in de spreekkamer zit, of dat de spreekkamer uitgezonden wordt!*"}
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