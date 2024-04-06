// src/bot/BotService.js
require('dotenv').config({ path: '/Users/pantelej/var/fistocoin/.env'});
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// Импорт клавиатуры
const { userKeyboard } = require('./keyboards/userKeyboard');
const { adminKeyboard } = require('./keyboards/adminKeyboard');

// Здесь мы определяем ID администраторов
const ADMIN_IDS = [1473656425]; // Замените эти числа на реальные Telegram ID администраторов

/**
 * Проверяет, является ли пользователь администратором.
 * @param {Number} userId - Telegram ID пользователя.
 * @return {Boolean} - Возвращает true, если пользователь является администратором, иначе false.
 */
function isAdmin(userId) {
    return ADMIN_IDS.includes(userId);
}

// Пример использования функции в обработчике сообщений бота
bot.on('message', (msg) => {
    const userId = msg.from.id;
    if (isAdmin(userId)) {
        bot.sendMessage(msg.chat.id, "Привет, администратор!", adminKeyboard);
    } else {
        bot.sendMessage(msg.chat.id, "Привет, пользователь!", userKeyboard);
    }
});


// Импорт сценариев
//const startScenario = require('./scenarios/startScenario');

// Инициализация сценариев
//startScenario(bot);

console.log("Bot has been started...");
