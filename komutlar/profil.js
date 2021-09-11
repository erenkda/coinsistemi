const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')

exports.run = async(client, message, args) => {
    ///
///
    ///rozetler
    let kisi = message.author
    let mention = message.author;
    ///
    let oyunlar = [];
    mention.presence.activities.forEach(slm => {
    if(slm.type === 'CUSTOM_STATUS') {
    oyunlar.push(`${slm.emoji ? slm.emoji : ''} ${slm.state}`);
    } else {
    oyunlar.push(`**${slm.name}** ${slm.type.replace('PLAYING', 'oynuyor').replace('STREAMING', 'yayınlıyor').replace('LISTENING', 'dinliyor').replace('WATCHING', 'izliyor')}`)
    }});
    //
    let mentionMember = message.guild.members.cache.get(mention.id);
    let rozetler = false;
    if(mention.flags.toArray().length <= 0) {
    rozetler = false;
    } else {
    rozetler = true;
    };
    
    let mentionFlags = mention.flags.toArray().join(' | ')
    .replace('HOUSE_BRAVERY', 'Bravery')  
    .replace('HOUSE_BRILLIANCE', 'Brilliance')
    .replace('HOUSE_BALANCE', 'Balance')
    .replace('VERIFIED_DEVELOPER', '1. Dönemde Doğrulanmış Bot Geliştiricisi')
    .replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
    .replace('PARTNERED_SERVER_OWNER', 'Discord Partner')
    .replace('HYPESQUAD_EVENTS', 'HypeSquad Events')
    .replace('BUGHUNTER_LEVEL_1', 'Bug Avcısı 1. Lvl')
    .replace('EARLY_SUPPORTER', 'Erken Destekçi')
    .replace('TEAM_USER', 'Takım Üyesi')
    .replace('SYSTEM', 'Sistem')
    .replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
    .replace('VERIFIED_BOT', 'Onaylı Bot');
    let sa;
    if(mention.bot) {
    sa = 'Bilinmiyor.'
    }
    ///
    const hakkinda = db.fetch(`hakkinda_${message.author.id}`)
    const aktivite = oyunlar.join('\n') ? oyunlar.join('\n') : 'Hiç yok.'
    const embed = new Discord.MessageEmbed()
    .setTitle('Profil')
    .setColor('GREEN')
    .setDescription(`Kullanıcı Adı : ${kisi.username}
    Hakkında: ${hakkinda}
    Discorda Katılım Tarihi: ${moment(mention.createdAt).format('D MMMM YYYY')}
    Aktivite: ${aktivite}
    Rozetler: ${rozetler ? mentionFlags : 'Hiç yok.'}`)
    message.channel.send(embed)
}
exports.conf = {
    aliases: ['profile']
}
exports.help = {
    name: 'profil'
}