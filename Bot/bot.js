// Import Telegraf from the telegraf package
import { Telegraf } from 'telegraf';

// Replace the token with your actual bot token from Telegram BotFather
const TOKEN = "7099802909:AAGq92l11JGjiOkOwzouwQKQHUbAGJT7430";
const web_link = "https://lucent-begonia-e8a55e.netlify.app/";

// Initialize the bot with the provided token
const bot = new Telegraf(TOKEN);

// Start command handler that replies with a welcome message
bot.start((ctx) => ctx.reply("Welcome to the bot!", {
    reply_markup: {
        keyboard: [
            [{ text: 'web app', web_app: { url: web_link } }]
        ]
    }
}));

// Optional: Adding other command handlers for future use
bot.help((ctx) => ctx.reply("Send /start to start the bot."));

// Error handling: Gracefully handle errors in your bot
bot.catch((err, ctx) => {
    console.error(`Error for ${ctx.updateType}`, err);
    ctx.reply("Oops! Something went wrong. Please try again later.");
});

// Launch the bot with additional configuration options if needed
(async () => {
    try {
        await bot.launch();
        console.log('Bot is up and running!');
    } catch (error) {
        console.error('Failed to launch the bot:', error);
    }
})();

