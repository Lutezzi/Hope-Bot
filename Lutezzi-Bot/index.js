const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require('./ayarlar.json');
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
//Botun durumunu sürekli değiştirir.
/*var setStatus = [
    "made by Lutezzi 😈",
    ".help"
]
setInterval (function() {
    var random = Math.floor(Math.random()*(setStatus.length-0+1)+0);
    client.user.setActivity(setStatus[random], {type: 'PLAYING'});
}, 1 * 2000);*/

//Gelen mesajların loga düşmesini sağlar.
client.on("message", (message => {
    console.log('Messages: '+ message.content)
    client.user.setStatus('idle');
    client.user.setPresence({ activity: {name: "made by Lutezzi 😈"}, status: "idle"});
}));

client.on('ready', () => {
    console.log(`${client.user.tag} is Online!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    }
});

client.login(token);