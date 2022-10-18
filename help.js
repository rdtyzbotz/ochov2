const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
let hitbot = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

exports.menuall = (sender, prefix, pushname, ucapanWaktu, tanggal, jam, isOwner) => {
return `*OTHERS MENU*
あ ${prefix}simi
あ ${prefix}getpp
あ ${prefix}rules
あ ${prefix}stats
あ ${prefix}listgc
あ ${prefix}listpc
あ ${prefix}owner
あ ${prefix}script
あ ${prefix}server
あ ${prefix}runtime
あ ${prefix}dashboard

*ENCRYPT MENU*
あ ${prefix}enc
あ ${prefix}obfus
あ ${prefix}encrypt
あ ${prefix}obfuscator

*STORE MENU*
あ ${prefix}list
あ ${prefix}addlist
あ ${prefix}dellist
あ ${prefix}update

*KALKULATOR*
あ ${prefix}kali
あ ${prefix}bagi
あ ${prefix}kurang
あ ${prefix}tambah

*TOPUP OTOMATIS*
あ ${prefix}ovo
あ ${prefix}dana
あ ${prefix}gopay
あ ${prefix}shoope
あ ${prefix}topupff
あ ${prefix}topupml

*PROSES/DONE*
あ proses < reply chat >
あ done < reply chat >
あ ${prefix}setproses
あ ${prefix}changeproses
あ ${prefix}delsetproses
あ ${prefix}setdone
あ ${prefix}changedone
あ ${prefix}delsetdone

*WELCOME/LEFT*
あ ${prefix}getleft
あ ${prefix}setleft
あ ${prefix}delleft
あ ${prefix}changeleft
あ ${prefix}setwelcome
あ ${prefix}delwelcome
あ ${prefix}getwelcome
あ ${prefix}changewelcome

*OPEN/CLOSE*
あ ${prefix}setclose
あ ${prefix}setopen
あ ${prefix}delclose
あ ${prefix}delopen
あ ${prefix}getopen
あ ${prefix}getclose

*SEWA ADD/DEL*
あ ${prefix}delsewa
あ ${prefix}addsewa
あ ${prefix}listsewa

*GROUP SETTING*
あ ${prefix}left on
あ ${prefix}left off
あ ${prefix}antilink on
あ ${prefix}antilink off
あ ${prefix}antiwame on
あ ${prefix}antiwame off
あ ${prefix}welcome on
あ ${prefix}welcome off

*GROUP MENU*
あ ${prefix}add
あ ${prefix}kick
あ ${prefix}linkgc
あ ${prefix}infogrup
あ ${prefix}promote
あ ${prefix}demote
あ ${prefix}hidetag
あ ${prefix}tagall
あ ${prefix}open
あ ${prefix}close
あ ${prefix}ceksewa
あ ${prefix}setppgc
あ ${prefix}setppgc 'panjang'
あ ${prefix}setnamegc
あ ${prefix}setdesc
あ ${prefix}revoke

*OWNER MENU*
あ ${prefix}bc
あ ${prefix}join
あ ${prefix}left
あ ${prefix}self
あ ${prefix}public
あ ${prefix}resetlist
あ ${prefix}sendsesi
あ ${prefix}creategc
あ ${prefix}setppbot
あ ${prefix}setthumb
あ ${prefix}broadcast
あ ${prefix}block 628xxx
あ ${prefix}unblock 628xxx
あ ${prefix}setppbot 'panjang'

*CONVERT/TOOLS*
あ ${prefix}tts
あ ${prefix}ttp
あ ${prefix}attp
あ ${prefix}font
あ ${prefix}font2
あ ${prefix}isgd
あ ${prefix}tourl
あ ${prefix}cuttly
あ ${prefix}tinyurl
あ ${prefix}nulis
あ ${prefix}ssweb
あ ${prefix}shorturl
あ ${prefix}sticker
あ ${prefix}toimg
あ ${prefix}emojimix
あ ${prefix}emojimix2
あ ${prefix}base32
あ ${prefix}base64
あ ${prefix}debase32
あ ${prefix}debase64

*DOWNLOADER*
あ ${prefix}play
あ ${prefix}musik
あ ${prefix}tiktok
あ ${prefix}ytmp3
あ ${prefix}ytmp4
あ ${prefix}gitclone
あ ${prefix}mediafire
あ ${prefix}sosmed
あ ${prefix}facebook
あ ${prefix}soundcloud
 
*SEARCHING*
あ ${prefix}nickff
あ ${prefix}nickml
あ ${prefix}stalkgithub
あ ${prefix}nicksupersus

*INFORMATION*
あ ${prefix}lirik
あ ${prefix}cerpen
あ ${prefix}google
あ ${prefix}gimage
あ ${prefix}styletext
あ ${prefix}pinterest
あ ${prefix}wikimedia
あ ${prefix}infogempa

*ANONYMOUS*
あ ${prefix}start
あ ${prefix}stop
あ ${prefix}next
あ ${prefix}sendprofil
あ ${prefix}anonymous

*IMAGE EDITOR*
あ ${prefix}tourl
あ ${prefix}hitler
あ ${prefix}yasin
あ ${prefix}putin
あ ${prefix}resize
あ ${prefix}police
あ ${prefix}smeme
あ ${prefix}petimati
あ ${prefix}discordblue
あ ${prefix}discordblack

*EXECUTE*
あ $
あ >
あ x`
}

exports.textprem  = (sender, prefix) => {
return `Jika kamu ingin menjadi Member Premium, kamu cukup membayar 
Rp3.000 untuk 1 Minggu
Rp5.000 untuk 1 Bulan 
dan jika ingin menjadi Member Premium Permanen kamu hanya membayar Rp50.000. Jika berminat silahkan chat Owner Bot, ketik ${prefix}owner

*Payment :* 
Dana/Gopay/Qris`
}

exports.textdonasi = (sender, prefix) => {
return `*DONASI BOT*

*E-walet Monay :*
➭ Dana : 081241056195
➭ Gopay : https://telegra.ph/file/038987ce794ca5357afa8.jpg
➭ Pulsa : 085730794089
    
*Qris All Payment :*
https://telegra.ph/file/d9393bac1bb5d46696232.jpg`
}

*TERIMA KASIH ORANG BAIK🥰*
