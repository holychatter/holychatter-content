
import '../assets/resources/custom/style/main-6.css'
import sound_hurtubise_ogg from '../assets/resources/holychatter/sounds/hurtubise.ogg'
import sound_hurtubise_mp3 from '../assets/resources/holychatter/sounds/hurtubise.mp3'
import React from 'react'
import GetInnerHtmlStrLocalized from '../datas/GetInnerHtmlStrLocalized'
import GetHtmlStrLocalized from '../datas/GetHtmlStrLocalized'
import GetStrLocalized from '../datas/GetStrLocalized'
import PageContent from './util/PageContent'
import H1Title from './util/H1Title'



function ChristianMessage({ language, setLanguage }) {

    return (
        <PageContent language={language} setLanguage={setLanguage}>
            <H1Title language={language} titleId="christianMessage" />
            <br /><br />
            <div className="hc-left-a-search">
                <audio controls>
                    <source src={sound_hurtubise_ogg} type="audio/ogg" />
                    <source src={sound_hurtubise_mp3} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <br /><br />

                <span class='hc-content-text'><GetInnerHtmlStrLocalized language={language} textId="hurtubiseMsg1" /></span>
                Mt 11,28
            </div>
        </PageContent>
    )
}

export default ChristianMessage
