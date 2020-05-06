    const { RichEmbed } = require('discord.js');
    const errembed = new RichEmbed()
    .setTitle(`${process.env.OS_NAME} | ERR!`)
    .setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
    .setColor('RED');
            
            module.exports = {
                name: "sayin",
                aliases: ["sendto", "spysend"],
                category: "moderation",
                description: "sends the message to the specific channel",
                run: async (client, message, args) => {
                    if (!message.member.hasPermission("KICK_MEMBERS"))
                    return message.channel.send(errembed)
	                let reason = args.slice(1).join(' ');
                    if(!reason) message.channel.send(errembed);
	                let sayChannel = message.mentions.channels.first();
	                if(!sayChannel) message.channel.send(errembed);
	                message.delete();
                    message.guild.channels.find(t => t.id == sayChannel.id).send(reason);
                }
            }