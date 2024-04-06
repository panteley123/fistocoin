// src/bot/keyboards/userKeyboard.js
module.exports.userKeyboard = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['Товары'], ['Fistocoin'], ['Акции']
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    })
};
