import '../assets/resources/custom/style/sources-0.css'
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import H1Title from './title/H1Title'
import PageContent from './util/PageContent'
import BigButtonWithTextABottom from "./bigButton/BigButtonWithTextABottom"


function Sources({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [request, setRequest] = useState({ sources: [] })

	if (location.pathname !== lastPath) {

		setLastPath(location.pathname);
		const wtUrl = backendUrl + "/sources_page_json?l=" + language;
		console.log("Request url: " + wtUrl);
		const getBackendWithFetch = async () => {
			const response = await fetch(wtUrl);
			const jsonData = await response.json();
			setRequest(jsonData);
		};
		getBackendWithFetch();
	}

	return (
		<PageContent language={language} setLanguage={setLanguage}>
			<H1Title>Sources</H1Title>
			<br /><br />

			<div className='hc-sources-left-margin'>
				{
					request.sources !== "" &&
					request.sources.map((item, index) => {
						return <BigButtonWithTextABottom key={index} link={item.nameForUrl} image={item.icon} duration="" title={item.name} tags="" sourceImage="" sourceName=""  beginOfClassName="hc-big-button-source" />
					})
				}
			</div>

		</PageContent>
	)
}

export default Sources;