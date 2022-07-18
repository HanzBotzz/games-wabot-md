let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085779150501]
│ • Tri [089512630591]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://youtube.com/channel/UCs8sFcihqsye35hnom6CEXQ
│ • https://vt.tiktok.com/ZSdyjBq77/
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
