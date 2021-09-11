const Discord = require('discord.js')
const db = require('quick.db')


exports.run = async(client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle('Yardım Menüsü')
.setDescription(`
!cüzdan
!günlük
!hakkındaayarla
!kazı
!profil`)
message.channel.send(embed)
}
exports.conf = {
    aliases: ['help']
}
exports.help = {
    name: 'yardım'
}