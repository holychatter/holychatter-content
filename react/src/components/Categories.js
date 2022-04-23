
import '../assets/resources/custom/style/main-6.css'
import '../assets/resources/custom/style/bootstrap_hc.css'
import '../assets/resources/custom/style/dialog_max_height.css'
import '../assets/resources/custom/style/categories-1.css'
import React, { useState, useEffect } from "react"
import H1Title from './util/H1Title'
import PageContent from './util/PageContent'
import BigButtonWithTextABottom from './util/BigButtonWithTextABottom'

function Categories({ language, setLanguage }) {

	const wtUrl = "http://localhost:8080/categories_json_api?l=" + language + "&id=decouverte";
	const [request, setRequest] = useState([])

	useEffect(() => {
		const getGitHubUserWithFetch = async () => {
			const response = await fetch(wtUrl);
			const jsonData = await response.json();
			setRequest(jsonData);
			console.log(jsonData)
		};
		getGitHubUserWithFetch();
	}, []);


	return (
		<PageContent language={language} setLanguage={setLanguage}>
			<H1Title language={language} titleId="about" />
			<br /><br />

			<div className='hc-categories-left-margin'>
				{
					request.map((item, index) => {
						return <BigButtonWithTextABottom key={index} link={item.link} image={item.image} duration={item.duration} title={item.title} tags={item.tags} sourceImage={item.sourceImage} sourceName={item.sourceName} />
					})
				}
			</div>


		</PageContent>
	)
}

export default Categories
