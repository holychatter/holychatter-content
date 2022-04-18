import { useLocation } from 'react-router-dom'
import React from 'react';
import HCNavBar from './HCNavBar';

function Categories({language}) {
	const monsteraPrice = 8
	const ivyPrice = 10
	const flowerPrice = 15
	const location = useLocation();

	return (
		<React.Fragment>
			<HCNavBar language={language} />
			<div className='lmj-cart'>
				<h2>Panier {location.pathname}</h2>
				<ul>
					<li>Monstera : {monsteraPrice}€</li>
					<li>Lierre : {ivyPrice}€</li>
					<li>Fleurs : {flowerPrice}€</li>
				</ul>
				Total : {monsteraPrice + ivyPrice + flowerPrice}€
			</div>
		</React.Fragment>
	)
}

export default Categories
