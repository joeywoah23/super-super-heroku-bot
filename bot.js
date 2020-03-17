const Discord = require("discord.js");
const Util = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');
const fetchVideoInfo = require('youtube-info'); //
const getYoutubeID = require('get-youtube-id'); //
const YouTube = require('simple-youtube-api'); //
const youtube = new YouTube("AIzaSyD747gqlEB_p4UD-OYKWra5G6E3hP3cuHc"); //
const fs = require("fs");
const gif = require("gif-search");
const queue = new Map();
const {
	prefix,
	token,
} = require('./config.json');
const talkedRecently = new Set();

asdasdadadad

console.log("Snoopy Worker has loaded... Commands have been queued...")
client.on("message", message => {
    if (message.author.bot) return;
    // This is where we'll put our code.
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const user = message.mentions.users.first();
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
    if (message.content.startsWith(config.prefix + 'tea')) {
        message.channel.send('https://gph.is/1IFn5eh')
    } else
    if (message.content.startsWith(config.prefix + 'channelcount')) {
      message.channel.send({embed: {
        color: 15844367,
        description: `This server has **${client.channels.size}** channels!`
      }});
    } else
  if (message.content.startsWith(config.prefix + 'reboot')) {
   if(!message.member.roles.some(r=>["《Developer》", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
   message.channel.send('Rebooting...').then(() => {
     client.destroy().then(() => {
       process.exit();
     })
   })
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
      if(!member) return message.channel.send({embed: {
        color: 15844367,
        description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
      }}).then(msg => {
        msg.delete(10000)
      }) 
if(member === message.author)
return message.reply("You can\'t punish yourself!");
      //made the command: let member = message.member;
      let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
      // Add the role!
      member.addRole(role).catch(console.error)
      client.channels.get("618125415134920848").send({embed: {
        color: 15844367,
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
          text: "Mute Action"
        }
      }
    });
    message.channel.send({embed: {
      color: 15844367,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Mute Action",
          fields: [{
          name: "Mute",
          value: `**${message.author.tag}**, User ${user} has been muted for **${reason}**.`
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "Mute Action"
      }
    }
  });;
    } else
    if (message.content.startsWith(config.prefix + "grant")) {
      let reason = args.slice(1).join(' ');
          if(!reason)
          return message.reply("Please mention a valid role to grant!");
          let Role = message.guild.roles.find(r => r.name === `${reason}`);
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
      if(!member)
            return message.channel.send({embed: {
              color: 15844367,
              description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
            }}).then(msg => {
              msg.delete(10000)
            })
      // or the person who made the command: let member = message.member;
      
      // Add the role!
      member.addRole(Role).catch(console.error)
      client.channels.get("618125415134920848").send({embed: {
        color: 15844367,
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
      title: "Grant Action",
          fields: [{
          name: "Grant",
          value: `**${message.author.tag}**, Role **${reason}** has been granted to **${user}**`
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "Grant Action"
      }
    }
  });;
  } else
  if (message.content.startsWith(config.prefix + "ungrant")) {
    let reason = args.slice(1).join(' ');
        if(!reason)
        return message.reply("Please mention a valid role to ungrant!");
	  let Role = message.guild.roles.find(r => r.name === `${reason}`);
  
    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();
    if(!message.member.roles.some(r=>["《Developer》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
    return message.reply("You can\'t do that!");
    if(!member)
          return message.channel.send({embed: {
            color: 15844367,
            description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
          }}).then(msg => {
            msg.delete(10000)
          })
    // or the person who made the command: let member = message.member;
    
    // Add the role!
    member.removeRole(Role).catch(console.error)
    client.channels.get("618125415134920848").send({embed: {
      color: 15844367,
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
    title: "Ungrant Action",
        fields: [{
        name: "Ungrant",
        value: `**${message.author.tag}**, Role **${reason}** has been ungranted from **${user}.**`
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Ungrant Action"
    }
  }
});;
} else
	if (message.content.startsWith(config.prefix + "rban")) {

      let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          let Role = message.guild.roles.find(r => r.name === `RoleBanned`);
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "《Trial Mod》", "《Mod》", "《Head Mod》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
      if(!member)
            return message.channel.send({embed: {
              color: 15844367,
              description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
            }}).then(msg => {
              msg.delete(10000)
            })
	if(member === message.author)
return message.reply("You can\'t punish yourself!");
      // or the person who made the command: let member = message.member;
      
      // Add the role!
      member.addRole(Role).catch(console.error)
      client.channels.get("618125415134920848").send({embed: {
        color: 15844367,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "RBan Action",
        fields: [{
            name: "Moderator",
            value: `${message.author.tag}`
          },
          {
            name: "Rolebanned",
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
          text: "RBan Action"
        }
      }
    });
    message.channel.send({embed: {
      color: 15844367,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "RBan Action",
          fields: [{
          name: "Rban",
          value: `**${message.author.tag}**, **${member}** has been rolebanned for **${reason}**`
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "RBan Action"
      }
    }
  });;
	} else
if (message.content.startsWith(config.prefix + "urb")) {

      let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          let Role = message.guild.roles.find(r => r.name === `RoleBanned`);
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "《Trial Mod》", "《Mod》", "《Head Mod》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
      if(!member)
            return message.channel.send({embed: {
              color: 15844367,
              description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
            }}).then(msg => {
              msg.delete(10000)
            })
	
if(member === message.author)
return message.reply("You can\'t unpunish yourself!");
      // or the person who made the command: let member = message.member;
      
      // Add the role!
      member.removeRole(Role).catch(console.error)
      client.channels.get("618125415134920848").send({embed: {
        color: 15844367,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "URBan Action",
        fields: [{
            name: "Moderator",
            value: `${message.author.tag}`
          },
          {
            name: "URBanned",
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
          text: "URBan Action"
        }
      }
    });
    message.channel.send({embed: {
      color: 15844367,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "URBan Action",
          fields: [{
          name: "URBan",
          value: `**${message.author.tag}**, **${member}** has been rolebanned for **${reason}**`
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "URBan Action"
      }
    }
  });;
	} else
if (message.content.startsWith(config.prefix + "hitlist")) {

  if(!message.member.roles.some(r=>["《Developer》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(' ');
  if(!member)
          return message.channel.send({embed: {
            color: 15844367,
            description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
          }}).then(msg => {
            msg.delete(10000)
          })
	if(member === message.author)
return message.reply("You can\'t punish yourself!");
  if(!reason)
    return message.reply("Mention someone to add to **THE HITLIST**");
  message.channel.send({embed: {
    color: 15844367,
    description: `${member} has been added to **ADMINISTATOR HITLIST** for **${reason}**!`
  }});
  client.channels.get("618125415134920848").send({embed: {
    color: 15844367,
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
            return message.channel.send({embed: {
              color: 15844367,
              description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
            }}).then(msg => {
              msg.delete(10000)
            })
     
if(member === message.author)
return message.reply("You can\'t unpunish yourself!");
      // or the person who made the command: let member = message.member;
      let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
      // Remove a role!
      member.removeRole(role).catch(console.error)
      client.channels.get("618125415134920848").send({embed: {
        color: 15844367,
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
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "Unmute Action"
        }
      }
    });
    message.channel.send({embed: {
      color: 15844367,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Unmute Action",
          fields: [{
          name: "Unmute",
          value: `**${message.author.tag}**, User ${user} has been unmuted because: **${reason}**.`
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "Unmute Action"
      }
    }
  });;
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
            return message.channel.send({embed: {
              color: 15844367,
              description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
            }}).then(msg => {
              msg.delete(10000)
            })
	    if(user === message.author)
return message.reply("You can\'t punish yourself!");
      // **CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!
      // or the person who made the command: let member = message.member;
      if(!reason) reason = "No reason provided";
      client.channels.get("618125415134920848").send({embed: {
        color: 15844367,
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
          text: "Warning Action"
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
          value: `**${message.author.tag}**, User ${user} has been warned because: **${reason}**.`
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
    return message.channel.send({embed: {
      color: 15844367,
      description: "Please supply a user to report!"
    }}).then(msg => {
      msg.delete(10000)
    })
	  
if(user === message.author)
return message.reply("You can\'t report yourself!");
    if(!reason) 
    return message.channel.send({embed: {
      color: 15844367,
      description: "Please supply a reason!"
    }});
    message.delete();
    client.channels.get("618125415134920848").send({embed: {
      color: 15844367,
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
        text: "Report Member Action"
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
  if(message.content.startsWith(config.prefix + "happybirthday")) {
    if(!message.member.roles.some(r=>["《Developer》", "《Trial Mod》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
    message.channel.send(`HAPPY BIRTHDAY ${user}!! https://gph.is/g/4DAAReP`)
  } else
  if(message.content.startsWith(config.prefix + "suggest")) {
    let reason = args.slice(1).join(' ');
    if(!reason)
    return message.channel.send({embed: {
      color: 15844367,
      description: "Please supply a suggestion!"
    }}).then(msg => {
      msg.delete(10000)
    });
    client.channels.get("618125415134920848").send({embed: {
      color: 15844367,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Suggestion Action",
      fields: [{
          name: "Member",
          value: `${message.author.tag}`
        },
        {
          name: "Suggestion",
          value: `${reason}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Suggestion Action"
      }
    }
  });
  message.channel.send({embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Suggestion Action",
    description: "Suggestion Sender",
    fields: [{
        name: "Suggestion has been sent!",
        value: `**${message.author.tag}**, The suggestion has been sent to staff! Thank you!`
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Suggestion Action"
    }
  }
});;
  } else
    if (message.content.startsWith(config.prefix + "hot")) {
        message.channel.send("https://media.giphy.com/media/JwLY4ToQwe4yA/giphy.gif")
    } else
    if(message.content.startsWith(config.prefix + 'beep')) {
        message.channel.send({embed2})
    } else
    if (message.content.startsWith(config.prefix + 'kungu')) {
      message.reply("tHaT'S sO jOeY kOngO!!!")
    } else
    if (message.content.startsWith(config.prefix + "asl")) {
      let age = args[0]; // Remember arrays are 0-based!.
      let sex = args[1];
      let location = args[2];
      message.channel.send(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    } else
    if (message.content.startsWith(config.prefix + 'info')) {
      message.channel.send({embed})
    } else
    if (message.content.startsWith(config.prefix + 'welcomenet')) {
      if(!message.member.roles.some(r=>["《Developer》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
      //"Hello. Welcome to the `SNOOPY WORKER NETWORK`. All moderation commands and report commands will now be transmitted throughout the `SNOOPY WORKER NETWORK`. Thank you for using Snoopy Worker."
      message.channel.send({embed: {
        color: 15844367,
        description: "Hello. Welcome to the `SNOOPY WORKER NETWORK`. All moderation commands and report commands will now be transmitted throughout the `SNOOPY WORKER NETWORK`. Thank you for using Snoopy Worker."
      }});
      client.channels.get("618125415134920848").send({embed: {
        color: 15844367,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "SNOOPY WORKER NETWORK",
        fields: [{
            name: "Member Activated",
            value: `${message.author.tag}`
          },
          {
            name: "Logs",
            value: "```SNOOPY WORKER NETWORK HAS BEEN ACTIVATED!!```"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "SNOOPY WORKER NETWORK"
        }
      }
    });
    }
    if (message.content.startsWith(config.prefix + 'version')) {
      message.channel.send({embed: version})
  } else
  if (message.content.startsWith(config.prefix + 'connect')) {
    if(!message.member.roles.some(r=>["《Developer》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");
    message.reply("Connected to Wi-fi. Network details sent to #🗂》mod-logs!")
    client.channels.get("618125415134920848").send({embed: {
      color: 15844367,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "SNOOPY WORKER NETWORK",
      fields: [{
          name: "WiFi Connection",
          value: `Skynet-5`
        },
        {
          name: "IP",
          value: "172.12.42.134"
        },
        {
          name: "Connected by command of",
          value: `${message.author.tag}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "SNOOPY WORKER NETWORK"
      }
    }
  });
  } else
    if(message.content.startsWith(config.prefix + 'help')) {
      message.channel.send({embed: help})
    }});


      client.on("message", async message => {
	     
        // This event will run on every single message received, from any channel or DM.
        
        // It's good practice to ignore other bots. This also makes your bot ignore itself
        // and not get into a spam loop (we call that "botception").
        if(message.author.bot) return;
        
        // Also good practice to ignore any message that does not start with our prefix, 
        // which is set in the configuration file.
        if(message.content.indexOf(config.prefix) !== 0) return;
	       if (talkedRecently.has(message.author.id))
  return;
        
        // Here we separate our "command" name, and our "arguments" for the command. 
        // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
        // command = say
        // args = ["Is", "this", "the", "real", "life?"]
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
	        const Enmap = require("enmap");
client.points = new Enmap({name: "points"});
client.on("message", message => {
  if (message.author.bot) return;
  if (message.guild) {
    // Let's simplify the `key` part of this.
    const key = `${message.guild.id}-${message.author.id}`;
    client.points.ensure(key, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
    client.points.inc(key, "points");
  }
  // Rest of message handler
});
client.on("message", message => {
  // As usual, ignore all bots.
  if (message.author.bot) return;

  // If this is not in a DM, execute the points code.
  if (message.guild) {
    // We'll use the key often enough that simplifying it is worth the trouble.
    const key = `${message.guild.id}-${message.author.id}`;

    // Triggers on new users we haven't seen before.
    client.points.ensure(`${message.guild.id}-${message.author.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });
    
    client.points.inc(key, "points");
    
    // Calculate the user's current level
    const curLevel = Math.floor(0.1 * Math.sqrt(client.points.get(key, "points")));
    
    // Act upon level up by sending a message and updating the user's level in enmap.
    if (client.points.get(key, "level") < curLevel) {
      message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
      client.points.set(key, curLevel, "level");
    }
  }
  // Rest of message handler
});
if (command === "rank") {
  const key = `${message.guild.id}-${message.author.id}`;
  return message.channel.send({embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Rank",
    description: "Your Rank!",
    fields: [{
        name: "Member",
        value: `${message.author.tag}`
      },
      {
        name: "Points",
        value: `${client.points.get(key, "points")}`
      },
      {
        name: "Rank/Level",
        value: `${client.points.get(key, "level")}`
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Rank"
    }
  }
});;;
//${client.points.get(key, "points")} = points
//${client.points.get(key, "level")} = level
}
if(command === "leaderboard") {
  // Get a filtered list (for this guild only), and convert to an array while we're at it.
  const filtered = client.points.filter( p => p.guild === message.guild.id ).array();

  // Sort it to get the top results... well... at the top. Y'know.
  const sorted = filtered.sort((a, b) => b.points - a.points);

  // Slice it, dice it, get the top 10 of it!
  const top10 = sorted.splice(0, 10);

  // Now shake it and show it! (as a nice embed, too!)
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription("Our top 10 points leaders!")
    .setColor(15844367);
  for(const data of top10) {
    embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
  }
  return message.channel.send({embed});
}
if(command === "top") {
  // Get a filtered list (for this guild only), and convert to an array while we're at it.
  const filtered = client.points.filter( p => p.guild === message.guild.id ).array();

  // Sort it to get the top results... well... at the top. Y'know.
  const sorted = filtered.sort((a, b) => b.points - a.points);

  // Slice it, dice it, get the top 10 of it!
  const top10 = sorted.splice(0, 10);

  // Now shake it and show it! (as a nice embed, too!)
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription("Our top 10 points leaders!")
    .setColor(15844367);
  for(const data of top10) {
    embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
  }
  return message.channel.send({embed});
}
		
if(command === "give") {
  // Limited to guild owner - adjust to your own preference!
  if(!message.member.roles.some(r=>["《Developer》", "Riley", "Dark", "Frosty"].includes(r.name)) )
    return message.reply("You're not the boss of me, you can't do that!");

  const user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) return message.reply("You must mention someone or give their ID!");

  const pointsToAdd = parseInt(args[1], 10);
  if(!pointsToAdd) 
    return message.reply("You didn't tell me how many points to give...")

  // Ensure there is a points entry for this user.
  client.points.ensure(`${message.guild.id}-${user.id}`, {
    user: message.author.id,
    guild: message.guild.id,
    points: 0,
    level: 1
  });

  // Get their current points.
  let userPoints = client.points.get(`${message.guild.id}-${user.id}`, "points");
  userPoints += pointsToAdd;
  

  // And we save it!
  client.points.set(`${message.guild.id}-${user.id}`, userPoints, "points")

  message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userPoints} points.`);
}

if(command === "cleanup") {
  // Let's clean up the database of all "old" users, 
  // and those who haven't been around for... say a month.
  if(!message.member.roles.some(r=>["《Developer》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
  return message.reply("You're not the boss of me, you can't do that!");
  // Get a filtered list (for this guild only).
  const filtered = client.points.filter( p => p.guild === message.guild.id );

  // We then filter it again (ok we could just do this one, but for clarity's sake...)
  // So we get only users that haven't been online for a month, or are no longer in the guild.
  const rightNow = new Date();
  const toRemove = filtered.filter(data => {
    return !message.guild.members.has(data.user) || rightNow - 2592000000 > data.lastSeen;
  });

  toRemove.forEach(data => {
    client.points.delete(`${message.guild.id}-${data.user}`);
  });

  message.channel.send(`I've cleaned up ${toRemove.size} old farts.`);
}
      
	      
        // Let's go with a few common example commands! Feel free to delete or change those.
client.on('message', async msg => { 
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
            return message.channel.send({embed: {
              color: 15844367,
              description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
            }});
	
if(member === message.author)
return message.reply("You can\'t punish yourself!");
		
          if(!member.kickable) 
            return message.channel.send({embed: {
              color: 15844367,
              description: "There was an error kicking this user!"
            }});
          // **CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!
          // slice(1) removes the first part, which here should be the user mention or ID
          // join(' ') takes all the various parts to make it a single string.
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          
          // Now, time for a swift kick in the nuts!
          await member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            client.channels.get("618125415134920848").send({embed: {
              color: 15844367,
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
                text: "Kick Action"
              }
            }
          });
          message.channel.send({embed: {
            color: 15844367,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Kick Action",
                fields: [{
                name: "Kick",
                value: `**${message.author.tag}**, User ${member} has been kicked from the server because: **${reason}**.`
              }
            ],
            footer: {
              icon_url: client.user.avatarURL,
              text: "Kick Action"
            }
          }
        });;
      
        }
           
        if(command === "ban") {

          // Most of this command is identical to kick, except that here we'll only let admins do it.
          // In the real world mods could ban too, but this is just an example, right? ;)
          if(!message.member.roles.some(r=>["《Developer》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
            return message.reply("You can\'t do that!");
          
          let member = message.mentions.members.first();
          if(!member)
            return message.channel.send({embed: {
              color: 15844367,
              description: "**CrystelianOS** syntax error: Argument Missing: Please mention a valid member of the server!"
            }});

if(member === message.author)
return message.reply("You can\'t punish yourself!");
		
          if(!member.bannable) 
            return message.channel.send({embed: {
              color: 15844367,
              description: "There was an error banning this user!"
            }});
      
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          
          await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`))
            client.channels.get("618125415134920848").send({embed: {
              color: 15844367,
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
                text: "Ban Action"
              }
            }
          });
          message.channel.send({embed: {
            color: 15844367,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Ban Action",
                fields: [{
                name: "Ban",
                value: `**${message.author.tag}**, User ${member} has been banned from the server because: **${reason}**.`
              }
            ],
            footer: {
              icon_url: client.user.avatarURL,
              text: "Ban Action"
            }
          }
        });;
        }
        
        if(command === "purge") {
          // This command removes all messages from all users in the channel, up to 100.
          if(!message.member.roles.some(r=>["《Developer》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
            return message.reply("You can\'t do that!");
          // get the delete count, as an actual number.
          const deleteCount = parseInt(args[0], 10);
          
          // Ooooh nice, combined conditions. <3
          if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.channel.send({embed: {
              color: 15844367,
              description: "Please provide a number between 2 and 100 for the number of messages to delete"
            }});
          
          // Please provide a number between 2 and 100 for the number of messages to delete
          // So we get our messages, and delete them. Simple enough, right?
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send({embed: {
              color: 15844367,
              description: `There was an error purging these messages: ${error}`
            }}));
        }
      });

client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("I can't find you in any voice channel!");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("I don't have enough permissions to join your voice channel!");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("I don't have enough permissions to speak in your voice channel!");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.sendMessage("I don't have enough permissions to insert a URLs!")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**, Just added to the queue!`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle(":mag_right:  YouTube Search Results :")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
/////////////////					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No one respone a number!!');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send("I didn't find any results!");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to skip!!");

		serverQueue.connection.dispatcher.end('Ok, skipped!');
        return undefined;
        
	} else if (command === `stop`) {
		let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "《Trial Mod》", "《Mod》", "《Head Mod》", "《Admin》", "《Head Admin》", "《Manager》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
        if (!serverQueue) return msg.channel.send("There is no Queue to stop!!");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Ok, stopped & disconnected from your Voice channel');
        return undefined;
        
	} else if (command === `vol`) {
		let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["《Developer》", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("You can\'t do that!");

		if (!msg.member.voiceChannel) return msg.channel.send("You Must be in a Voice channel to Run the Music commands!");
		if (!serverQueue) return msg.channel.send('You only can use this command while music is playing!');
        if (!args[1]) return msg.channel.send(`The bot volume is **${serverQueue.volume}**`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`Volume Now is **${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is no Queue!');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('There is no Queue!!');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("The Queue Songs :")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Ok, paused');
		}
		return msg.channel.send('There is no Queue to Pause!');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('Ok, resumed!');
            
		}
		return msg.channel.send('Queue is empty!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}!`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Can't join this channel: ${error}!`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`**${song.title}**, just added to the queue! `);
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


console.log("All Moderation, Fun, Roleplay, and Agent commands have been loaded!");
console.log("Snoopy Worker is now ready for use!");
console.log("I have logged in! If at any time I crash please come back and check these logs!");

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

// EMBEDS ARE NEXT

const embed = new Discord.RichEmbed()
  .setTitle("Information Embed")
  .setAuthor("Information", "https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(15844367)
  .setDescription("Hello. Thank you for using Snoopy Worker! Welcome to the updated version of the `Information` embed! You can't invite this bot anymore! You can fork the repository on the GitHub page!")
  .setFooter("Information", "https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  .setThumbnail("https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Developer",
    "joeywoah_#0001")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("GitHub Repository", "Click [here!](https://github.com/joeywoah23/snoopyworker)", true)
  .addField("This bot was made using", "[Discord.js](https://discord.js.org)")
  .addBlankField(true)
  .addField("`OS`", "`RUNNING ON CrystelianOS`", true);

const embed1 = new Discord.RichEmbed()
  .setTitle("Information")
  .setAuthor("Information", "https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(15844367)
  .setDescription("Hello. Thank you for using Snoopy Worker! Welcome to the updated version of the `Information` embed! You can't invite this bot anymore! You can fork the repository on the GitHub page!")
  .setFooter("Information", "https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  .setThumbnail("https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addField("Developer",
    "joeywoah_#0001")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("GitHub Repository", "[GitHub](https://github.com/joeywoah23/snoopyworker)", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("OS","`RUNNING ON CrystelianOS 3`")
  .addField("This bot was made using", "[Discord.js](https://discord.js.org)");

const embed3 = new Discord.RichEmbed()
  .setTitle("Version")
  .setAuthor("Version", "https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  .setColor(15844367)
  .setDescription("Welcome to the version embed! This is where you'll find the version the bots running on!")
  .setFooter("Version", "https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  .setThumbnail("https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot")
  .setTimestamp()
  .addField("CrystelianOS","```RUNNING ON VERSION 3```")
  .addField("Snoopy Worker", "```RUNNING ON VERSION 2.0```", );

const help = {
	color: 15844367,
	title: 'Help',
	author: {
		name: 'Help',
		icon_url: 'https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot',
		url: 'https://discord.js.org',
	},
	description: 'Welcome to the help embed! You\'ll find most commands here! `()` - Remodel, `<>` - Beta, `[]` - WIP.',
	thumbnail: {
		url: 'https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot',
	},
	fields: [
		{
			name: 'Utility Commands',
			value: 'help, info, say, apicheck, latency, membercount, channelcount, welcomeOSmsg, reportmember, version, [suggest].',
		},
		{
			name: 'Fun Commands',
			value: 'asl, cry, rip, avatar, tea, hot, lmao, banmemami, happybirthday, kungu.',
			inline: false,
		},
		{
			name: "Music Commands",
			value: "play, stop, skip, np, queue.",
			inline: false
		},
		{
			name: 'Points Commands',
			value: 'rank, leaderboard/top.',
			inline: false,
		},
		{
			name: 'Roleplay Commands',
			value: 'shoot, wigsnatch.',
			inline: true,
		},
		{
			name: 'CrystelianOS Moderation',
			value: 'kick, ban, purge, mute, unmute, grant, ungrant, warn, reboot, rban, urb.',
			inline: true,
		},
		{
			name: 'SNOOPY AGENCY',
			value: 'hitlist, welcomenet, connect.',
			inline: true,
		},
	],
	timestamp: new Date(),
	footer: {
		text: 'Help',
		icon_url: 'https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot',
	},
};

const version = {
	color: 15844367,
	title: 'Version',
	author: {
		name: 'Version',
		icon_url: 'https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot',
		url: 'https://discord.js.org',
	},
	description: 'Welcome to the version embed! This is where you\'ll find the version the bots running on!',
	thumbnail: {
		url: 'https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot',
	},
	fields: [
		{
			name: 'CrystelianOS',
			value: '```RUNNING ON VERSION 3```',
		},
		{
			name: 'SNOOPY Worker',
			value: '```RUNNING ON VERSION 2.0```',
			inline: true,
		},
	],
	timestamp: new Date(),
	footer: {
		text: 'Version',
		icon_url: 'https://cdn.discordapp.com/app-icons/682455200212058144/fe741000f4323b9afbaf7e208f4b7706.png?size=256&quot',
	},
};

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
