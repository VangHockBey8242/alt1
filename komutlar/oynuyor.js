const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '547073075317833738')   if(message.author.id !== '749663134633033728') return message.reply('Bu Komutu Sadece Geliştiricilerim Kullana Bilir! ');
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oynuyor',
  description: 'Botun pingini gösterir.',
  usage: 'oynuyor'
};