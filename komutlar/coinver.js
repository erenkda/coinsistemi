const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async(client, message, args) => {


var yetkililer = ["852785674876092426", "2.yetkili id"]
if (!yetkililer.includes(message.author.id)) return message.reply("Yetkili değilsin. Yetkililer: \n"+yetkililer.map(x => `<@!${x}>`).join(', '))
if (!args[0]) return message.reply("Kullanıcıyı belirtiniz. Kullanım: !coinver @Kullanıcı <miktar>") 
var kullanici = message.mentions.users.first() || client.users.cache.get(args[0])
if (args[0] && !kullanici) return message.reply("Kullanıcı bulunamadı. Kullanım: !coinver @Kullanıcı <miktar>")
if (kullanici) {
    require('quick.db').add(`coin_${message.author.id}`, Number(args[1]))
    const embed = new Discord.MessageEmbed()
    .setTitle('Başarılı!')
    .setColor('GREEN')
    .setDescription(`${kullanici} adlı kişiye ${args[1]} coin eklendi!`)
    message.channel.send(embed)
   }
}
exports.conf = {
    aliases: []
}
exports.help = {
    name: 'coinver'
}