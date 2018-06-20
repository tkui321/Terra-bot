
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'you fucking nigger crymemore';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('Bot is running');
});

// Create an event listener for messages
client.on('message', message => {
	if (message.channel.name === 'bots') {
		if (message.author.bot) return;
		if (message.content.includes("!google")) {
			var lookup = message.content.replace("!google ", '');
			var newlookup = "https://www.google.com/search?source=hp&ei=mFopW5aMIomSsAfRw77IDg&q=test";
			newlookup = newlookup.replace('test',lookup);
			newlookup = newlookup.replace(/\s+/g, '+')
			message.channel.send(newlookup);
		}
		if (message.content === '!test') {
			message.channel.send('Working ');
		}
		if (message.content === '!help') {
			message.channel.send('Use !google for googling stuff');
		}
	}
});

// Log our bot in
client.login(token);
