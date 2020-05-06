const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

  module.exports = {
    name: "howgay",
    aliases: ["calcgay"],
    category: "fun",
    description: "sends how gay a member is",
    run: async (client, message, args) => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
              }
          let howgay = getRandomInt(10)
          let barSize = 10
          let empty = barSize - howgay;
          let gay = "🏳️‍🌈".repeat(howgay);
          let notgay = "🏁".repeat(empty)
          const howgayembed = new RichEmbed()
          .setTitle(`${process.env.OS_NAME} | HowGay`)
          .setDescription(`${message.author} is ${howgay * 10}% gay\n [${gay}${notgay}]`)
          .setFooter(client.user.username, client.user.displayAvatarURL)
          .setColor("#b603fc");
          message.channel.send(howgayembed);
    }
}