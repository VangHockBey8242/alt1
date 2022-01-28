const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let rol = message.mentions.roles.first();
  if (!rol) return message.reply('Otorol için bir rol etiketlemelisiniz!')
  
  db.set(`otoR_${message.guild.id}`, rol.id)
  
  const emb = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.displayAvatarURL)
  .setDescription(`Otorol Rol'ü başarıyla ${rol} olarak ayarlandı!`)
.setFooter(`c/otorol-kanal Ayarlamasınız Çalışmaz`)
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send(emb)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otorol-ayarla','oto-rol-ayarla'],
  permLevel: 2,
  kategori: "ayar"
}
exports.help = {
  name: 'otorol',
  description: 'Sunucuya özel otorol ayarlar.',
  usage: 'c/otorol'
}