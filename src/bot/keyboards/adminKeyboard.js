// src/bot/keyboards/adminKeyboard.js
module.exports.adminKeyboard = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['/Товары', '/Пользователи'], 
            ['/Акции', '/Fistocoin']
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    })
};