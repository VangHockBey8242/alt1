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
    .setFooter(`🔥Crossfire Yonetici Asistan Sistemi`)
    .setTimestamp()
  
  // KOD //
  if(message.author.id != ayarlar.sahip) {
    hataembed.description = "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz.";
    message.channel.send({embed: hataembed})
  }
  else if(!üye) {
    hataembed.description = `Lütfen yonetici asistanı yapmak istediğiniz bir üyeyi etiketleyin.\n\nÖrnek: ${ayarlar.prefix}asistan-yap @kullanıcı`;
    message.channel.send({embed: hataembed})
  }
  else {
    const üyedb = await db.fetch(`asistanı_${üye.id}`)
    const kanal = await db.fetch("logKanal")
    if(!üyedb) {
      if(!kanal) {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter("Yonetici Asistan Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişi başarıyla yonetici asistanı olarak ayarlandı.`)
        await db.set(`asistan_${üye.id}`, "asistan")
        message.channel.send({embed: başarılıembed})
      }
      else {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter(" Asistan Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişi başarıyla yonetici asistanı olarak ayarlandı.`)
        await db.set(`asistan_${üye.id}`, "asistan")
        message.channel.send({embed: başarılıembed})
        client.guilds.get(message.guild.id).channels.get(kanal).send(başarılıembed)
      }
    }
    else {
      hataembed.description = "Bu üye zaten bir yonetici asistanı.";
      message.channel.send({embed: hataembed})
    }
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["asistanyap", "asistan-ekle", "asistan-yap"]
};

exports.help = {
  name: 'asistan-yap',
  description: '',
  usage: ''
};