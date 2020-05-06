const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const beautify = require('beautify');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, I am lacking permissions, or this command is not available in this guild.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "eval",
    aliases: ["e"],
    category: "developer",
    description: "Runs code. Only available to joeywoah_",
    usage: "<code>",
    run: async (client, message, args) => {
        if (message.author.id !== "630817206145646602") return message.channel.send(errembed);
        if (message.guild.id !== `${process.env.MAIN_GUILD}`) return message.channel.send(errembed);
        if (!args[0]) {
            return message.channel.send(errembed)
        };

        try {
            if (args.join(" ").toLowerCase().includes("token")) {
                return;
            }
            const toEval = args.join(" ");
            const evaluated = eval(toEval);
            let embed = new RichEmbed()
            .setColor("#00FF00")
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL)
            .setTitle(`${process.env.OS_NAME} | Eval`)
            .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
            .addField("Evaluated:", evaluated)
            .addField("Type of:", typeof(evaluated));

            message.channel.send(embed)
                } catch (e) {
                    let embed = new RichEmbed()
                    .setColor("#FF0000")
                    .setTitle(`${process.env.OS_NAME} | Error on Eval`)
                    .setDescription(e)
                    .setFooter(client.user.username, client.user.displayAvatarURL);
                    message.channel.send(embed);
        }
        
    }

}