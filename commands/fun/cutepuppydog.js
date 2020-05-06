const { RichEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const errembed = new RichEmbed()
.setTitle(`${process.env.OS_NAME} | ERR!`)
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');

module.exports = {
    name: "cutedoge",
    aliases: ["sendcutepuppy", "cutepuppydog", "puppy/dog"],
    category: "fun",
    description: "sends a cute puppy dog",
    run: async (client, message, args) => {
        const subReddits = ["puppydog", "cutepuppies", "cutedog"];
        const random = subReddits [Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
        .setColor("#b603fc")
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setImage(img)
        .setTitle(`From the subreddit /r/${random}`)
        .setURL(`Https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}