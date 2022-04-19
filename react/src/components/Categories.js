//import { useLocation } from 'react-router-dom'
import React from 'react';
import HCNavBar from './HCNavBar';

function Categories({language, setLanguage}) {
	//	const location = useLocation();

	return (
		<React.Fragment>
			<HCNavBar language={language} setLanguage={setLanguage} />
		</React.Fragment>
	)
}

export default Categories
