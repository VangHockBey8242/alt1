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
    .setFooter(`Razy Özel Üye Sistemi`)
    .setTimestamp()
  
  // KOD //
  if(message.author.id != ayarlar.sahip) {
    hataembed.description = "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz.";
    message.channel.send({embed: hataembed})
  }
  else if(!üye) {
    hataembed.description = `Lütfen özel üyesini almak istediğiniz bir üyeyi etiketleyin.\n\nÖrnek: ${ayarlar.prefix}ozel-sil @kullanıcı`;
    message.channel.send({embed: hataembed})
  }
  else {
    const üyedb = await db.fetch(`ozel_${üye.id}`);
    const kanal = await db.fetch(`logKanal`);
    if(üyedb) {
      if(!kanal) {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter("🔥Crossfire Özel Üye Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişinin özel üyeliği başarıyla alındı.`)
        await db.delete(`ozel_${üye.id}`)
        message.channel.send({embed: başarılıembed})
      }
      else {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter("🔥Crossfire Özel Üye Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişinin özel üyeliği başarıyla alındı.`)
        await db.delete(`ozel_${üye.id}`)
        message.channel.send({embed: başarılıembed})
        client.guilds.get(message.guild.id).channels.get(kanal).send(başarılıembed)
      }
    }
    else {
      hataembed.description = "Bu üye zaten bir özel üye değil.";
      message.channel.send({embed: hataembed})
    }
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["özelsil", "özelal", "özel-sil"]
};

exports.help = {
  name: 'özel-sil',
  description: '',
  usage: ''
};