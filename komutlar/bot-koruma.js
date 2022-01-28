const discord =require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args, dil) => {
if(args[0] === "kapat") {
  db.delete(`bot.${message.guild.id}.koruma`)
  message.channel.send(`${client.emojiler.evet}| BotAdı Saldırı koruması kaldırıldı.`)
} else if(args[0] === "aç") {
  db.set(`bot.${message.guild.id}.koruma`, `aktif`)
  message.channel.send(client.emojiler.evet + '| BotAdı Saldırı koruması başarılı bir şekilde `aktif` edildi!')
} else return message.reply(dil.doğrukullanım)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["anti-raid-bot-sistemi","bot-koruma"],
  permLevel: 4,
  kategori: "Koruma-Sistem"
};

exports.help = {
  name: 'koruma',
  description: 'Bana ait değildir ',
  usage: 'koruma '
};