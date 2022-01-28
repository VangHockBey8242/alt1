const Discord = require('discord.js')
const moment = require('moment')
const ayarlar = require('../ayarlar.json')
require('moment-duration-format')

exports.run = async(client, message, args) => {
const Aktiflik = moment.duration(client.uptime).format(' D [Gün], H [Saat], m [Dakika], s [Saniye]')
const DarkCode = new Discord.RichEmbed()
.setAuthor(client.user.username+' - İstatistik',client.user.avatarURL)
.addField('**Genel Veriler**',`
Sunucu » \`${client.guilds.size}\`
Kullanıcı » \`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`
Gecikme » \`${client.ping}\`
Bellek » \`${(process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2)}\`
Aktiflik » \`${Aktiflik}\``)
.addField('**Genel Bilgiler**',`
Bot Sahibipleri » <@!${ayarlar.sahip}> & <@!${ayarlar.sahip2}>
Sahip Idler » \`${ayarlar.sahip} & ${ayarlar.sahip}\`
`)
.addField('**Sürümler**',`
Discord.JS » \`v12.5.1\`
Node.JS » \`${process.version}\``)
.addField('☼ Linkler',
`**[**__[Destek Sunucusu](https://discord.gg/J8GkUmpNVh)__**]**
**[**__[Botu Ekle](https://discord.com/oauth2/authorize?client_id=794279341492142080&scope=bot&permissions=805315704)__**]**
`)
.setThumbnail(client.user.avatarURL)
.setFooter(`© ${client.user.username}`,client.user.avatarURL)
message.channel.send(DarkCode)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['bot-durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik','bot-bilgi','botbilgi'], permLevel: 4,
    permLevel: 0
  }

  exports.help = {
    name: 'istatistik',
    description: 'Istatistiği Yollar',
    usage: 'istatistik'
  }