import React from 'react';

const TranslationsEn = {
    "home": "Home",
    "categories": "Categories",
    "categoriesFolderName": "categories",
    "reasonsToBelieve": "Reasons to believe",
    "chatbot": "Chatbot",
    "readingsOfTheDay": "Readings of the day",
    "gospelOfTheDay": "Gospel of the day",
    "readings": "Readings",
    "bible": "Bible",
    "gospels": "Gospels",
    "sources": "Sources",
    "goToTheOtherLanguageVersion": "Version française",
    "about": "About"
};

const TranslationsFr = {
    "home": "Accueil",
    "categories": "Catégories",
    "categoriesFolderName": "categories",
    "reasonsToBelieve": "Raisons de croire",
    "chatbot": "Chatbot",
    "readingsOfTheDay": "Lectures du jour",
    "gospelOfTheDay": "Évangile du jour",
    "readings": "Lectures",
    "bible": "Bible",
    "gospels": "Évangiles",
    "sources": "Sources",
    "goToTheOtherLanguageVersion": "Switch to English",
    "about": "A propos"
};

function GetHtmlStrLocalized({ language, textId }) {
    if (language === "fr") {
        return (<React.Fragment>{TranslationsFr[textId]}</React.Fragment>)
    }
    return (<React.Fragment>{TranslationsEn[textId]}</React.Fragment>)
}



export default GetHtmlStrLocalized