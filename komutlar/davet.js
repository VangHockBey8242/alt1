const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} DAVET SİSTEMİ `)
        .setDescription(`📥**Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=794279341492142080&scope=bot&permissions=2146958847) \n🔶**Destek Sunucusu İçin** [TIKLA](https://discord.gg/J8GkUmpNVh)\n**🌐 Web Sitem için **[TIKLA](http://crossfireweb.ezyro.com/)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    .setImage(``)  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['panel'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};