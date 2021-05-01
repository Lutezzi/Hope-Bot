module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('**Kick yetkiniz yok.**');
            let Kuser = message.mentions.members.first();
            if(!Kuser) return message.reply('**Bir kullanıcıyı etiketleyiniz!**')
            if(!Kuser.kickable) return message.reply('**Bu kişiyi kicklemeye yetkim yetmiyor.**')
            Kuser.kick()
            message.channel.send(`${Kuser} **User has been kicked.**`)
    }
}