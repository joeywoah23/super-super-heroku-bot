const { RichEmbed } = require('discord.js')

const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
name: "ban",
category: "moderation",
description: "Bans the mentioned user",
run: async (client, message, args) => {
// Most of this command is identical to kick, except that here we'll only let admins do it.
          // In the real world mods could ban too, but this is just an example, right? ;)
        if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send(errembed)
          
          let member = message.mentions.members.first() || client.users.get(args[0]);
          if(!member)
            return message.channel.send(errembed)

if(member === message.author)
return message.reply("You can\'t punish yourself!");
		
          if(!member.bannable) 
            return message.channel.send(errembed)
      
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
          await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`))
        const banlog = new RichEmbed()
		.setTitle(`${process.env.OS_NAME} | Ban`)
		.setDescription("Banned")
		.setColor("#b603fc")
    .setFooter(client.user.username, client.user.displayAvatarURL)
    .setThumbnail(client.user.displayAvatarURL)
		.addField("**> Moderator | Administrator:**", `${message.author}`)
		.addField("**> Member Banned:**", `${member}`)
		.addField("**> Reason:**", `${reason}`);
        client.channels.get(`${process.env.LOGS_CHANNEL}`).send(banlog)
		const banned = new RichEmbed()
		.setTitle(`${process.env.OS_NAME} | Ban`)
		.setColor("#b603fc")
    .setFooter(client.user.username, client.user.displayAvatarURL)
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`**> ${message.author}**, You have banned ${member} from the server for ${reason}!`)
    .addField("**> Banned Member ID:**", `${member.id}`)
    .addField("**> Moderator | Administrator:**", `${message.author.id}`)
    .addField("**> Reason for banishment:**", `${reason}`);
          message.channel.send(banned)
        }
        
    }