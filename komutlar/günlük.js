const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async(client, message, args) => {
    var randomChars = `0123456789`;
    var pwLen = 3;
    var randPw = Array(pwLen).fill(randomChars).map(function(x) { 
    return x[Math.floor(Math.random() * x.length)] }).join('');
    db.add(`coin_${message.author.id}`, randPw)
    let embed = new Discord.MessageEmbed()
    .setTitle('Başarılı!')
    .setColor('GREEN')
    .setDescription(`Günlük ödülünü başarıyla aldın! Günlük ödülden kazandığın coin: ${randPw}`)
    .setFooter(client.user.username)
    message.channel.send(embed)
}
exports.conf = {
    aliases: ['daily','günlüködül']
}
exports.help = {
    name: 'günlük',
    cooldown: 86400
}