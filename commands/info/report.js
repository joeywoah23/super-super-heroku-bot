const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

  module.exports = {
    name: "report",
    aliases: ["reportmember"],
    category: "info",
    description: "reports the member to staff",
    run: async (client, message, args) => {
        let reason = args.slice(1).join(' ');
let user = message.mentions.members.first() || client.users.get(args[0]);
if(!user)
return message.channel.send(errembed)
if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
  
if(user === message.author)
return message.reply("You can\'t report yourself!");
if(!reason) 
return message.channel.send(errembed)
message.delete();
  const reported = new RichEmbed()
  .setTitle(`${process.env.OS_NAME} | Report Member`)
  .setDescription("Reported")
  .setColor("#b603fc")
  .addField("Notifier", `${message.author}`)
  .addField("Member Reported", `${user}`)
  .addField("Reason", `${reason}`)
  .setFooter("Take action with kick, ban, mute or not.", "https://cdn.discordapp.com/avatars/684941677802029101/3e4acc0897549d7a3c8980d50104f353.png?size=2048")
client.channels.get(`${process.env.LOGS_CHANNEL}`).send(reported)
    const thankreport = new RichEmbed()
    .setTitle(`${process.env.OS_NAME} | Report Member`)
    .setFooter(client.user.username, client.user.displayAvatarURL)
    .setDescription("Reported! Thank you for reporting this member! Your message has been deleted sue to Security Reasons! **NOTE:** Staff may or may not take action!")
    .setColor("#b603fc");
  message.channel.send(thankreport)

    }
}