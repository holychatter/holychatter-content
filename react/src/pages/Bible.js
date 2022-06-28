import '../assets/resources/custom/style/sources-0.css'
import React, { useState } from "react"
import GetStrLocalized from '../datas/GetStrLocalized'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import BigButtonWithTextABottom from "../components/bigButton/BigButtonWithTextABottom"
import YouTubePlayer from '../components/YouTubePlayer'
import { useLocation } from 'react-router-dom'


function Bible({ language, setLanguage }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")

	const TypeOfPage_BIBLE = 0
	const TypeOfPage_OLD_TESTAMENT = 1
	const TypeOfPage_NEW_TESTAMENT = 2
	const TypeOfPage_STYLE_OF_BOOKS = 3
	const [typeOfPage, setTypeOfPage] = useState(TypeOfPage_BIBLE)

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		if (foldersArray.length > 4) {
			const bibleSubFolder = foldersArray[4]
			if (bibleSubFolder === GetStrLocalized(language, "oldTestamentFolderName")) {
				console.log("oldTestamentFolderName page")
				setTypeOfPage(TypeOfPage_OLD_TESTAMENT)
			} else if (bibleSubFolder === GetStrLocalized(language, "newTestamentFolderName")) {
				console.log("newTestamentFolderName page")
				setTypeOfPage(TypeOfPage_NEW_TESTAMENT)
			} else {
				console.log("bibleSubFolder " + bibleSubFolder)
				setTypeOfPage(TypeOfPage_STYLE_OF_BOOKS)
			}
		} else {
			setTypeOfPage(TypeOfPage_BIBLE)
		}
	}

	const parentFolders = [
		{
			path: GetStrLocalized(language, "readingsFolderName"),
			name: GetStrLocalized(language, "readings")
		}
	]

	return (
		<PageContent language={language} setLanguage={setLanguage}>

			{
				typeOfPage === TypeOfPage_BIBLE &&
				<React.Fragment>
					<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{GetStrLocalized(language, "bible")}</H1TitleBreadcrumb>
					<br /><br />

					<div className='hc-text-align-center'>
						<BigButtonWithTextABottom link={GetStrLocalized(language, "oldTestamentFolderName")} image="/buttons/old_testament.jpg" duration="" title={GetStrLocalized(language, "oldTestament")} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />
						<BigButtonWithTextABottom link={GetStrLocalized(language, "newTestamentFolderName")} image="/buttons/new_testament.jpg" duration="" title={GetStrLocalized(language, "newTestament")} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />

						{
							language === "fr" &&
							<span>
								<br />
								<span className='hc-content-text' >
									Aide pour la lecture : <a href="/resources/custom/documents/Lire la bible en 1 an.pdf">Lire la bible en 1 an</a>
								</span>
							</span>
						}
						<br /><br />
						<YouTubePlayer videoId={language === "fr" ? "pYYIYRhlVoI" : "ak06MSETeo4"} />
						<br /><br />

					</div>
				</React.Fragment>
			}


		</PageContent>
	)
}

export default Bible;