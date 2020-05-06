const { Client, RichEmbed, Collection } = require("discord.js");
const { config } = require("dotenv")
const fs = require('fs')
const queue = new Map();
const Canvas = require('canvas');
const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();
client.usage = new Collection();
client.categories = fs.readdirSync('./commands/')

const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

config({
    path: __dirname + '/.env'
});

["command"].forEach(handler => {
        require(`./handler/${handler}`)(client);
});

client.on('ready', () => {
    console.log(`Hoes, Money, Cash, Coins. ${client.user.username} is now online!`);

    client.user.setPresence({
        game: {
            name: `${process.env.PREFIX}help | ${process.env.OS_NAME}`,
            type: `PLAYING`
            
        }
    });
});

client.on("message", async message => {
    const prefix = process.env.PREFIX;

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member =  await message.guild.fetchMember(message)

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
    command.run(client, message, args, queue);
    
});

client.on("message", async message => {
    var badwords = ["nigga"]
    // The following is NOT a command!
    
        if (badwords.includes(message.content)) {
        
        message.delete().catch(err => console.log)
        
        message.reply("`CRYSTELIANOS AUTOMATIC FILTER:` You have said one of the filtered words. Penalty of spamming these words will result in a warning or possibly a kick.").then(msg => {
        
        msg.delete(5000)
        
        })
        
        }
})

client.on("messageDelete", async message => {
    if (message.author.id !== `${process.env.DEVID}`) return;
    const messagedelete = new RichEmbed()
    .setColor("#b603fc")
    .setFooter(client.user.username, client.user.displayAvatarURL)
    .setTitle(`${process.env.OS_NAME} | Important Message Deletion Alert`)
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`A message by Joey has been deleted. Here is the message content.\n\`\`\`${message.content}\`\`\``);
    message.channel.send(messagedelete);
})


client.login(process.env.TOKEN);