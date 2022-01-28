const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  let aktifkanallar = []
  message.guild.members.forEach(m => {
  if (db.has(`geciciKanalK_${m.id}`) == true) {
    aktifkanallar.push(`<@${m.id}>`)
  }
  })
  
  const embed = new Discord.RichEmbed()
  .setColor("2F3136")
  .setAuthor(client.user.tag, client.user.avatarURL)
  .setTitle(message.guild.name + "Adlı Sunucudaki Geçici Odalar")
  .setDescription(`${aktifkanallar.join('\n')}`)
  .setTimestamp()
  .setFooter(client.user.tag, message.guild.iconURL)
  message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçiciodalar'],
  permLevel: 0
};

module.exports.help = {
  name: 'geçici-odalar',
  description: '',
  usage: '',

};
///// 
const discord = require('discord.js'),
request = require("request");
const bd = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.`);
  message.guild.createChannel("Geçici Sohbet", "category").then(kategori => {
    message.guild.createChannel("Sohbet Oluştur", "voice").then(ses => {
    ses.setParent(kategori.id)
    db.set(`geciciKategori_${message.guild.id}`, kategori.id)
    db.set(`geciciKanal_${message.guild.id}`, ses.id)
  })
  })
  request({
    url: `https://discordapp.com/api/v7/channels/${db.fetch(`geciciKanal_${message.guild.id}`)}`,
    method: "PATCH",
    json: {
        user_limit: "3"
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
  message.channel.send("Başarıyla geçici oda sistemi aktif edildi! " + client.emojis.get(client.emoji.ytik))
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["geçiciodakurulum"],
    permLevel: 0,
    kategori: 'yetkili'
}

exports.help = {
    name: 'geçici-oda-kurulum',
    description: '',
    usage: '',
      'kategori':'Geçici Oda Sistemi'

}