const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async function(client, message, args) {
  const dbz = await db.fetch(`sahibim_${message.author.id}`)
  if(!dbz) return message.reply("Hey , Bu Komutu Sadece Sahiplerim Kullana Bilir!")
  else {

  if(!args[0]) return message.channel.send('Bakım modunu açmak için c/bakım aç')
  
  if(args[0] === 'aç') {
    if(db.fetch(`bakim`)) return message.channel.send('Bakım modu zaten1 Kısımda açık!')
    message.channel.send('Bakım Modu 1. Kısımda açıldı!')
    db.set(`bakim`, 'acik')
  }
  if(args[0] === 'kapat'){
    if(!db.fetch(`bakim`)) return message.channel.send('Bakım modu zaten kapalı.')
    message.channel.send('Bakım modu kapatıldı.')
    db.delete(`bakim`)
  }
  
}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'bakım'
}