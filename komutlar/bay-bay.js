const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek: **c/baybay aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!')

  if (args[0] == 'aç') {
    db.set(`baybay_${message.guild.id}`, 'acik').then(i => {
      message.channel.send(`Artık bot bb diyince görüşürüz diyecek. Kapatmak için "\`c/baybay kapat\`" yazmalısın.`)
    })
  }
  if (args[0] == 'kapat') {
    db.set(`baybay_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send(`Artık biri bb diyince cevap vermicek.`)
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['baybay-sistemi'],
  permLevel: 0,
  kategori: "Ayarlar"
};

exports.help = {
  name: 'baybay',
  description: 'baybay ayarlarsın.',
  usage: 'baybay'
};