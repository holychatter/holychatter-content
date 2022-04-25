
import '../assets/resources/custom/style/main-6.css'
import '../assets/resources/custom/style/bootstrap_hc.css'
import '../assets/resources/custom/style/dialog_max_height.css'
import '../assets/resources/custom/style/categories-1.css'
import '../assets/resources/custom/style/video_size-0.css'
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import H1Title from './util/H1Title'
import H1TitleBreadcrumb from './util/H1TitleBreadcrumb'
import PageContent from './util/PageContent'

function Article({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [request, setRequest] = useState({ name: "", parentFolders: [], html: "", tags: "" })
	let articleId = ""

	if (location.pathname !== lastPath) {

		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		if (foldersArray.length > 2) {
			articleId = foldersArray[2]
		}

		const wtUrl = backendUrl + "/article_page_json?l=" + language + "&id=" + articleId;
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

			{lastPath === "/" + language + "/categories" ? <H1Title>{request.name}</H1Title> : <H1TitleBreadcrumb language={language} parentFolders={request.parentFolders}>{request.name}</H1TitleBreadcrumb>}

			<div style={{marginLeft: 20, marginRight: 20}}>
				<table style={{width: '100%'}}>
					<tbody>
						<tr>
							<td className="hc-message-viewer-width">
								<div style={{ paddingLeft: 5, paddingRight: 15, paddingTop: 10 }}>
									<span dangerouslySetInnerHTML={{ __html: request.html }} />
									{request.tags}
									<br />
								</div>
							</td>
							<td className="hc-reference-viewer-width">
							</td>
						</tr>
					</tbody>
				</table>
			</div>


		</PageContent>
	)
}

export default Article
