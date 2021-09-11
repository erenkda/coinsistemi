const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(bot, message, args) => {
    const hakkinda = db.fetch(`hakkinda_${message.author.id}`)
    var coin = db.fetch(`coin_${message.author.id}`) || 0
    var madencoin = db.fetch(`madencoin_${message.author.id}`) || 0
    var etkinlikcoin = db.fetch(`etkinlikcoin_${message.author.id}`) || 0
    var elmas = db.fetch(`elmas_${message.author.id}`) || 0
    const embed = new Discord.MessageEmbed()
    .setTitle(`Cüzdan Sahibi: ${message.author.username}`)
    .addField(`Cherry Coin:`, `${coin} 🥇`)
    .addField(`Maden Coin:`, `${madencoin} ⛏`)
    .addField(`Etkinlik Coin`, `${etkinlikcoin} 🥇`)
    .addField(`Elmas:`, `${elmas} 💎`)
    .setFooter(`Hakkında: ${hakkinda}`)
    .setColor('BLUE')
    message.channel.send(embed)
}
exports.conf = {
    aliases: ['coinim']
}
exports.help = {
    name: 'cüzdan'
}