import React from "react"
import { Link } from "react-router-dom"
import GetStrLocalized from '../../datas/GetStrLocalized'
import H2TitleId from './H2TitleId'
import BigButtonWithTextAtRight from './BigButtonWithTextAtRight'
import GetHtmlStrLocalized from "../../datas/GetHtmlStrLocalized"


function Refs({ language, type, refs }) {

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    function PrintVerse({ nb, text }) {
        return (
            <React.Fragment>
                <font color="#bf2329">{zeroPad(nb, 2)}</font> <span dangerouslySetInnerHTML={{ __html: text }}></span>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <br />
            {
                refs !== "" &&
                refs.length > 0 &&
                <React.Fragment>
                    <H2TitleId language={language} titleId={type === "bible" ? "biblicalReferences" : "referencesToTheCatechismOfTheCatholicChurch"} />
                    {
                        refs.map((chapterItem, chapterIndex) => {
                            return (
                                <div key={"bible-chapter-" + chapterIndex} style={{ marginLeft: 40 }}>
                                    <br />
                                    &nbsp;&nbsp;
                                    <div className='hc-content-text'>
                                        <b>
                                            <GetHtmlStrLocalized language={language} textId={type === "bible" ? "reference" : "catechismOfTheCatholicChurchNum"} />&nbsp;
                                            <Link to={"/" + language + "/" + GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, type === "bible" ? "bibleFolderName" : "catechismOfTheCatholicChurchFolderName") + "/" + chapterItem.referenceUrlChapterName}>{chapterItem.reference}</Link>
                                        </b>
                                    </div>
                                    <br />
                                    <br />
                                    <div className='hc-long-screen'>
                                        {
                                            chapterItem.content &&
                                            chapterItem.content.map((item, index) => {
                                                return (
                                                    <React.Fragment key={type + "-verse-" + index}>

                                                        <table style={{ width: '100%' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ width: '50%', paddingLeft: 5, paddingRight: 15 }}>
                                                                        <div className='hc-content-text'>
                                                                            <div style={{ marginLeft: 10 }}>
                                                                                <PrintVerse nb={item.nb} text={item.text} />
                                                                            </div>
                                                                            <br />
                                                                        </div>
                                                                    </td>
                                                                    <td style={{ width: '50%', paddingLeft: 15, paddingRight: 5 }}>
                                                                        {
                                                                            item.link !== "" &&
                                                                            <div style={{ marginLeft: 30 }}>
                                                                                <BigButtonWithTextAtRight id={chapterIndex + "-" + index} language={language} item={item.link} />
                                                                                <br />
                                                                            </div>
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className='hc-short-screen'>
                                        {
                                            chapterItem.content &&
                                            chapterItem.content.map((item, index) => {
                                                return (
                                                    <React.Fragment key={type + "-verse-" + index}>

                                                        <div className='hc-content-text'>
                                                            <div style={{ marginRight: 20 }}>
                                                                <PrintVerse nb={item.nb} text={item.text} />
                                                            </div>
                                                            <br />
                                                        </div>
                                                        <br />

                                                        {
                                                            item.link !== "" &&
                                                            <div style={{ marginRight: 20 }}>
                                                                <BigButtonWithTextAtRight id={chapterIndex + "-" + index} language={language} item={item.link} />
                                                                <br />
                                                            </div>
                                                        }
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            )
                        })
                    }
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Refs