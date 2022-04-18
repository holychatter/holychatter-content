import { useLocation } from 'react-router-dom'
import React from 'react';
import HCNavBar from './HCNavBar';

function Categories({language}) {
	const location = useLocation();

	return (
		<React.Fragment>
			<HCNavBar language={language} />
		</React.Fragment>
	)
}

export default Categories
