const Discord = require('discord.js')
const db = require('discord.js')

exports.run = async(bot, message, args) => {
    message.delete()
    const soru = message.content.split(' ').slice(0)
    const odul = message.content.split(' ').slice(1)
    if(!args[0]) {
        message.reply('Soru Belirt.')
    }
    if(!args[1]) {
        message.reply('Ödül belirt / Örnek: 500 / Yazılan her sayı 1 Etkinlik Coindir.')
    }
    if(args[0], args[1]) {
    const embed = new Discord.MessageEmbed()
    .setTitle('Etkinlik Başladı!')
    .addField(`Soru:`, `${args[0].replaceAll('-', ' ')}`)
    .addField(`Ödül:`, `${args[1].replace('-', ' ')} Etkinlik Coin`)
    .setFooter('Etkinlik başlatıldı!')
    message.channel.send(embed)
    }
}
exports.conf = {
    aliases: ['etkinlikbaslat','etkinlik']
}
exports.help = {
    name: 'etkinlikyap',
    cooldown: 86400
}
