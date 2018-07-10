const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '~~ping') {
    msg.reply('Pong!');
  }
});

client.on('guildMemberAdd', (member) => {
    member.sendMessage({
        embed: {
            color: 0xf44242,
            description: 'Hey I created a server on Anime & Gaming Join us!\n**Here\'s the invite: __https://discord.gg/EbxWzQ3__**'
        }
    });
});

client.login(process.env.TOKEN);