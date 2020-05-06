const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Returns all commands or one command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {
        if (args[0]) {
            return getCMD(client,message,args[0]);
        } else {
            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new RichEmbed()
    .setTitle(`${process.env.OS_NAME} | Help`)
    .setColor("#b603fc")

    const commands = (category) => {
        return client.commands
        .filter(cmd => cmd.category === category)
        .map(cmd => `\`${cmd.name}\``)
        .join("\n");
    }

    const info = client.categories
    .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
    .reduce((string, category) => string + "\n" + category);
    message.react("📬")
    return message.author.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new RichEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()))
    let info = `No info found for command **${input.toLowerCase()}**`;

    if(!cmd) {
    message.react("📬")
    return message.author.send((embed).setColor("#b603fc").setDescription(info));
    }

    if (cmd.name) info = `**Command name**: ${cmd.name}`;
    if(cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a =>`\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info =+ `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Syntax: <> = required, [] = optional`)
    }
    message.react("📬")
    return message.author.send(embed.setColor("#b603fc").setDescription(info));

}