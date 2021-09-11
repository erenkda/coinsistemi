const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async(client, message, args) => {
    var randomCharsElmas = `00000123456789`;
    var pwLenElmas = 1;
    var randPwElmas = Array(pwLenElmas).fill(randomCharsElmas).map(function(x) { 
    return x[Math.floor(Math.random() * x.length)] }).join('');
    var randomChars = `000123456789`;
    var pwLen = 2;
    var randPw = Array(pwLen).fill(randomChars).map(function(x) { 
    return x[Math.floor(Math.random() * x.length)] }).join('');
    db.add(`madencoin_${message.author.id}`, randPw)
    db.add(`elmas_${message.author.id}`, randPwElmas)
    const kaziembed = new Discord.MessageEmbed()
    .setDescription(`🗳 Tebrikler <@!${message.author.id}>, kazı yaparken ${randPwElmas}💎 ${randPw} 🥇 buldun!`)
    message.channel.send(kaziembed)
}
exports.conf = {
    aliases: ['mine','kaz']
}
exports.help = {
    name: 'kazı',
    cooldown: 60
}