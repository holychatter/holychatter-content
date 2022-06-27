import React from "react"
import H1TitleBreadcrumb from "../components/title/H1TitleBreadcrumb"
import H2TitleId from "../components/title/H2TitleId"
import PageContent from '../components/util/PageContent'
import GetInnerHtmlStrLocalized from "../datas/GetInnerHtmlStrLocalized"
import GetStrLocalized from "../datas/GetStrLocalized"


function TextsOfThePope({ language, setLanguage }) {


	function YoutubePlayer({ videoId }) {
		return <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" height="315"
			src={"https://www.youtube.com/embed/" + videoId + "?rel=0"} width="560" style={{ display: 'block', margin: '0 auto' }}></iframe>
	}

	const parentFolders = [
		{
			path: GetStrLocalized(language, "readingsFolderName"),
			name: GetStrLocalized(language, "readings")
		}
	]
	const textsOfThePope = GetStrLocalized(language, "textsOfThePope")

	return (
		<PageContent language={language} setLanguage={setLanguage}>
			<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{textsOfThePope}</H1TitleBreadcrumb>
			<br /><br />


			<H2TitleId language={language} titleId={"encyclicLetterPatrisCorde"} />
			<br />
			<YoutubePlayer videoId={language === "fr" ? "cwXDAUXNVSE" : "y3KINj7g8b8"} />
			<br /><br />
			<span className="hc-content-text" style={{marginLeft: '80px'}}><GetInnerHtmlStrLocalized language={language} textId="encyclicLetterPatrisCordeText" /></span>
			<br /><br /><br />

			{
				language === "fr" &&
				<React.Fragment>
					<H2TitleId language={language} titleId={"encyclicalFratelliTutti"} />
					<br />
					<YoutubePlayer videoId="6EWdp0ywpGc" />
					<br /><br />
					<span className="hc-content-text" style={{marginLeft: '80px'}}><GetInnerHtmlStrLocalized language={language} textId="encyclicalFratelliTuttiText" /></span>
					<br /><br /><br />

					<H2TitleId language={language} titleId={"encyclicalLaudatoSi"} />
					<br />
					<YoutubePlayer videoId="uhmTZ9ro01E" /><br />
					<YoutubePlayer videoId="BO2JL5E_mec" /><br />
					<YoutubePlayer videoId="EVvTO6jtiDk" /><br />
					<YoutubePlayer videoId="9EU2jIDH6PY" /><br />
					<YoutubePlayer videoId="hJTWiPB40ZA" /><br />
					<YoutubePlayer videoId="8jkRAPSGYJw" /><br />
					<YoutubePlayer videoId="yHWXc59aGak" />
					<br /><br />
					<span className="hc-content-text" style={{marginLeft: '80px'}}><GetInnerHtmlStrLocalized language={language} textId="encyclicalLaudatoSiText" /></span>
					<br /><br /><br />
				</React.Fragment>
			}

			<H2TitleId language={language} titleId={"readThePopesWritings"} />
			<br />
			<span className="hc-content-text" style={{marginLeft: '80px'}}><GetInnerHtmlStrLocalized language={language} textId="readThePopesWritingsLink" /></span>

		</PageContent >
	)
}

export default TextsOfThePope;