const { Client, Intents } = require('discord.js');
require('env').config();
client = new Client({ intents: [Intents.FLAGS.GUILDS] });,
client.once('ready', () => { 	console.log('Estoy Listo Papu!'); })
client.login(env.process.token);