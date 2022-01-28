const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async function(client, message, args, chimp) {
  const dbz = await db.fetch(`sahibim_${message.author.id}`)
  if(!dbz) return message.reply("Hey , Bu Komutu Sadece Sahiplerim Kullana Bilir!")
  else {




if(!chimp[0]) return message.reply("Bir kullanıcı id'si girmelisin.");

const user = await client.fetchUser(chimp[0]).catch(err => {
return message.reply('Bu idye sahip bir kullanıcı bulamadım.')});

if(user) {

  if(db.fetch(user.id)) {
  db.delete(user.id);
  return message.channel.send(`\`${user.tag}\` isimli kullanıcı zaten karalistedeydi, karalisteden çıkarıldı.\nArtık botun komutlarını kullanabilecek.`);
  }
  db.set(user.id, true);
  return message.channel.send(`\`${user.tag}\` isimli kullanıcı başarıyla karalisteye alındı.\n\`${user.username}\`'nin taç sahibi olduğu tüm sunucularda benim komutlarımı kimse kullanamayacak.\nTaç sahibi değil ise, \`${user.username}\` yine komutları kullanamayacak.`);

};




  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'karaliste'
}