const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async(client, message, args) => {
    var args = args.slice(0).join(' ')
    const arguments = message.content.split(' ').slice(1);
    const hakkinda = db.fetch(`hakkinda_${message.author.id}`)
    if (!args[0]) {
        message.reply('Lütfen bir hakkında belirt.')
    }
    if(args[0]) {
    db.set(`hakkinda_${message.author.id}`, Number(args[0]))
    const embed = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setColor('GREEN')
    .setDescription(`Hakkında kısmın başarıyla **${args}** olarak ayarlandı!`)
    .setFooter('Görmek için: !profil')
    message.channel.send(embed)
    }
}
exports.conf = {
    aliases: ['hakkindayap','hakkındaayarla']
}
exports.help = {
    name: 'hakkindaayarla'
}