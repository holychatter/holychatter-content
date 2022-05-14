
const TranslationsEn = {
    "categoriesFolderName": "categories",
    "reasonsToBelieveFolderName" : "reasons-to-believe",
    "chatbotFolderName": "chatbot",
    "readingsOfTheDayFolderName": "lectures-du-jour",
    "gospelFolderName": "gospel",
    "readingsFolderName": "readings",
    "bibleFolderName": "bible",
    "gospelsFolderName": "gospels",
    "sourcesFolderName": "sources",
    "aboutFolderName": "about",
    "searchFolderName": "search",
    "christianMessageFolderName": "christian-message",
    "search": "Search",
    "close": "Close",
    "verse": "Verse",
    "verses": "Verses",
    "listen": "Listen",
    "stop": "Stop"
};

const TranslationsFr = {
    "categoriesFolderName": "categories",
    "reasonsToBelieveFolderName" : "raisons-de-croire",
    "chatbotFolderName": "chatbot",
    "readingsOfTheDayFolderName": "readings-of-the-day",
    "gospelFolderName": "evangile",
    "readingsFolderName": "lectures",
    "bibleFolderName": "bible",
    "gospelsFolderName": "evangiles",
    "sourcesFolderName": "sources",
    "aboutFolderName": "a-propos",
    "searchFolderName": "rechercher",
    "christianMessageFolderName": "message-chretien",
    "search": "Rechercher",
    "close": "Fermer",
    "verse": "Verset",
    "verses": "Versets",
    "listen": "Écouter",
    "stop": "Arrêter"
};


function GetStrLocalized(language, textId) {
    if (language === "fr") {
        return TranslationsFr[textId]
    }
    return TranslationsEn[textId]
}


export default GetStrLocalized