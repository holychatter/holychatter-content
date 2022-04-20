import GetHtmlStrLocalized from "../../datas/GetHtmlStrLocalized"


function H1Title({language, titleId}) {

    return (
        <div className='hc-text-align-center'>
            <div style={{ height: 1 }}></div>
            <div>
                <h1 className='hc-h1-main-title'><GetHtmlStrLocalized language={language} textId={titleId} /></h1>
            </div>
            <div style={{ height: 1 }}></div>
        </div>
    )
}

export default H1Title