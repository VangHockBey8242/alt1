const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Bot Bilgi')
.setTimestamp()
.addField('Kuruluş Yılı', '2020')
.addField('Bot Sahibi', '> ℣angHockBey* ve Frankenstein ')
.addField('Davet Linklerini Nasıl Görebilirim?', 'c/davet')
.setFooter('CrossFire - Bilgi Komutu', client.user.avatarURL)
.setTimestamp()
.setImage('https://media.discordapp.net/attachments/795384073228517389/796044714566352936/Crossfire.png')
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'bilgi',
  description: '.',
  usage: 'bilgi'
};