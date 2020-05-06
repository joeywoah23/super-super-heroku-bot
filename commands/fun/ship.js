const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

           module.exports = {
            name: "ship",
            aliases: ["calclove"],
            category: "fun",
            description: "sends the compatibility if 2 people in love",
            run: async (client, message, args) => {
                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                  }
                  let me = message.author;
                  const percent = getRandomInt(10);
                           
                  let barSize = 10
                  let empty = barSize - percent;
                  let taken = "🥰".repeat(percent);
                  let nottaken = "💔".repeat(empty);
                  
                  
                  let ship1 = args[0];
                      if (!args[0]) return message.channel.send(errembed);
                  let ship2 = args[1];
                      if (!args[1]) return message.channel.send(errembed);
                  let pres = "ERR! UNABLE TO PROCESS REQUEST!";
                           if (percent < 5) pres = "💔 Not Compatible... Sadness.";
                           if (percent > 5) pres = "😁 Compatible! Go get them!";
                          const loveembed = new RichEmbed()
                  .setTitle(`${process.env.OS_NAME} | Compatibility`)
                  .setDescription(`[${taken}${nottaken}] - ${percent}/10\n${pres}\nThank you for using the Crystelian Love Module.`)
                  .setColor("#b603fc");
                           message.channel.send(`**${process.env.OS_NAME} Love Module | Compatibility**\n🔽${ship1}\n🔼${ship2}`)
                           message.channel.send(loveembed);
            }
        }