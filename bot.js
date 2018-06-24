
const Discord = require('discord.js');
const google = require('google');
const client = new Discord.Client();
const token = 'NDU5NzgyMzQ3OTM2NjI4NzQ3.Dg7Nbw.6xuO-ECDYOf7eUlCKB8JCNCV92s';
var knock = true;
var jokeover = true;
var laugh = false;
var prefix = ";"
client.on('ready', () => {
  console.log('Bot is running');
  //client.user.setActivity({game: {name: "Terradice#7561|;help", type: 1}});
  client.user.setActivity("Terradice#7561|;help");
});
function byefaggots() {
    window.stop();
}
client.on('message', message => {
	if (message.channel.name === 'bots' || message.channel.name === 'פקודות-בוטים') {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return;
		if (message.content.startsWith(prefix + "google")) {
			var lookup = message.content.replace(";google ", '');
			var newlookup = "https://www.google.com/search?source=hp&ei=mFopW5aMIomSsAfRw77IDg&q=test";
			newlookup = newlookup.replace('test',lookup);
			newlookup = newlookup.replace(/\s+/g, '+')
			message.channel.send("<a:googling:426453223310622740>" + " Loading...").then(r => {
 				 setTimeout(function(){
     				google(lookup, (err, res) => {
   					 if (err) console.error(err);
   					 else {
     					 let url = res.links[res.start].link; //you can also use .href instead of .link
     					 r.edit(url);
 				    }
				});
				}, 2000);
				});
		}
		if (message.content.startsWith(prefix + "test")) {
			message.channel.send('Working ');
		}
		if (message.content.startsWith(prefix + "help")) {
			client.users.get(message.author.id).send('Use ;google for googling stuff');
			client.users.get(message.author.id).send('Use ;code to see my code');
			client.users.get(message.author.id).send('Use ;uptime to see how long i have been up');
			client.users.get(message.author.id).send('Use ;leave for me to gtfo');
			message.channel.send(message.author + " Check DM's");
		}
		if (message.content.startsWith(prefix + "code")) {
			message.channel.send('https://github.com/Terradice/Tzlils-multiuse-bot');
		}
		if (message.content.startsWith(prefix + "uptime")) {
			const embed = new Discord.RichEmbed()
		.setColor(530118)
		.setFooter("Terrabot by Tzlil aka Terradice", 'https://cdn.discordapp.com/embed/avatars/4.png')
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
	} else return;
});
client.login(token);
