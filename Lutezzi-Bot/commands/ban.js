module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Ban yetkiniz yok.**');
            let Buser = message.mentions.members.first();
            if(!Buser) return message.reply('**Bir kullanıcıyı etiketleyiniz!**')
            if(!Buser.bannable) return message.reply('**Bu kişiyi banlamaya yetkim yetmiyor.**')
            Buser.ban()
            message.channel.send(`${Buser} **User has been banned.**`)
    }
}