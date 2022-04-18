import React from 'react';

const TranslationsEn = {
    "home": "Home",
    "categories": "Categories",
    "categoriesFolderName": "categories",
    "reasonsToBelieve": "Reasons to believe",
    "chatbot": "Chatbot"
};

const TranslationsFr = {
    "home": "Accueil",
    "categories": "Catégories",
    "categoriesFolderName": "categories",
    "reasonsToBelieve": "Raisons de croire",
    "chatbot": "Chatbot"
};

function GetStrLocalized({ language, textId }) {
    if (language === "fr") {
        return (<React.Fragment>{TranslationsFr[textId]}</React.Fragment>)
    }
    return (<React.Fragment>{TranslationsEn[textId]}</React.Fragment>)
}



export default GetStrLocalized