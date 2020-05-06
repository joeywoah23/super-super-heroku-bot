const { RichEmbed } = require('discord.js')

const errembed = new RichEmbed()

.setTitle(`${process.env.OS_NAME} | ERR!`)

.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")

.setColor('RED');

module.exports = {
name: "grant",
category: "moderation",
description: "grants the role from the mentioned user",
run: async (client, message, args) => {
  let reason = args.slice(1).join(' ');
          if(!reason)
          return message.channel.send(errembed);
          let Role = message.guild.roles.find(r => r.name === `${reason}`);
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first() || client.users.get(args[0]);
      if (!message.member.hasPermission("MANAGE_ROLES"))
        return message.channel.send(errembed)
      if(!member)
            return message.channel.send(errembed)
      // or the person who made the command: let member = message.member;
      if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
      // Add the role!
      member.addRole(Role).catch(console.error)
	    const grantembed = new RichEmbed()
	    .setTitle(`${process.env.OS_NAME} | Grant`)
	    .setDescription("Granted")
	    .setColor("#b603fc")
	    .setFooter(`Undo this command by doing ${process.env.PREFIX}revoke <member> <role>`, client.user.displayAvatarURL)
	    .addField("Administrator", `${message.author}`)
	    .addField("User role has been granted to", `${member}`)
	    .addField("Granted Role", `${Role}`);
      client.channels.get(`${process.env.LOGS_CHANNEL}`).send(grantembed);
	    const grantembedo = new RichEmbed()
	    .setTitle(`${process.env.OS_NAME} | Grant`)
	    .setDescription(`**${message.author.tag}**, You have granted role ${Role} to user ${member}!`)
	    .setColor("#b603fc")
	    .setFooter(`Undo this command by doing ${process.env.PREFIX}revoke <member> <role>`, client.user.displayAvatarURL);
    message.channel.send(grantembedo);
}
}