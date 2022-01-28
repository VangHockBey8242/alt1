const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async function(client, message, args) {
    const hataembed = new Discord.RichEmbed()
    .setTitle("Hata")
    .setColor("RED")
    .setFooter(`Crossfire Gold Sistemi`)
    .setTimestamp()
    
  if(message.author.id !== ayarlar.sahip) {
    hataembed.description = `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz.`;
    message.channel.send({embed: hataembed})
  }
  const kanaldb = await db.fetch(`logKanal`)
  const kanal = message.mentions.channels.first();
  if(!kanal) {
    if(args[0] == "sıfırla") {
      if(!kanaldb) {
        hataembed.description = "Zaten gold log ayarlanmamış!";
        message.channel.send({embed: hataembed})
      }
      else {
        const embed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter(`Crossfire Gold Sistemi`)
          .setTimestamp()
          .setDescription(`Gold sistemi logu başarıyla sıfırlandı.`)
        await db.delete(`logKanal`)
        message.channel.send({embed: embed})
      }
    }
    else {
      hataembed.description = "Bir kanal etiketlemelisiniz!";
      message.channel.send({embed: hataembed})
    }
  }
  else {
    const embed = new Discord.RichEmbed()
      .setTitle("Başarılı")
      .setColor("GREEN")
      .setFooter(`Crossfire Gold Sistemi`)
      .setTimestamp()
      .setDescription(`Gold sistemi logu başarıyla ${kanal} olarak değiştirildi.\n\nSıfırlamak İçin: /gold-log sıfırla`)
    await db.set(`logKanal`, kanal.id)
    message.channel.send({embed: embed})
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: 'gold-log',
  description: '',
  usage: ''
};