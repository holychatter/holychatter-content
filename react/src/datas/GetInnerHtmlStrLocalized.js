import React from 'react'

const TranslationsEn = {
    "aboutHolyChatterContent": "Holy Chatter is a site that aims to show the beauty and truth of the Christian religion thanks to a chatbot with a content verified by the webmaster.<br />\n" +
        "This site was created in 2015 by young French Catholics wanting to share their received faith.<br />\n" +
        "We hope it will improve your relationship with this God of love and it will give you the desire to meet Christians to continue the discussion!<br />\n" +
        "Holy Chatter",
    "forWhoContent": "Whether you are an atheist or an agnostic, you may be wondering about faith? You want to learn more about Christianity? \n" +
        "Who is Jesus? What did he do ? In fact, what is faith in concrete terms? Then Holy Chatter is for you!<br/><br/>\n" +
        "You are a Christian and wish to deepen your knowledge and fully live your faith. Then Holy Chatter is for you!<br/><br/>\n" +
        "Whoever you are, atheist, practicing Christian, disbelief, lost your faith, or practice it every day, we welcome you and affirm that you have your place on Holy Chatter. \n" +
        "Thanks to the chat, videos, daily texts and other resources on various topics, you can find answers to your questions or learn more.<br/><br/>",
    "hurtubiseMsg1": ""
};

const TranslationsFr = {
    "aboutHolyChatterContent": "Holy Chatter est un site qui a pour but de montrer la beauté et véracité de la religion chrétienne grâce à un agent conversationnel ayant un contenu vérifié par le webmaster.<br />\n" +
        "Ce site a été créé en 2015 par des jeunes catholiques français voulant partager la foi qu'ils ont reçu.<br />\n" +
        "On espère que ça améliorera votre relation au Dieu d'amour et vous donnera le désir de rencontrer des chrétiens pour poursuivre la discussion !<br />\n" +
        "Holy Chatter",
    "forWhoContent": "Que vous soyez athée ou agnostique, vous vous poser peut-être des questions sur la foi ? \n" +
        "Vous désirez en apprendre plus sur le christianisme. Qui est Jésus ? Qu'a-t-il fait ? En fait, qu'est ce que la foi concrètement ?  \n" +
        "Alors Holy Chatter est fait pour vous !<br/><br/>\n" +
        "Vous êtes chrétien et souhaitez approfondir vos connaissances et vivre pleinement votre foi. Alors Holy Chatter est fait pour vous !<br/><br/>\n" +
        "Qui que vous soyez, athée, chrétien praticant, que vous ne croyez pas, que vous ayez perdu la foi ou que vous la pratiquiez chaque jour, nous vous souhaitons la bienvenue et affirmons que vous avez votre place sur Holy Chatter. \n" +
        "Grâce au chat, aux vidéos, textes du jour et autres ressources sur des thèmes variés, vous pourrez trouver des réponses à vos questions ou en apprendre plus.<br/><br/>",
    "hurtubiseMsg1": "Jésus est là, il nous montre son cœur et il nous dit « Venez à moi » !"
};


function GetInnerHtmlStrLocalized({ language, textId }) {
    if (language === "fr") {
        return <span dangerouslySetInnerHTML={{ __html: TranslationsFr[textId] }}></span>
    }
    return <span dangerouslySetInnerHTML={{ __html: TranslationsEn[textId] }}></span>
}


export default GetInnerHtmlStrLocalized