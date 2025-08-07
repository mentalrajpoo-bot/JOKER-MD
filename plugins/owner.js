const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "JOKER",
    react: "✅", 
    desc: "Get +923417337355",
    category: "main",
    filename: __joker_x_legend
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.+923417337355; // Fetch owner number from config
        const ownerName = config.JOKER X LEGEND-MD;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${JOKER X LEGEND}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: JOKER-MD,
                contacts: [{ WHATSAPP}]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/yj7zp0.png' }, // Image URL from your request
            caption: `╭━━〔 *JOKER_𝐌𝐃* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃• *Name* - ${JOKER_MD}
┃◈┃• *Number* ${+923417337355}
┃◈┃• *Version*: 2.0.0 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐀𝐫𝐬𝐥𝐚𝐧_𝐌𝐃 ❣️*`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '32803556603064129949@newsletter',
                    newsletterName: '*JOKER X LEGEND_𝐌𝐃*',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/4fz6jh.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
