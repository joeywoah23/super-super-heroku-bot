const { RichEmbed } = require('discord.js')

const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
name: "kick",
category: "moderation",
description: "Kicks the mentioned user",
run: async (client, message, args) => {
      // This command must be limited to mods and admins. In this example we just hardcode the role names.
          // Please read on Array.some() to understand this bit: 
          // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
          if (!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send(errembed);
          
          // Let's first check if we have a member and if we can kick them!
          // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
          // We can also support getting the member by ID, which would be args[0]
          let member = message.mentions.members.first() || client.users.get(args[0]);
          if(!member)
          return message.channel.send(errembed);
	
if(member === message.author)
return message.reply("You can\'t punish yourself!");
		
          if(!member.kickable) 
            return message.channel.send(errembed)
          // **CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!
          // slice(1) removes the first part, which here should be the user mention or ID
          // join(' ') takes all the various parts to make it a single string.
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
          // Now, time for a swift kick in the nuts!
          await member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
		const kicklog = new RichEmbed()
		.setTitle(`${process.env.OS_NAME} | Kick`)
		.setDescription("Kicked")
		.setColor("#b603fc")
    .setFooter(client.user.username, client.user.displayAvatarURL)
    .setThumbnail(client.user.displayAvatarURL)
		.addField("**> Moderator | Administrator:**", `${message.author}`)
		.addField("**> Member Kicked:**", `${member}`)
		.addField("**> Reason:**", `${reason}`);
            client.channels.get(`${process.env.LOGS_CHANNEL}`).send(kicklog)
    const kicked = new RichEmbed()
    .setFooter(client.user.username, client.user.displayAvatarURL)
		.setTitle(`${process.env.OS_NAME} | Kick`)
    .setColor("#b603fc")
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`**${message.author.tag}**, You have kicked ${member} from the server for ${reason}`)
    .addField("**> Kicked Member Id:**", `${member.id}`)
    .addField("**> Moderator | Administrator:**", `${message.author.id}`)
    .addField("**> Reason for kick:**", `${reason}`);
          message.channel.send(kicked)
    }
}