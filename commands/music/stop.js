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
            name: "stop",
            aliases: ["stopsong"],
            category: "music",
            description: "stops the currently playing music",
            usage: "<none>",
            run: async (client, message, args, queue) => {
                 
                const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	            const serverQueue = queue.get(message.guild.id);
                const voiceChannel = message.member.voiceChannel;
                const searchString = args.slice(1).join(' ');
                let member = message.mentions.members.first();
      if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("You can\'t do that!");

		if (!message.member.voiceChannel) return message.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return message.channel.send("There is no Queue to stop!!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
		message.react('🛑');
        return undefined;
                async function handleVideo(video,  message, voiceChannel, playlist = false) {
                    const serverQueue = queue.get( message.guild.id);
                    console.log(video);
                    
                
                    const song = {
                        id: video.id,
                        title: Util.escapeMarkdown(video.title),
                        url: `https://www.youtube.com/watch?v=${video.id}`
                    };
                    if (!serverQueue) {
                        const queueConstruct = {
                            textChannel:  message.channel,
                            voiceChannel: voiceChannel,
                            connection: null,
                            songs: [],
                            volume: 5,
                            playing: true
                        };
                        queue.set( message.guild.id, queueConstruct);
                
                        queueConstruct.songs.push(song);
                
                        try {
                            var connection = await voiceChannel.join();
                            queueConstruct.connection = connection;
                            play( message.guild, queueConstruct.songs[0]);
                        } catch (error) {
                            console.error(`I could not join the voice channel: ${error}!`);
                            queue.delete( message.guild.id);
                            return  message.channel.send(`Can't join this channel: ${error}!`);
                        }
                    } else {
                        serverQueue.songs.push(song);
                        console.log(serverQueue.songs);
                        if (playlist) return undefined;
                        else return  message.channel.send(`**${song.title}**, just added to the queue! `);
                    } 
                    return undefined;
                }
                
                function play(guild, song) {
                    const serverQueue = queue.get(guild.id);
                
                    if (!song) {
                        serverQueue.voiceChannel.leave();
                        queue.delete(guild.id);
                        return;
                    }
                    console.log(serverQueue.songs);
                
                    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
                        .on('end', reason => {
                            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
                            else console.log(reason);
                            serverQueue.songs.shift();
                            play(guild, serverQueue.songs[0]);
                        })
                        .on('error', error => console.error(error));
                    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
                
                    serverQueue.textChannel.send(`**${song.title}**, is now playing!`);
                }
            }
        }