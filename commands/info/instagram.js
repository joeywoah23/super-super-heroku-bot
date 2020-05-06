const { RichEmbed } = require('discord.js');
const errembed = new RichEmbed()
.setTitle("Crystelian | ERR!")
.setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
.setColor('RED');
const { stripIndents } = require('common-tags')

const fetch = require('node-fetch')

module.exports = {
    name: "instagram",
    aliases: ["insta", "findigacct"],
    category: "info",
    description: "Returns account information about a instagram acct",
    usage: "<name>",
    run: async (client, message, args) => {
        const name = args.join(" ")

        if (!name) {
            return message.channel.send(errembed)
            .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;

        const res =  await fetch(url).then(url => url.json())

        if (!res.graphql.user.username) {
            return message.channel.send(errembed)
            .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new RichEmbed()
        .setColor("#b603fc")
        .setTitle(account.full_name)
        .setURL(`https://instagram.com/${name}/`)
        .setThumbnail(account.profile_pic_url_hd)
        .addField("Profile Information", stripIndents`**> Username:** ${account.username}
        **> Full Name:** ${account.full_name}
        **> Biography:** ${account.biography.length == 0 ? "none" : account.biography}
        **> Posts:** ${account.edge_owner_to_timeline_media.count}
        **> Followers:** ${account.edge_followed_by.count}
        **> Following:** ${account.edge_follow.count}
        **> Private Account:** ${account.is_private ? "Yes 🔐" : "Nope 🔓"}`);

        message.channel.send(embed);
    }
}
