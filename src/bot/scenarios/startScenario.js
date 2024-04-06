// src/bot/scenarios/startScenario.js
const defaultStart = require('./start/defaultStart');
const referralStart = require('./start/referralStart');
const specialOfferStart = require('./start/specialOfferStart');

module.exports = function(bot) {
    // Инициализация сценариев
    defaultStart(bot);
    referralStart(bot);
    specialOfferStart(bot);
};
