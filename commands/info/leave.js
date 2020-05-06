            module.exports = {
                name: "say",
                category: "moderation",
                description: "Returns the text argument",
                run: async (client, message, args) => {
                    if (!message.member.hasPermission('BAN_MEMBERS'))
	return message.cannel.send(errembed)
		    message.reply("Now leaving by your command. Goodbye.");
            message.guild.leave();
            
                }
            }