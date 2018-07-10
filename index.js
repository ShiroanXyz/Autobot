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
            description: 'Do you want to join my server? ♡\n**Here\'s the invite: __https://discord.gg/EbxWzQ3__**',
            image: {
             url: 'https://cdn.discordapp.com/attachments/464714834974474240/466153658363412491/hug-S1a0DJhqG.gif'
          }
        }
    });
});

client.login(process.env.TOKEN);
