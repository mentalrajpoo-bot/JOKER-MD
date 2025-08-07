const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JOKER X LEGEND-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZiS2lub0hyQmxCNkZWWDRwMXNRWUttNGt0M3o4MTdTTDA3QzkyWnIybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdPZUtjZm1KYW5yMDlHdllwSVNML2RzbmxiUW9Xbm5hSlF5d1dSc1NoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUFZyelovV2pyNVVRZlpCRENSS1RQZlN2alZhaE9pa3ZsU05XUlBrZ2xvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4YjgyQ3dNME54a1NEYTlzTjJneTh2Zzlyb0djcHBadTEwSlUzWlNzNkRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJbzR6SXFaV2Y0S1JUZk5XRnc2MXd1UVJJU3d2NytqSGNkUkl3cStLR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZiWFRKTzk5SGNDUWVIMmdGeFE1ZmRRK1JnOWl0dUFmUEZOZTR5UlBYMTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEl4dGYrbzBlei9uN0dZUmNtV0RtZWpiUEtHT3dRYUIxVVJXdllOZ0pXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU241dlBlME5ZMjhKSDJYM0hVRzZHUkdjbkt4b3ZoaERSUWpoRzhTckNFOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJCdTNxdzVtSnZzSnVxQVpNU3VxR21Ra0N2MkZlWXdIVWlGMXRYcVVYUWo3T05RWE5GSW5OeHlTdnpDZnpITmlyK3VxZUptN0FGUDdVU0ovSDZnV2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJKSCtPcjJ1N0JpSHhPSE8reFlVVDdvemtGcWVWanpaWGJoSGVKQVZwa3JjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI4MDM1NTY2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QjMyNEY0RUQyN0M5REUzNDhCQTdBRUI5RkIwRDEzMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NDQxNTc0fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTUzdBQVFKTCIsIm1lIjp7ImlkIjoiOTIzMjgwMzU1NjYwOjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1FTlRBTCBSQUpQT09UIiwibGlkIjoiMzgzMjQ0Nzk3ODMxMTM6MTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPQ3NyTFVFRU4vT3lzUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ0UXVHWDQwTkxRTDZMWkFpZXBnT1krakZUdysxTTBHbjBoUmxmQ1JEd1V3PSIsImFjY291bnRTaWduYXR1cmUiOiJzMzJtTE8rZE9MeENDQnlIejh0OWdHT2YzVUpOZnpTdmdVS0xvb242UnNUNDd2NFJEeFhSNlRkNERhWFBXY05Ldkp6TWZZMndpeU5hTHVucXlGT1BEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSFpFd0V4MmxXQW4zVzRsRnR2ZU9wTTdUZWFTQWRmeHJUQ3Q3bEI0ZG5GRFlFTFErajc4U1RTandmMDNVNmRzVTA0a0t4Y1QwMEEvWlpjKzZSUzNhalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyODAzNTU2NjA6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlVMaGwrTkRTMEMraTJRSW5xWURtUG94VThQdFROQnA5SVVaWHdrUThGTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NDQxNTcwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxoUSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY JOKER-X-LEGEND_MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Your-Own-Bot",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "JOKER-X-LEGEND_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923417337355",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*jokerMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ jokerMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
