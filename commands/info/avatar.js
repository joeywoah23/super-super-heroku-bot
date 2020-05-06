const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');
		
		module.exports = {
            name: "avatar",
            aliases: ["profilepicture", "av"],
            category: "info",
            description: "Sends the avatar of the message author or specified user",
            run: async (client, message, args) => {
                if(message.channel.type === 'dm') return message.channel.send(errembed)
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
		  const embedav1 = new RichEmbed()
		  .setColor("#b603fc")
		  .setTitle(`${process.env.OS_NAME} | Avatar`)
		  .setDescription(`${message.author}'s Avatar`)
		  .setImage(sicon)
		  .setThumbnail(client.user.displayAvatarURL)
		  .setFooter(client.user.username, client.user.displayAvatarURL);
          message.channel.send(embedav1)
        } else {
          let sicon = mentions.user.avatarURL
		  const embedav2 = new RichEmbed()
		  .setColor("#b603fc")
		  .setTitle(`${process.env.OS_NAME} | Avatar`)
		  .setDescription(`${mentions}'s Avatar`)
		  .setImage(sicon)
		  .setThumbnail(client.user.displayAvatarURL)
		  .setFooter(client.user.username, client.user.displayAvatarURL);
          message.channel.send(embedav2)
		}
            }
        }