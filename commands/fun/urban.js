const { RichEmbed } = require('discord.js');
const urban = require("urban");
const { stripIndents } = require('common-tags')
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

           module.exports = {
            name: "urban",
            aliases: ["ud", "urb"],
            category: "fun",
            description: "shows a urban dictionary result",
            run: async (client, message, args) => {
                if (args < 1 || !["random", "search"].includes(args[0])) return message.channel.send(errembed);
                let image = client.user.displayAvatarURL;
                let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random;
                try {
                    search.first(res => {
                        if (!res) return message.channel.send("No results found!");
                        let { word, definition, example, thumbs_up, thumbs_down, permalink, author } = res;
                        const embed = new RichEmbed()
                        .setColor("#b603fc")
                        .setTitle(`${process.env.OS_NAME} | Urban`)
                        .setAuthor(`Urban Dictionary | ${word}`, image)
                        .setThumbnail(image)
                        .setDescription(stripIndents`**> Definition:** ${definition || "No Definition Provided."}
                        **> Example:** ${example || "No Example Provided"}
                        **> Upvotes:** ${thumbs_up || 0}
                        **> Downvotes:** ${thumbs_down || 0}
                        **> Link:** [Link to ${word}](${permalink || "https://urbandictionary.com/"})`)
                        .setTimestamp()
                        .setFooter(`Submitted by ${author || "Anonymous"}`, client.user.displayAvatarURL);
                        message.channel.send(embed);
                    })
                } catch(e) {
                    console.log(e)
                }
            }
        }