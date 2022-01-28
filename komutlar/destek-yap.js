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
    .setFooter(`🔥Crossfire Ekibi Sistemi`)
    .setTimestamp()
  
  // KOD //
  if(message.author.id != ayarlar.sahip) {
    hataembed.description = "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsiniz.";
    message.channel.send({embed: hataembed})
  }
  else if(!üye) {
    hataembed.description = `Lütfen destek ekibi yapmak istediğiniz bir üyeyi etiketleyin.\n\nÖrnek: ${ayarlar.prefix}destek-yap @kullanıcı`;
    message.channel.send({embed: hataembed})
  }
  else {
    const üyedb = await db.fetch(`destek_${üye.id}`)
    const kanal = await db.fetch("logKanal")
    if(!üyedb) {
      if(!kanal) {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter("Destek Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişi başarıyla destek olarak ayarlandı.`)
        await db.set(`destek_${üye.id}`, "destek")
        message.channel.send({embed: başarılıembed})
      }
      else {
        const başarılıembed = new Discord.RichEmbed()
          .setTitle("Başarılı")
          .setColor("GREEN")
          .setFooter(" Destek Sistemi")
          .setTimestamp()
          .setDescription(`${üye} adlı kişi başarıyla destek ekibi olarak ayarlandı.`)
        await db.set(`destek_${üye.id}`, "destek")
        message.channel.send({embed: başarılıembed})
        client.guilds.get(message.guild.id).channels.get(kanal).send(başarılıembed)
      }
    }
    else {
      hataembed.description = "Bu üye zaten bir destek ekibi üyesi.";
      message.channel.send({embed: hataembed})
    }
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["destekyap", "destek-ekle", "destekekle"]
};

exports.help = {
  name: 'destek-yap',
  description: '',
  usage: ''
};