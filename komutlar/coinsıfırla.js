const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async(client, message, args) => {
    var kullanici = message.mentions.users.first() || client.users.cache.get(args[0])
    if (!kullanici) {
        message.reply('Etiketlediğiniz kişi bulunamadı.')
    }
    var coin = db.fetch(`coin_${message.author.id}`) || 0
    if (kullanici) {
    db.set(`coin_${message.author.id}`, 0)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Başarılı!`)
    .setColor(`GREEN`)
    .setDescription(`Başarılı! ${kullanici} adlı kişinin coini artık ${coin}!`)
    .setFooter(client.user.username)
    message.channel.send(embed)
    }
}
exports.conf = {
    aliases: ['coinsıfırla']
}
exports.help = {
    name: 'coinsifirla'
}