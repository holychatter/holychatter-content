import React from 'react'
import HCNavBar from '../HCNavBar'


function PageContent({ language, setLanguage, title, children }) {

    return (
        <React.Fragment>
            <HCNavBar language={language} setLanguage={setLanguage} />
            <div className='hc-main'>
                {children}
                <div className="hc-content-text" style={{ textAlign: 'center', margin: '0 auto', marginTop: 50, marginBottom: 25 }}>
                    holychatter@gmail.com
                </div>
                <br />
            </div>
        </React.Fragment>
    )
}

export default PageContent