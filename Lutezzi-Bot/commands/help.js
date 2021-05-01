module.exports = {
    name: 'help',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Komutlar')
        .setDescription('Tüm komutları burada görebilirsiniz.')
        .setThumbnail('https://i.imgur.com/HxzXeJl.jpg?1')
        .addFields(
            {name: '``.play``', value: '**Sonrasında link veya bir müzik ismi girerseniz çalar.**'},
            {name: '``.leave``', value: '**Çalan şarkıyı sonlandırır.**'},
            {name: '``.clear``', value: '**Sohbet kanallarındaki mesajları kolayca temizlemenizi sağlar.**'},
            {name: '``.ban``', value: '**Bir kullanıcıyı banlamanızı sağlar.**'},
            {name: '``.kick``', value: '**Bir kullanıcıyı kicklemenizi sağlar.**'},
        )
        .setTimestamp()
        .setFooter('made by Lutezzi 😈')
        message.channel.send(newEmbed);
    }
}