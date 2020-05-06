module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and APi ping",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`);

        msg.edit(`🏓 Pong\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}\nAPI Latency is ${Math.round(client.ping)}ms`);

    }
}