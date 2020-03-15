const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");


console.log("Snoopy Worker has loaded... Commands have been queued...")
client.on("message", message => {
    if (message.author.bot) return;
    // This is where we'll put our code.
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const user = message.mentions.users.first();
    const talkedRecently = new Set();
    if(command === "say") {
    if(!message.member.roles.some(r=>["《Developer》", "《Trial Mod》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
        return message.reply("You can\'t do that!");
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } else
    if(command === "apicheck") {
      message.channel.send({embed: {
        color: 15844367,
        description: `API Latency is **${Math.round(client.ping)}**ms!`
      }});
    } else
    if(command === "shoot") {
      message.channel.send(`${message.author} shot ${user}! https://gph.is/1f1KOgp`)
    } else
    if(command === "wigsnatch") {
      message.channel.send(`${message.author} snatched ${user}'s weave! https://gph.is/2vuHYua`)
    } else
    if (message.content.startsWith(config.prefix + 'latency')) {
      message.channel.send({embed: {
        color: 15844367,
        description: `Latency is **${message.createdTimestamp - message.createdTimestamp}**ms!`
      }});
    } else
    if (message.content.startsWith(config.prefix + "banmemami")) {
      message.reply("https://imgur.com/a/XNIFUJl")
    } else
    if(message.content.startsWith(config.prefix + 'rip')) {
        message.channel.send('https://gph.is/g/4MWX3bx');
    } else
    if(message.content.startsWith(config.prefix + 'cry')) {
        message.channel.send('https://media.giphy.com/media/jnQYWZ0T4mkhCmkzcn/giphy.gif')
    } else
    if (message.content.startsWith("k")) {
      message.delete();
      message.reply("Not on my watch!");
      client.channels.get("618125415134920848").send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Warning Action",
        fields: [{
            name: "Moderator",
            value: `${message.author.tag}`
          },
          {
            name: "User warned",
            value: `${user}`
          },
          {
            name: "Reason",
            value: `${reason}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Snoopy Worker"
        }
      }
    });
      message.channel.send({embed: {
        color: 15844367,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "WARNING",
            fields: [{
            name: "Warning!",
            value: `**AUTOMATIC AGENCY MODERATION**, User ${message.author.tag} has been warned for **"k" is not allowed!**.`
          }
        ],
        footer: {
          icon_url: client.user.avatarURL,
          text: "Warning Action"
        }
      }
    });;
    } else
    if (message.content.startsWith(config.prefix + 'tea')) {
        message.channel.send('https://gph.is/1IFn5eh')
    } else
    if (message.content.startsWith(config.prefix + 'channelcount')) {
      message.channel.send({embed: {
        color: 15844367,
        description: `This server has **${client.channels.size}** channels!`
      }});
    } else
    if (message.content.startsWith(config.prefix + 'avatar')) {
        message.channel.send(message.author.avatarURL)
    } else
    if (message.content.startsWith(config.prefix + 'membercount')) {
      message.channel.send({embed: {
        color: 15844367,
        description: `This server has **${client.users.size}** members!`
      }});
    } else
    if (message.content.startsWith(config.prefix + "mute")) {
      let role = message.guild.roles.find(r => r.name === "Muted");
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "《Trial Mod》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
      if(!member)
            return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
      // or the person who made the command: let member = message.member;
      let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
      // Add the role!
      member.addRole(role).catch(console.error)
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Mute Action",
        fields: [{
            name: "Moderator",
            value: `${message.author.tag}`
          },
          {
            name: "User muted",
            value: `${user}`
          },
          {
          name: "Reason",
            value: `${reason}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Snoopy Worker"
        }
      }
    });
    } else
    if (message.content.startsWith(config.prefix + "grant")) {
      let role = args.slice(1).join(' ');
          if(!role)
          return message.reply("Please mention a valid role to grant!");
      message.guild.roles.find(r => r.name === `${role}`);
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
      if(!member)
            return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
      // or the person who made the command: let member = message.member;
      
      // Add the role!
      member.addRole(role).catch(console.error)
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Grant Action",
        fields: [{
            name: "Moderator",
            value: `${message.author.tag}`
          },
          {
            name: "Role granted to:",
            value: `${user}`
          },
          {
          name: "Role Granted",
            value: `${role}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Snoopy Worker"
        }
      }
    });
  } else
  if (message.content.startsWith(config.prefix + "ungrant")) {
    let role = args.slice(1).join(' ');
        if(!role)
        return message.reply("Please mention a valid role to ungrant!");
    message.guild.roles.find(r => r.name === `${role}`);
  
    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();
    if(!message.member.roles.some(r=>["《Developer》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
    return message.reply("You can\'t do that!");
    if(!member)
          return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
    // or the person who made the command: let member = message.member;
    
    // Add the role!
    member.removeRole(role).catch(console.error)
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Ungrant Action",
      fields: [{
          name: "Moderator",
          value: `${message.author.tag}`
        },
        {
          name: "Role ungranted to:",
          value: `${user}`
        },
        {
        name: "Role Ungranted",
          value: `${role}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Snoopy Worker"
      }
    }
  });
} else
if (message.content.startsWith(config.prefix + "hitlist")) {
  if(!message.member.roles.some(r=>["《Developer》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(' ');
  if(!member)
          return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
  if(!reason)
    return message.reply("Mention someone to add to **THE HITLIST**");
  message.channel.send({embed: {
    color: 15844367,
    description: `${member} has been added to **ADMINISTATOR HITLIST** for **${reason}**!`
  }});
  client.channels.get("618125415134920848").send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "HITLIST Action",
    fields: [{
        name: "Administrator",
        value: `${message.author.tag}`
      },
      {
        name: "User added to the HITLIST",
        value: `${user}`
      },
      {
        name: "Reason",
        value: `${reason}`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "AGENT SNOOPY"
    }
  }
});
} else
  if (message.content.startsWith(config.prefix + "unmute"))
    {let role = message.guild.roles.find(r => r.name === "Muted");
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "《Trial Mod》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
      if(!member)
            return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
      // or the person who made the command: let member = message.member;
      let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
      // Remove a role!
      member.removeRole(role).catch(console.error)
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Unmute Action",
        fields: [{
            name: "Moderator",
            value: `${message.author.tag}`
          },
          {
            name: "User unmuted",
            value: `${user}`
          },
          {
            name: "Reason",
            value: `${reason}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Snoopy Worker"
        }
      }
    });
  } else
    if (message.content.startsWith(config.prefix + "lmao")) {
        message.channel.send("https://gph.is/g/469ALg8")
    } else
    if (message.content.startsWith(config.prefix + "warn")) {
      let reason = args.slice(1).join(' ');
      let user = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "《Trial Mod》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
      if(!user)
            return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
      // or the person who made the command: let member = message.member;
      if(!reason) reason = "No reason provided";
      client.channels.get("618125415134920848").send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Warning Action",
        fields: [{
            name: "Moderator",
            value: `${message.author.tag}`
          },
          {
            name: "User warned",
            value: `${user}`
          },
          {
            name: "Reason",
            value: `${reason}`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Snoopy Worker"
        }
      }
    });
    message.channel.send({embed: {
      color: 15844367,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "WARNING",
          fields: [{
          name: "Warning!",
          value: `**${message.author.tag}**, User ${user} has been warned for **${reason}**.`
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "Warning Action"
      }
    }
  });;
  } else
  if(message.content.startsWith(config.prefix + "reportmember")) {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.members.first();
    if(!user)
    return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
    if(!reason) 
    return message.reply("Please supply a reason!!");
    message.delete();
    client.channels.get("618125415134920848").send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Report Member Action",
      fields: [{
          name: "Member",
          value: `${message.author.tag}`
        },
        {
          name: "User reported",
          value: `${user}`
        },
        {
          name: "Reason",
          value: `${reason}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Snoopy Worker"
      }
    }
  });
  message.channel.send({embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Report Member Action",
    description: "Report Member",
    fields: [{
        name: "Member Report",
        value: `**${message.author.tag}**, The user has been reported to staff! Thank you!`
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Report Member Action"
    }
  }
});;
  } else
    if (message.content.startsWith(config.prefix + "hot")) {
        message.channel.send("https://media.giphy.com/media/JwLY4ToQwe4yA/giphy.gif")
    } else
    if(message.content.startsWith(config.prefix + 'help')) {
        message.channel.send({embed: {
            color: 15844367,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Help Embed",
            description: "This is a help embed!",
            fields: [{ 
                name: "Prefix",
                value: "!!"
              },
              {
                name: "Fun Commands",
                value: "asl, cry, rip, avatar, tea, hot, lmao, banmemami."
              },
              {
                name: "Utility Commands",
                value: "help, info, say, apicheck, latency, membercount, channelcount, welcomeOSmsg, reportmember."
              },
              {
                name: "CrystelianOS Moderation",
                value: "kick, ban, purge, mute, unmute, grant, ungrant, warn."
              },
              {
                name: "Roleplay Commands",
                value: "shoot, wigsnatch."
              },
              {
                name: "SNOOPY AGENCY",
                value: "hitlist."
              },
              {
                name: "Patch Log",
                value: "After learning many things I have learned coding this bot I am now making many changes to embeds and more on this bot! This bot will be tested before letting it operate in this server!"
              }
            ],
            footer: {
              icon_url: client.user.avatarURL,
              text: "Help Embed"
            }
          }
        });;
    } else 
    if (message.content.startsWith(config.prefix + "asl")) {
      let age = args[0]; // Remember arrays are 0-based!.
      let sex = args[1];
      let location = args[2];
      message.channel.send(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    } else
    if(message.content.startsWith(config.prefix + 'info')) {
        message.channel.send({embed: {
        color: 15844367,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Snoopy Worker",
    description: "Made by joeywoah!",
    fields: [{
        name: "Server Owner",
        value: "Fwosty#7410"
      },
      {
        name: "Status",
        value: "This bot is in the beta stage since 2/28/2020."
      },
      {
          name: "Is there a problem?",
          value: "Contact joeywoah_#0001!"
      },
      {
          name: "Invite The Bot!",
          value: "[Invite](https://discordapp.com/api/oauth2/authorize?client_id=682455200212058144&permissions=8&scope=bot) Snoopy Worker!"
      },
      {
        name: "Discord.js",
        value: "This bot was made using [Discord.js](https://discord.js.org/#/)!"
      },
      {
        name: "OS",
        value: "Running on **CrystelianOS**"
      }

    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Informational Embed"
    }
  }
    });
    }});

    client.on('message', message => {
        // Voice only works in guilds, if the message does not come from a guild,
        // we ignore it
        if (!message.guild) return;
      
        if (message.content === '/join') {
          // Only try to join the sender's voice channel if they are in one themselves
          if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                message.reply('I have connected to the voice channel!');
              })
              .catch(console.log);
          } else {
            message.reply('You need to join a voice channel!');
          }
        }
      });

      client.on("message", async message => {
        // This event will run on every single message received, from any channel or DM.
        
        // It's good practice to ignore other bots. This also makes your bot ignore itself
        // and not get into a spam loop (we call that "botception").
        if(message.author.bot) return;
        
        // Also good practice to ignore any message that does not start with our prefix, 
        // which is set in the configuration file.
        if(message.content.indexOf(config.prefix) !== 0) return;
        
        // Here we separate our "command" name, and our "arguments" for the command. 
        // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
        // command = say
        // args = ["Is", "this", "the", "real", "life?"]
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        // Let's go with a few common example commands! Feel free to delete or change those.
        
        if(command === "kick") {
          // This command must be limited to mods and admins. In this example we just hardcode the role names.
          // Please read on Array.some() to understand this bit: 
          // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
          if(!message.member.roles.some(r=>["《Developer》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
            return message.reply("You can\'t do that!");
          
          // Let's first check if we have a member and if we can kick them!
          // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
          // We can also support getting the member by ID, which would be args[0]
          let member = message.mentions.members.first() || message.guild.members.get(args[0]);
          if(!member)
            return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
          if(!member.kickable) 
            return message.reply("There was an error kicking this user!");
          
          // slice(1) removes the first part, which here should be the user mention or ID
          // join(' ') takes all the various parts to make it a single string.
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          
          // Now, time for a swift kick in the nuts!
          await member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.channel.send({embed: {
              color: 3447003,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              title: "Kick Action",
              fields: [{
                  name: "Moderator",
                  value: `${message.author.tag}`
                },
                {
                  name: "User kicked",
                  value: `${member}`
                },
                {
                  name: "Reason",
                  value: `${reason}`
                }
              ],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Snoopy Worker"
              }
            }
          });
      
        }
        
        if(command === "ban") {
          // Most of this command is identical to kick, except that here we'll only let admins do it.
          // In the real world mods could ban too, but this is just an example, right? ;)
          if(!message.member.roles.some(r=>["《Developer》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
            return message.reply("You can\'t do that!");
          
          let member = message.mentions.members.first();
          if(!member)
            return message.reply("**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!");
          if(!member.bannable) 
            return message.reply("There was an error banning this user!");
      
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          
          await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`))
            message.channel.send({embed: {
              color: 3447003,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              title: "Ban Action",
              fields: [{
                  name: "Moderator",
                  value: `${message.author.tag}`
                },
                {
                  name: "User banned",
                  value: `${member}`
                },
                {
                  name: "Reason",
                  value: `${reason}`
                }
              ],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Snoopy Worker"
              }
            }
          });
        }
        
        if(command === "purge") {
          // This command removes all messages from all users in the channel, up to 100.
          if(!message.member.roles.some(r=>["《Developer》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
            return message.reply("You can\'t do that!");
          // get the delete count, as an actual number.
          const deleteCount = parseInt(args[0], 10);
          
          // Ooooh nice, combined conditions. <3
          if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
          
          // So we get our messages, and delete them. Simple enough, right?
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }
      });

console.log("All Moderation, Fun, Roleplay, and Agent commands have been loaded!")
console.log("Snoopy Worker is now ready for use!")
console.log("I have logged in! If at any time I crash please come back and check these logs!")

//"server rules",
//"please abide by these rules in order to allow for everyone to have a good time ! :lovebongocat:",
      
//"☆ no spamming!",
//"spam tagging, copypasta, purposeful character spam, raids, etc.",

//"☆ use appropriate channels!",
//"keep bot commands and media in the correct channels!",

//"☆ no nsfw!",
//"please refrain from anything nsfw in the server!",

//"☆ be respectful of others!",
//"bullying is not tolerated [bullying is a REPETITIVE action]",
//"racism, homophobia, harassment, etc. [any type of discrimination] is not allowed",
//"keep arguments outside of the server",
//"do not leak personal information without consent",

//"☆ use common sense!",
//"if you feel its not allowed, don't do it",
      
//"☆ punishment is by staff jurisdiction",
//"do not argue with staff !",
//"if you feel unfairly punished, feel free to reach out to a staff member!",
      
//"☆ try not to queue long songs/earrape songs if others are listening along",
//"unless consent is given!",
      
//"☆please refrain from earraping in the general voice channel",
//"blowing into your microphone, using a loud voice changer, etc.",
//"unless consent is given!",
      
//"☆ rules are subject to change",
//"make sure you know about any updated/added rules",
      
//"☆ have fun!!",
      
//"☆ abide by the discord tos!",
//"[for reference ]",
//"https://discordapp.com/guidelines"  	

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
