
import '../assets/resources/custom/style/main-6.css'
import '../assets/resources/custom/style/bootstrap_hc.css'
import React from 'react';
import HCNavBar from './HCNavBar';

function Categories({ language, setLanguage }) {
	//	const location = useLocation();

	return (
		<React.Fragment>
			<HCNavBar language={language} setLanguage={setLanguage} />
			<div className='hc-main'>
				<div className='hc-text-align-center'>
					<div style={{height: 1}}></div>
					<div>
						<h1 className='hc-h1-main-title'>A propos</h1>
					</div>
					<div style={{height: 1}}></div>
				</div>
				<div className="hc-content-text" style={{ textAlign: 'center', margin: '0 auto', marginTop: 50, marginBottom: 25 }}>
					holychatter@gmail.com
				</div>
			</div>
		</React.Fragment>
	)
}

export default Categories
