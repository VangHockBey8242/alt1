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
    .setFooter(`🔥Crossfire Gold Sistemi`)
    .setTimestamp()
  
  // KOD //
  if(message.author.id != ayarlar.sahip) {
    hataembed.description = "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz.";
    message.channel.send({embed: hataembed})
  }
  else if(!üye) {
    hataembed.description = `Lütfen goldunu almak istediğiniz bir üyeyi etiketleyin.\n\nÖrnek: ${ayarlar.prefix}gold-sil @kullanıcı`;
    message.channel.send({embed: hataembed})
  }
  else {
    const üyedb = await db.fetch(`gold_${üye.id}`);
    const kanal = await db.fetch(`logKanal`);
    if(üyedb) {
      if(!kanal) {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter(" Gold Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişinin gold üyeliği başarıyla alındı.`)
        await db.delete(`gold_${üye.id}`)
        message.channel.send({embed: başarılıembed})
      }
      else {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter("Gold Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişinin gold üyeliği başarıyla alındı.`)
        await db.delete(`gold_${üye.id}`)
        message.channel.send({embed: başarılıembed})
        client.guilds.get(message.guild.id).channels.get(kanal).send(başarılıembed)
      }
    }
    else {
      hataembed.description = "Bu üye zaten bir gold değil.";
      message.channel.send({embed: hataembed})
    }
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["goldsil", "goldal", "gold-al"]
};

exports.help = {
  name: 'gold-sil',
  description: '',
  usage: ''
};