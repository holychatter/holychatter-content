import '../assets/resources/custom/style/sources-0.css'
import React, { useState } from "react"
import GetStrLocalized from '../datas/GetStrLocalized'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import BigButtonWithTextABottom from "../components/bigButton/BigButtonWithTextABottom"
import YouTubePlayer from '../components/YouTubePlayer'
import { useLocation } from 'react-router-dom'


function Bible({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")

	const TypeOfPage_BIBLE = 0
	const TypeOfPage_OLD_TESTAMENT = 1
	const TypeOfPage_NEW_TESTAMENT = 2
	const TypeOfPage_STYLE_OF_BOOKS = 3
	const [typeOfPage, setTypeOfPage] = useState(TypeOfPage_BIBLE)

	const [parentFolders, setParentFolders] = useState([])

	const [testamentRequest, setTestamentRequest] = useState({ categories: [] })
	const [categoriesRequest, setCategoriesRequest] = useState({ testament: "", testament_url: "" })


	const readingPartOfBreadcrumb = {
		path: GetStrLocalized(language, "readingsFolderName"),
		name: GetStrLocalized(language, "readings")
	}
	const biblePartOfBreadcrumb = {
		path: GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, "bibleFolderName"),
		name: GetStrLocalized(language, "bible")
	}

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		var typeOfPageLocal = TypeOfPage_BIBLE
		let bibleSubFolder = ""
		if (foldersArray.length > 4) {
			bibleSubFolder = foldersArray[4]
			if (bibleSubFolder === GetStrLocalized(language, "oldTestamentFolderName")) {
				typeOfPageLocal = TypeOfPage_OLD_TESTAMENT
			} else if (bibleSubFolder === GetStrLocalized(language, "newTestamentFolderName")) {
				typeOfPageLocal = TypeOfPage_NEW_TESTAMENT
			} else {
				typeOfPageLocal = TypeOfPage_STYLE_OF_BOOKS
			}
		}


		setTypeOfPage(typeOfPageLocal)
		if (typeOfPageLocal === TypeOfPage_OLD_TESTAMENT ||
			typeOfPageLocal === TypeOfPage_NEW_TESTAMENT) {
			setParentFolders([
				readingPartOfBreadcrumb,
				biblePartOfBreadcrumb
			])
			const wtUrl = backendUrl + "/testament_to_categories_json?l=" + language + "&tt=" +
				(typeOfPageLocal === TypeOfPage_OLD_TESTAMENT ? "o" : "n");
			console.log("Request url: " + wtUrl);
			const getBackendTestamentWithFetch = async () => {
				const response = await fetch(wtUrl);
				const jsonData = await response.json();
				setTestamentRequest(jsonData);
			};
			getBackendTestamentWithFetch();
		} else if (typeOfPageLocal === TypeOfPage_STYLE_OF_BOOKS) {
			const wtUrl = backendUrl + "/categories_to_bible_books_json?l=" + language + "&c=" + bibleSubFolder;
			console.log("Request url: " + wtUrl);
			const getBackendCategoriesWithFetch = async () => {
				const response = await fetch(wtUrl);
				const jsonData = await response.json();
				setCategoriesRequest(jsonData);
				setParentFolders([
					readingPartOfBreadcrumb,
					biblePartOfBreadcrumb, {
						path: GetStrLocalized(language, "readingsFolderName") + "/" + jsonData.testament_url,
						name: jsonData.testament
					}
				])
			};
			getBackendCategoriesWithFetch();
		} else {
			setParentFolders([readingPartOfBreadcrumb]);
		}
	}

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

			{
				(typeOfPage === TypeOfPage_OLD_TESTAMENT || typeOfPage === TypeOfPage_NEW_TESTAMENT) &&
				<React.Fragment>
					<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{GetStrLocalized(language, typeOfPage === TypeOfPage_OLD_TESTAMENT ? "oldTestament" : "newTestament")}</H1TitleBreadcrumb>
					<br /><br />

					<div className="hc-categories-left-margin">
						{
							testamentRequest.categories !== "" &&
							testamentRequest.categories.length > 0 &&
							<React.Fragment>
								{
									testamentRequest.categories.map((item, index) => {
										return (
											<BigButtonWithTextABottom key={"testament-btn-" + index} link={item.url} image={item.image} duration="" title={item.name} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />
										)
									})
								}
							</React.Fragment>
						}
					</div>
				</React.Fragment>
			}


			{
				typeOfPage === TypeOfPage_STYLE_OF_BOOKS &&
				<React.Fragment>
					<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{GetStrLocalized(language, typeOfPage === TypeOfPage_OLD_TESTAMENT ? "oldTestament" : "newTestament")}</H1TitleBreadcrumb>
					<br /><br />

				</React.Fragment>
			}


		</PageContent>
	)
}

export default Bible;