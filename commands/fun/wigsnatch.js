// message.channel.send(`${message.author} snatched ${user}'s weave! https://gph.is/2vuHYua`)
//	    if (!user) message.channel.send(errembed);
const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "wigsnatch",
    aliases: ["weavesnatch", "snatch", "takewig"],
    category: "fun",
    description: "Snatches a users weave!",
    run: async (client, message, args) => {
        const user = message.mentions.members.first();
        const wigsnatch = new RichEmbed()
        .setDescription(`${message.author} snatched ${user}'s weave!`)
        .setImage(`https://gph.is/2vuHYua`)
        message.channel.send(wigsnatch)
	    if (!user) message.channel.send(errembed);
    }
}