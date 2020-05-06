module.exports = {
    name: "say",
    category: "moderation",
    description: "Returns the text argument",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();

        if (args.length < 1) 
            return message.reply(`Nothing has been transmitted. Please supply something to say next time!`).then(m => m.delete(5000));

        const roleColor = message.guild.me.displayHexColor === "#000000" ? "#FFFFFF" : message.guild.me.displayHexColor;

        if (args[0].toLowerCase === "embed") {
        const embed = new RichEmbed()
            .setColor(roleColor)
            .setDescription(args.slice(1).join(' '))
            .setTimestamp();

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(' '));
        }
    }
}