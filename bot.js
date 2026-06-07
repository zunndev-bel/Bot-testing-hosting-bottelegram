const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '8626193987:AAENtpASusVuf9-e6l8YQ3JKnKUgdQVz3c8';

const bot = new TelegramBot(TOKEN, {
    polling: true
});

console.log('Bot online!');

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, `Halo ${msg.from.first_name}! Server berjalan.`);
});

bot.onText(/\/ping/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Pong! 🏓');
});
