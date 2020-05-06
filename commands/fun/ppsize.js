const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

      module.exports = {
        name: "pp",
        aliases: ["ppsize", "peen", "sizemypeen"],
        category: "fun",
        description: "sends how big the members or authors penis is",
        run: async (client, message, args) => {
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
              }
              let sizer = message.mentions.members.first();
              if (!sizer) sizer = message.author;
                  let size = getRandomInt(12);
                  const ppsize = new RichEmbed()
                  .setTitle(`${process.env.OS_NAME} | PeePee Size`)
                  .setDescription(`${sizer}'s penis size\n8${'='.repeat(size)}D - ${size}in.`)
                  .setFooter(client.user.username, client.user.displayAvatarURL)
                  .setColor("#b603fc");
                  message.channel.send(ppsize)
            
        }
    }