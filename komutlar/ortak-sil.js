const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");

exports.run = async function(client, message, args) {
  // DEĞİŞKENLER //
  const üye = message.mentions.members.first();

  
  // EMBEDLER //
  const hataembed = new Discord.RichEmbed()
    .setTitle("Hata")
    .setColor("RED")
    .setFooter(`Crossfire Yetki Sistemi`)
    .setTimestamp()
  
  // KOD //
  if(message.author.id != ayarlar.sahip) {
    hataembed.description = "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz.";
    message.channel.send({embed: hataembed})
  }
  else if(!üye) {
    hataembed.description = `Lütfen sahibini almak istediğiniz bir üyeyi etiketleyin.\n\nÖrnek: ${ayarlar.prefix}ortak-sil @kullanıcı`;
    message.channel.send({embed: hataembed})
  }
  else {
    const üyedb = await db.fetch(`ortak_${üye.id}`);
    const kanal = await db.fetch(`logKanal`);
    if(üyedb) {
      if(!kanal) {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter(" Yetki Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişinin ortak üyeliği başarıyla alındı.`)
        await db.delete(`ortak_${üye.id}`)
        message.channel.send({embed: başarılıembed})
      }
      else {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter("Yetki Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişinin ortak üyeliği başarıyla alındı.`)
        await db.delete(`ortak_${üye.id}`)
        message.channel.send({embed: başarılıembed})
        client.guilds.get(message.guild.id).channels.get(kanal).send(başarılıembed)
      }
    }
    else {
      hataembed.description = "Bu üye zaten ortağım değil.";
      message.channel.send({embed: hataembed})
    }
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ortaksil", "ortak-sil", "ortak-al"]
};

exports.help = {
  name: 'ortak-sil',
  description: '',
  usage: ''
};