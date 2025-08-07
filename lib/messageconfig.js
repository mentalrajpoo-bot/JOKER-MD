const JOKERxLEGENDMDInfo = {
  contextInfo: {
    forwardingScore: 999, // Max forwarding score
    isForwarded: true,
    externalAdReply: {
      title: "JOKER-MD ULTRA PRO",
      body: "Official WhatsApp Bot",
      thumbnailUrl: "https://i.imgur.com/joker-md-logo.jpg", // Your logo URL
      mediaType: 1,
      mediaUrl: "https://github.com/Joker-MD",
      sourceUrl: "https://github.com/Joker-MD",
      showAdAttribution: true
    },
    forwardedNewsletterMessageInfo: {
      newsletterJid: "joker-md-official@newsletter", // Custom newsletter ID
      newsletterName: "JOKER-MD Official",
      serverMessageId: -1
    }
  }
};

// Premium features metadata
const premiumFeatures = {
  version: "2.0",
  developer: "JOKER-MD",
  releaseDate: "2024-06-01",
  special: "ULTRA PRO MAX EDITION"
};

module.exports = {
  channelInfo: JOKERxLEGENDMDInfo,
  premiumData: premiumFeatures,
  botTag: () => {
    return `\n\n*🔰 JOKER-MD BOT • ULTRA PRO MAX*`
  }
};
