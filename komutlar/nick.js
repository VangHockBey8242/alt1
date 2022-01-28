const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 if(!message.member.roles.has("792989929923018759")) return message.channel.send(`**\`@Kurucu\` Rolüne Sahip Olmadığın İçin Bu Komutu Kullanamazsın!**`).then(msg => msg.delete(8000));
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" | ")
  let yas = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir üye etiketlemelisin kanka')
  if (!isim) return message.channel.send('Bir isim yazmalısın kanka')
  member.setNickname(`✯ ${isim}`)//// ✯ İSminin Başına Ekler yıldızı silip tagınızı yada başka bir sembol ekleyebilirsiniz!
  message.channel.send(`${member.user} **__Kullanıcının İsmi__** <@${message.author.id}> **__Tarafından__** \`✯ ${isim}\` __**Olarak Değiştirildi.**__`).then(m =>m.delete(5000))
var embed1 = new Discord.RichEmbed()// log kanalı yoksa burayı silin
  .setDescription(`${member.user} **__Kullanıcının İsmi__** <@${message.author.id}> **__Tarafından__** \`✯ ${isim}\` __**Olarak Değiştirildi.**__`)
  .setFooter("Developed by yousif")

       client.channels.get('Log Kanalı Varsa id Si Yoksa Üstteki Kısmı Silin!').send(embed1)
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['nick'],
  permLevel: 0
}
exports.help = {
  name: 'nick',
  description: "Birinin nickini değiştirir.",
  usage: 'isim <yeni nick>'
}