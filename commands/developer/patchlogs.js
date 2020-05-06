const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const beautify = require('beautify');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "patch",
    aliases: ["pl", "patchlog", "plsend"],
    category: "developer",
    description: "sends a patch log to the patch log channel.",
    run: async (client, message, args) => {
        if (message.author.id !== "630817206145646602") return message.channel.send(errembed);
        if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
        let patchlog = args.slice(1).join(' ');
          if(!patchlog)
          return message.channel.send(errembed);
          const patchlogemb = new RichEmbed()
          .setColor("#b603fc")
          .setTitle(`${process.env.OS_NAME} | Update`)
          .setDescription(patchlog)
          .setFooter(client.user.username, client.user.displayAvatarURL)
          .setThumbnail(client.user.displayAvatarURL)
          .setTimestamp();
          message.delete();
          message.channel.send("Patch log sent!");
          client.channels.get(`${process.env.PATCH_LOGS}`).send(patchlogemb);
    }
}