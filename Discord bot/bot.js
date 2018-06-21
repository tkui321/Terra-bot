
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDU4OTI1MTQ1NjQ2Njk0NDEx.DguvGg.hNLvZNX-XvAfU77CbLpYm49kPAo';
var knock = true;
var jokeover = true;
var laugh = false;
client.on('ready', () => {
  console.log('Bot is running');
      //bot.user.setUsername("Tzlils Test bot");
});
client.on('message', message => {
	if (message.channel.name === 'bots') {
		if (message.author.bot) return;
		if (message.content.startsWith("!google")) {
			var lookup = message.content.replace("!google ", '');
			var newlookup = "https://www.google.com/search?source=hp&ei=mFopW5aMIomSsAfRw77IDg&q=test";
			newlookup = newlookup.replace('test',lookup);
			newlookup = newlookup.replace(/\s+/g, '+')
			message.channel.send(newlookup);
		}
		if (message.content.startsWith("!test")) {
			message.channel.send('Working ');
		}
		if (message.content.startsWith("!help")) {
			message.channel.send('Use !google for googling stuff');
			message.channel.send('Use !code to see my code');
		}
		if (message.content.startsWith("!code")) {
			message.channel.send('https://github.com/Terradice/DiscordBot');
		}
	}
	if (message.channel.name === 'jokes') {
		if (!jokeover) jokeover = false;
		if (message.author.bot) return;
		if (knock) {
			if (message.content === 'knock knock') {
				message.channel.send('Whos there? ');
				knock = false;
				jokeover = false;
				return;
			}
		} if (!jokeover) {
			message.channel.send(message.content + " who?");
			knock = true;
			jokeover = true;
			laugh = true;
			return;
		} if (laugh) {
			message.channel.send('hahaha');
			jokeover = true;
			knock = true;
			laugh = false;
			return;
		}
	}
});
client.login(token);
