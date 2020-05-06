const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "8ball",
    aliases: ["8ballask"],
    category: "fun",
    description: "tries to answer the questioners question",
    run: async (client, message, args) => {
        var responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes – definitely.", "You may rely on it."]
var answer = responses[Math.floor(Math.random()*responses.length)];
const response =  new RichEmbed()
.setColor("#b603fc")
.setFooter(client.user.username, client.user.displayAvatarURL)
.setDescription(`${answer}`);
message.reply(`${response}`);
    }
}