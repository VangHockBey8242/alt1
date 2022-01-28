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
    .setFooter(`Crossfire Ortak Sistemi`)
    .setTimestamp()
  
  // KOD //
  if(message.author.id != ayarlar.sahip) {
    hataembed.description = "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz.";
    message.channel.send({embed: hataembed})
  }
  else if(!üye) {
    hataembed.description = `Lütfen Ortak yapmak istediğiniz bir üyeyi etiketleyin.\n\nÖrnek: ${ayarlar.prefix}Ortak-yap @kullanıcı`;
    message.channel.send({embed: hataembed})
  }
  else {
    const üyedb = await db.fetch(`ortak_${üye.id}`)
    const kanal = await db.fetch("logKanal")
    if(!üyedb) {
      if(!kanal) {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter("Yetki Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişi başarıyla sahibim olarak ayarlandı.`)
        await db.set(`ortak_${üye.id}`, "ortak")
        message.channel.send({embed: başarılıembed})
      }
      else {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter(" Yetki Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişi başarıyla Ortak olarak ayarlandı.`)
        await db.set(`ortak_${üye.id}`, "ortak")
        message.channel.send({embed: başarılıembed})
        client.guilds.get(message.guild.id).channels.get(kanal).send(başarılıembed)
      }
    }
    else {
      hataembed.description = "Bu üye zaten benim Ortağım.";
      message.channel.send({embed: hataembed})
    }
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ortakyap", "ortak-ekle", "ortakekle","ortak-ver"]
};

exports.help = {
  name: 'ortak-yap',
  description: '',
  usage: ''
};