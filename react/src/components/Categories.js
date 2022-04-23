
import '../assets/resources/custom/style/main-6.css'
import '../assets/resources/custom/style/bootstrap_hc.css'
import '../assets/resources/custom/style/dialog_max_height.css'
import '../assets/resources/custom/style/categories-1.css'
import React from 'react';
import H1Title from './util/H1Title'
import PageContent from './util/PageContent'
import { Link } from "react-router-dom"


function Categories({ language, setLanguage }) {

	return (
		<PageContent language={language} setLanguage={setLanguage}>
			<H1Title language={language} titleId="about" />
			<br /><br />

			<div className='hc-move-up-animation hc-inline-flex hc-small-margin'>
				<span className="hc-big-button-normal-width" style={{textAlign: 'left'}}>
					<Link to={"/" + language + "/l-evangile-de-harry-potter"} style={{color: 'white', textDecoration: 'none', outline: 'none'}}>
						<div className="hc-big-button-normal-width hc-big-button-normal-height hc-center-background-image" style={{borderRadius: 10, borderWidth: 0, backgroundImage: 'url(https://img.youtube.com/vi/J_eIGCaOl0g/mqdefault.jpg)'}}>
							<span className="hc-big-button-normal-durationtop" style={{position: 'absolute', backgroundColor: 'black', padding: 3, right: 8}}>17:02</span>
						</div>
						<span style={{textAlign: 'left'}}><b className='hc-button-title-style'><p>L'évangile de Harry Potter</p></b></span>
					</Link>
					<span style={{textAlign: 'left', color: '#22292f'}}><p>#Film</p></span>
					<span style={{textAlign: 'left', color: '#22292f'}}><img src='/sources/frere_paul_adrien_d_hardemare.jpg' alt='Source logo' width="23" height="23" style={{marginLeft: 13}} />&nbsp;&nbsp;frère Paul Adrien</span>
				</span>
			</div>


		</PageContent>
	)
}

export default Categories
