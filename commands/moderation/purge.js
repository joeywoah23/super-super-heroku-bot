const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');
            
            
            module.exports = {
                name: "purge",
                aliases: ["clear", "bulkdelete"],
                category: "moderation",
                description: "Purges the specified amount",
                run: async (client, message, args) => {
                              // This command removes all messages from all users in the channel, up to 100.
          if (!message.member.hasPermission("MANAGE_MESSAGES"))
          return message.channel.send(errembed)
            // get the delete count, as an actual number.
            const deleteCount = parseInt(args[0], 10);
            
            // Ooooh nice, combined conditions. <3
            if(!deleteCount || deleteCount < 2 || deleteCount > 100)
              return message.channel.send(errembed)
            
            // Please provide a number between 2 and 100 for the number of messages to delete
            // So we get our messages, and delete them. Simple enough, right?
            const fetched = await message.channel.fetchMessages({limit: deleteCount});
            message.channel.bulkDelete(fetched)
            const erroremb = new RichEmbed()
            .setColor("#b603fc")
            .setTitle(`${process.env.OS_NAME} | Purge (ERROR)`)
            .setFooter(client.user.username, client.user.displayAvatarURL)
            .setDescription(`There was an error purging these messages: ${error}`)
              .catch(error => message.channel.send(erroremb));
              const embed = new RichEmbed()
              .setColor("#b603fc")
              .setTitle(`${process.env.OS_NAME} | Purge`)
              .setDescription(`${deleteCount} messages have been deleted in ${message.channel}!`)
              .setFooter(client.user.username, client.user.displayAvatarURL)
              client.channels.get(`${process.env.LOGS_CHANNEL}`).send(embed)
                }
            }