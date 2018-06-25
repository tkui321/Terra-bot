
const Discord = require('discord.js');
const google = require('google');
const client = new Discord.Client();
const { TOKEN } = process.env;
var knock = true;
var jokeover = true;
var laugh = false;
var prefix = ";"
client.on('ready', () => {
  console.log(`Bots is ready and working in ${client.guilds.size} servers with ${client.users.size} users!`);
  client.user.setActivity("Terradice#7561|;help");
});
function byefaggots() {
    window.stop();
}
client.on('message', message => {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return;
		if (message.content.toLowerCase().startsWith(prefix + "eval")) {
			if(message.author.id !== "244111430956089344") return;
				var snipped = message.content.replace(";eval ", "");
				const pidor= snipped.content.split(' ').slice(1).join(' ');
 				   message.channel.send(
					`\`\`\`js
					${eval(pidor)}
					\`\`\``);
		}
		if (message.content.toLowerCase().startsWith(prefix + "google")) {
			var lookup = message.content.replace(";google ", "");
			message.channel.send("<a:googling:426453223310622740>" + " Loading...").then(msg => {
 			google(lookup, (err, res) => {
				if (err) console.error(err);
				else {
					let url = res.links[res.start].href; //you can also use .href instead of .link
					if (url != null) {
						msg.edit(url);
					} else {
						msg.edit("error");
					}
					}
			});
			});
		}
		if (message.content.toLowerCase().startsWith(prefix + "test")) {
			message.channel.send('Working ');
		}
		if (message.content.toLowerCase().startsWith(prefix + "help")) {
			client.users.get(message.author.id).send('Use ;google for googling stuff');
			client.users.get(message.author.id).send('Use ;code to see my code');
			client.users.get(message.author.id).send('Use ;uptime to see how long i have been up');
			client.users.get(message.author.id).send('More will be added in the future, contact the creator for questions');
			message.channel.send(message.author + " Check DM's");
		}
		if (message.content.toLowerCase().startsWith(prefix + "code")) {
			message.channel.send('https://github.com/Terradice/Tzlils-multiuse-bot');
		}
		if (message.content.toLowerCase().startsWith(prefix + "uptime")) {
			const embed = new Discord.RichEmbed()
		.setColor(530118)
		.setFooter(`Terrabot operating in ${client.guilds.size} servers`, 'https://cdn.discordapp.com/embed/avatars/4.png')
		.setAuthor("Uptime", client.user.avatarURL)
		.addField("Hours",Math.round(client.uptime / (1000 * 60 * 60)), true )
		.addField("Minutes", Math.round(client.uptime / (1000 * 60)) % 60, true);
		message.channel.send(embed)
		}
		if (message.content.startsWith(prefix + "leave")) {
			if(message.author.id !=="244111430956089344") return;
			message.channel.send('Leaving...');
			client.users.get("244111430956089344").send("i left.. " );
			setTimeout(byefaggots, 3000)
		}
	if (message.channel.name === 'jokes') {
		if (!jokeover) jokeover = false;
		if (message.author.bot) return;
		if (knock) {
			if (message.content.toLowerCase() === 'knock knock') {
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
	} else return;
});
client.login(TOKEN);
