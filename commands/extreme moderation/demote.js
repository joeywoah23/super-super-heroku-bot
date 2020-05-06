const { RichEmbed } = require('discord.js')

const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
name: "demote",
alias: ["demotion", "strike 5"],
category: "moderation",
description: "demotes the mentioned user",
run: async (client, message, args) => {
        if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
        let member = message.mentions.members.first() || client.users.get(args[0]);
        let reason = args.slice(1).join(' ');
        if(!reason)
        return message.channel.send(errembed);
        if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send(errembed)
        member.removeRoles(member.roles).catch(console.error);
        const demoted = new RichEmbed()
        .setColor("#b603fc")
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTitle(`${process.env.OS_NAME} | Demotion`)
        .setDescription(`**${message.author.tag},** You have demoted ${member} for ${reason}! Information will be provided below.`)
        .addField("**> Administrator:**", `${message.author}`)
        .addField("**> Member Demoted:**", `${member}`)
        .addField("**> Reason:**", `${reason}`)
        .addField("**> Time and Date:**", `${message.createdAt}`)
        .setTimestamp();
        message.channel.send(demoted)
        const demotelog = new RichEmbed()
        .setColor("#b603fc")
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTitle(`${process.env.OS_NAME} | Demotion`)
        .setDescription(`**${message.author.tag}** has demoted ${member} for ${reason}.`)
        .addField("**> Administrator:**", `${message.author}`)
        .addField("**> Member Demoted:**", `${member}`)
        .addField("**> Reason:**", `${reason}`)
        .addField("**> Time and Date:**", `${message.createdAt}`)
        .setTimestamp();
        client.channels.get(`${process.env.LOGS_CHANNEL}`).send(demotelog)
}
}