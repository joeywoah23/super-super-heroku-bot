const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "ticket close",
    aliases: ["close ticket", "ticketclose"],
    category: "info",
    description: "closes the ticket channel",
    run: async (client, message, args) => {
        if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
        if (!message.member.hasPermission("MANAGE_CHANNELS"))
return message.channel.send(errembed)
message.channel.delete();
let closeticketEmbed = new RichEmbed()
.setDescription(`**${process.env.OS_NAME} | Ticket Close**`)
.setColor("#b603fc")
.setThumbnail(client.user.avatarURL)
.addField("Ticket Close", `${message.author} You have closed a ticket. Thank you for using Crystelian Tickets.`);
let ticketchannel = message.guild.channels.find(`name`, "♡-tickets");
if(!ticketchannel) return message.channel.send("Couldn't find ♡-tickets channel.");
ticketchannel.send(closeticketEmbed);
const closeticketlog = new RichEmbed
.setDescription(`**${process.env.OS_NAME} | Ticket Close**`)
.setColor("#b603fc")
.setThumbnail(client.user.avatarURL)
.addField("Ticket Close", `${message.author} has closed ticket ${message.channel}.`);
client.channels.get(`${process.env.LOGS_CHANNEL}`).send(closeticketlog);


    }
}