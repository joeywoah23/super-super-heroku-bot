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
            name: "play",
            aliases: ["p"],
            category: "music",
            description: "plays music",
            usage: "<music song>",
            run: async (client, message, args, queue) => {
                 
                const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	            const serverQueue = queue.get(message.guild.id);
                const voiceChannel = message.member.voiceChannel;
                const searchString = args.slice(1).join(' ');
        
        if (!voiceChannel) return message.channel.send("I can't find you in any voice channel!");
        
        const permissions = voiceChannel.permissionsFor(message.client.user);
        
        if (!permissions.has('CONNECT')) {

			return message.channel.send("I don't have enough permissions to join your voice channel!");
        }
        
		if (!permissions.has('SPEAK')) {

			return message.channel.send("I don't have enough permissions to speak in your voice channel!");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return message.channel.sendMessage("I don't have enough permissions to insert a URLs!")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, message, voiceChannel, true); 
            }
			return message.channel.send(`**${playlist.title}**, Just added to the queue!`);
			message.react('🎶')
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#b603fc")
					message.channel.send(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('No one said a number in time!! Queue request has been canceled.');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return message.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, message, voiceChannel);
            
        }
        async function handleVideo(video, message, voiceChannel, playlist = false) {
            const serverQueue = queue.get(message.guild.id);
            console.log(video);
            
        
            const song = {
                id: video.id,
                title: Util.escapeMarkdown(video.title),
                url: `https://www.youtube.com/watch?v=${video.id}`
            };
            if (!serverQueue) {
                const queueConstruct = {
                    textChannel: message.channel,
                    voiceChannel: voiceChannel,
                    connection: null,
                    songs: [],
                    volume: 5,
                    playing: true
                };
                queue.set(message.guild.id, queueConstruct);
        
                queueConstruct.songs.push(song);
        
                try {
                    var connection = await voiceChannel.join();
                    queueConstruct.connection = connection;
                    play(message.guild, queueConstruct.songs[0]);
                } catch (error) {
                    console.error(`I could not join the voice channel: ${error}!`);
                    queue.delete(message.guild.id);
                    return message.channel.send(`Can't join this channel: ${error}!`);
                }
            } else {
                serverQueue.songs.push(song);
                console.log(serverQueue.songs);
                if (playlist) return undefined;
                else return message.channel.send(`**${song.title}**, just added to the queue! `);
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