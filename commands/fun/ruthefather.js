const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "ruthefather",
    aliases: ["isfather"],
    category: "fun",
    description: "sends if the mentioned user is the father or not",
    run: async (client, message, args) => {
        var mentioned = message.mentions.members.first();
if (!mentioned) mentioned = message.author;
var amifather = ["**IS THE FATHER!**", "**IS NOT THE FATHER!**"];
var aif = amifather[Math.floor(Math.random()*amifather.length)];
const amifatheremb = new RichEmbed()
.setColor("#b603fc")
.setTitle(`${process.env.OS_NAME} | DNA Results`)
.setDescription(`Results came back... and ${mentioned} ${aif}`)
.setFooter(client.user.username, client.user.displayAvatarURL)
message.channel.send(amifatheremb);
    }
}