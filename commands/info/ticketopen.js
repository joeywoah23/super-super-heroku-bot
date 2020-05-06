const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "ticket open",
    aliases: ["open ticket", "ticketopen", "ticketpls"],
    category: "info",
    description: "opens a support ticket with staff and a the ticket member",
    run: async (client, message, args) => {
        let notifyrole = message.guild.roles.find(r => r.name === "👑 Royalty 👑");
let ticketEmbed = new RichEmbed()
.setDescription(`**${process.env.OS_NAME} | Ticket Open**`)
.setColor("#b603fc")
.setThumbnail(client.user.avatarURL)
.addField("Ticket Open", `${message.author} Your ticket has been created.`);
message.author.send("The ticket channel has been created. Only a moderator can close the ticket. Any unnecessary tickets will not be tolerated and you will recieve a punishment.");
let ticketchannel = message.guild.channels.find(`name`, "♡-tickets");
if(!ticketchannel) return message.channel.send("Couldn't find ♡-tickets channel.");

ticketchannel.send(ticketEmbed);
	  
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let ticketid = getRandomInt(10000);
let name = `ticket-${message.author.username}-${ticketid}`;
if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
message.guild.createChannel(name, "text")
.then(m => {
    m.overwritePermissions(message.guild.id, {
        VIEW_CHANNEL: false
    })

    m.overwritePermissions(message.author.id, {
        VIEW_CHANNEL: true
    })
})

const openticketlog = new RichEmbed()
.setDescription(`**${process.env.OS_NAME} | Ticket Open**`)
.setColor("#b603fc")
.setThumbnail(client.user.displayAvatarURL)
.addField("Ticket Open", `${message.author} has opened a ticket.`);
client.channels.get(`${process.env.LOGS_CHANNEL}`).send(openticketlog);

    }
}