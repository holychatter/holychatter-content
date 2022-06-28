import '../assets/resources/custom/style/sources-0.css'
import React from "react"
import GetStrLocalized from '../datas/GetStrLocalized'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import BigButtonWithTextABottom from "../components/bigButton/BigButtonWithTextABottom"
import YouTubePlayer from '../components/YouTubePlayer'


function Bible({ language, setLanguage }) {

	const parentFolders = [
		{
			path: GetStrLocalized(language, "readingsFolderName"),
			name: GetStrLocalized(language, "readings")
		}
	]

	return (
		<PageContent language={language} setLanguage={setLanguage}>
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
		</PageContent>
	)
}

export default Bible;