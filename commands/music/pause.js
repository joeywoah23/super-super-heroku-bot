const ytdl = require('ytdl-core');
const fetchVideoInfo = require('youtube-info'); //
const getYoutubeID = require('get-youtube-id'); //
const YouTube = require('simple-youtube-api'); //
const youtube = new YouTube(process.env.YOUTUBE_API_KEY);

        const { RichEmbed, Util } = require('discord.js');
        const { stripIndents } = require('common-tags');
        const beautify = require('beautify');
        const errembed = new RichEmbed()
        .setTitle(`${process.env.OS_NAME} | ERR!`)
        .setDescription("An error has been located!\nThis could have happened due to `missing argument, you are missing permissions, or I am lacking permissions.`\nIf this error persists and you have all then necessary arguments, permissions, etc.\nPlease contact joeywoah_#5364.")
        .setColor('RED');
        
        module.exports = {
            name: "pause",
            aliases: ["pausesong"],
            category: "music",
            description: "pauses music",
            usage: "<none>",
            run: async (client, message, args, queue) => {
                 
                const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	            const serverQueue = queue.get(message.guild.id);
                const voiceChannel = message.member.voiceChannel;
                const searchString = args.slice(1).join(' ');
                if (serverQueue && serverQueue.playing) {
                    serverQueue.playing = false;
                    serverQueue.connection.dispatcher.pause();
                    return message.react('⏸');
                }
                return message.channel.send('There is no Queue to Pause!');
            }
        }