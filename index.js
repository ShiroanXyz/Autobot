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
            color: 0xcc0000,
            description: 'Do you want to join my server? ♡\n**Here\'s the invite: __https://discord.gg/EbxWzQ3__**',
            image: {
             url: 'https://data.whicdn.com/images/308317986/original.gif'
          }
        }
    });
});

client.login(process.env.TOKEN);
