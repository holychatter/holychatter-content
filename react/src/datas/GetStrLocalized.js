
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
    "search": "Search"
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
    "search": "Rechercher"
};


function GetStrLocalized(language, textId) {
    if (language === "fr") {
        return TranslationsFr[textId]
    }
    return TranslationsEn[textId]
}


export default GetStrLocalized