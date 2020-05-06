const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const beautify = require('beautify');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "dev",
    aliases: ["1124"],
    category: "developer",
    description: "only available to joeywoah_",
    usage: "<code>",
    run: async (client, message, args) => {
        if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
        if (message.author.id !== "630817206145646602") return message.channel.send(errembed);
        message.reply("Hoes MAd hAhAhAH.")
    }
}