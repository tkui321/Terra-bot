const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'token';
client.on('ready', () => {
  console.log('Bot is running');
});
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
		//todo: add more stuff dumbass
	}
});
client.login(token);
