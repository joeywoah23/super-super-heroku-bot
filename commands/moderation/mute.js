const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');
        
        module.exports = {
            name: "mute",
            aliases: ["quietmember", "shutup"],
            category: "moderation",
            description: "mutes the mentioned user",
            run: async (client, message, args) => {
                let role = message.guild.roles.find(r => r.name === "Muted");
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first() || client.users.get(args[0]);
      if (!message.member.hasPermission("MUTE_MEMBERS"))
        return message.channel.send(errembed);
      if(!member) return message.channel.send(errembed) 
if(member === message.author)
return message.reply("You can\'t punish yourself!");
      //made the command: let member = message.member;
      let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
      // Add the role!
      if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
      member.addRole(role).catch(console.error)
	    const muteembedo = new RichEmbed()
	    .setTitle(`${process.env.OS_NAME} | Mute`)
	    .setDescription("Muted")
	    .setColor("#b603fc")
	    .addField("Moderator | Administrator", `${message.author}`)
	    .addField("User Muted", `${member}`)
	    .addField("Reason", `${reason}`)
	    .setFooter(`Undo this by using command ${process.env.PREFIX}unmute <member>`, client.user.displayAvatarURL);
      client.channels.get(`${process.env.LOGS_CHANNEL}`).send(muteembedo)
	    const mutesendembed = new RichEmbed()
	    .setTitle(`${process.env.OS_NAME} | Mute`)
	    .setDescription(`**${message.author.tag}**, You have muted ${member} for ${reason}!`)
	    .setFooter(`Undo this by using command ${process.env.PREFIX}unmute <member>`, client.user.displayAvatarURL)
	    .setColor("#b603fc");
        message.channel.send(mutesendembed)
        
            }
        }