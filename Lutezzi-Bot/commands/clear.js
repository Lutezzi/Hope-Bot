module.exports = {
    name: 'clear',
    description: "Clear messages in the chat.",
    execute(message, args) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**Mesajları silme yetkiniz yok!**') 
        message.delete()   

        if(!args[0]) return message.channel.send('**Lütfen 1 ila 100 arası bir sayı giriniz.**')
        if(args[0] > 100) return message.channel.send('**100 sayısından büyük bir değer girmeye çalıştınız.**')
        if(isNaN(args[0])) return message.channel.send('**Lütfen geçerli bir sayı giriniz.**')
        message.channel.bulkDelete(args[0]);
        message.channel.send(`**${args[0]} Adet mesaj silindi.** :rocket:`).then(message => message.delete({timeout: 4000}));
    }
}
