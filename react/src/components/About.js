
import '../assets/resources/custom/style/main-6.css'
import image_pret_a_chatter from '../assets/resources/custom/images/pret_a_chatter.png'
import React from 'react'
import GetInnerHtmlStrLocalized from '../datas/GetInnerHtmlStrLocalized'
import GetHtmlStrLocalized from '../datas/GetHtmlStrLocalized'
import GetStrLocalized from '../datas/GetStrLocalized'
import PageContent from './util/PageContent'
import H1Title from './util/H1Title'
import H2Title from './util/H2Title'
import { Link } from "react-router-dom"


function About({ language, setLanguage }) {

    return (
        <PageContent language={language} setLanguage={setLanguage}>
            <H1Title language={language} titleId="about" />
            <br /><br />

            <div className='hc-content-text' style={{ marginLeft: 80 }}>
                <GetInnerHtmlStrLocalized language={language} textId="aboutHolyChatterContent" />
            </div>
            <br /><br />
            <H2Title language={language} titleId="recipientsOfTheSite" />
            <br />
            <div className='hc-content-text' style={{ marginLeft: 80 }}>
                <GetInnerHtmlStrLocalized language={language} textId="forWhoContent" />
                <Link to={"/" + language + "/" + GetStrLocalized(language, "chatbotFolderName")}><GetHtmlStrLocalized language={language} textId="readyToChat" /></Link>
            </div>

            {language === "fr" ?
                <React.Fragment>
                    <br /><br />
                    <div className="hc-text-align-center" style={{ padding: 15 }}>
                        <Link to={"/" + language + "/" + GetStrLocalized(language, "christianMessageFolderName")}>
                            <img src={image_pret_a_chatter} className="hc-cursor-pointer" width='100%' style={{ maxWidth: 730, maxHeight: 730 }} />
                        </Link>
                    </div>
                </React.Fragment> :
                <React.Fragment />}
        </PageContent>
    )
}

export default About