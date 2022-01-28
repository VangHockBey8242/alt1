exports.run = async (client, message, level) => {
    
    let items = [
    
      "Ak-47",
      "P90",
      "Deagle",
      "Tec-9",
      "M4A4",
      "Five-SeveN",
      "Awp",
      "M4A1-S",
      "Glock-18",
      "SSG 08",
      "P250",
      "Cz75",
      "Famas",
      "Mac-10",
      "Mag-7",
      "Mp7",
      "Mp9",
      "P2000",
      "R8 Revolver",
      "Ump-45",
      "Usp-S",
      "Çift Baretta",
      "Negev",
      "M249"
    
    ];
  
    let item = items[Math.floor(Math.random() * items.length )];

    message.channel.send(`**${message.author}** Kasa Açılıyor...`).then(async msg => {
        setTimeout(() => {
            msg.edit('<a:renklibicak:760787860713504768><a:pembesilah:760786438073352202><a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202><a:pembesilah:760786438073352202><a:renklibicak:760787860713504768>');
        }, 1000);
        setTimeout(() => {
            msg.edit('<a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202><a:renklibicak:760787860713504768><a:renklibicak:760787860713504768>');
        }, 1500);
        setTimeout(() => {
            msg.edit('<a:pembesilah:760786438073352202><a:pembesilah:760786438073352202><a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202>|<a:renklibicak:760787860713504768><a:renklibicak:760787860713504768><a:pembesilah:760786438073352202>');
        }, 2000);
        setTimeout(() => {
            msg.edit('<a:pembesilah:760786438073352202><a:pembesilah:760786438073352202><a:pembesilah:760786438073352202>|<a:renklibicak:760787860713504768>|<a:renklibicak:760787860713504768><a:pembesilah:760786438073352202><a:pembesilah:760786438073352202>');
        }, 2000);
        setTimeout(() => {
            msg.edit('<a:pembesilah:760786438073352202><a:pembesilah:760786438073352202><a:renklibicak:760787860713504768>|<a:renklibicak:760787860713504768>|<a:pembesilah:760786438073352202><a:pembesilah:760786438073352202><a:pembesilah:760786438073352202>');
        }, 2500);
        setTimeout(() => {
            msg.edit('<a:pembesilah:760786438073352202><a:renklibicak:760787860713504768><a:renklibicak:760787860713504768>|<a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202><a:pembesilah:760786438073352202><a:pembesilah:760786438073352202>');
        }, 3000);
        setTimeout(() => {
            msg.edit('<a:renklibicak:760787860713504768><a:renklibicak:760787860713504768><a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202><a:pembesilah:760786438073352202><a:pembesilah:760786438073352202>');
        }, 3500);
        setTimeout(() => {
            msg.edit('<a:renklibicak:760787860713504768><a:pembesilah:760786438073352202><a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202>|<a:pembesilah:760786438073352202><a:pembesilah:760786438073352202><a:renklibicak:760787860713504768>');
        }, 4000);
       setTimeout(() => {
            msg.edit(`<a:yan:756079527091765248> **${item}** Çıktı!`).then(m =>{
            m.delete(5000)});
        }, 5000);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["csgo-kasa"],
    permLevel: 0
};

exports.help = {
    name: "kasa",
    description: "CS:GO kasası açar",
    usage: "kasa aç"
};