const { RichEmbed } = require('discord.js')

const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
	name: "lockdown on",
	aliases: ["lock on", "lock", "disablechat"],
	category: "moderation",
	description: "Locks chat",
	run: async (client, message, args) => {
		if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
		if (!message.member.hasPermission("MANAGE_MESSAGES"))
	return message.channel.send(errembed)
message.channel.overwritePermissions(message.guild.defaultRole, { SEND_MESSAGES: false });
const embed = new RichEmbed()
    .setColor("#b603fc")
    .setFooter(client.user.username, clinet.user.displayAvatarURL)
    .setTitle(`${process.env.OS_NAME} | Lockdown`)
    .setDescription(`${message.channel} has been locked.`);
message.channel.send(embed);
client.channels.get(`${process.env.LOGS_CHANNEL}`).send(embed)
	}
}