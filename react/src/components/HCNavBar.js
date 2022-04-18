import '../assets/resources/custom/style/main-6.css'
import { Link } from "react-router-dom";
import image_house from '../assets/resources/custom/navbar_icons/house.png'
import image_chatbot from '../assets/resources/custom/navbar_icons/chatbot.jpg'
import GetStrLocalized from './Translations'
import GetFolderName from './GetFolderName';


function HCNavBar({ language }) {

	function openNav() {
		var hcSideBarTextElements = document.getElementsByClassName("hc-sidebar-text");
		Array.prototype.filter.call(hcSideBarTextElements, function (hcSideBarTextElement) {
			return hcSideBarTextElement.style.display = 'inline-block';
		});
		document.getElementById("hcSidenavId").style.width = "250px";
	}

	function closeNav() {
		if (window.innerWidth <= 850) {
			document.getElementById("hcSidenavId").style.width = "0px";
		} else {
			document.getElementById("hcSidenavId").style.width = "60px";
		}

		var hcSideBarTextElements = document.getElementsByClassName("hc-sidebar-text");
		Array.prototype.filter.call(hcSideBarTextElements, function (hcSideBarTextElement) {
			return hcSideBarTextElement.style.display = 'none';
		});
	}


	return (
		<div className="App">
			<div id='hcSidenavId' className='hc-sidenav' onMouseOver={openNav} onMouseOut={closeNav}>
				<Link to={"/" + language}><img style={{ marginLeft: 20 }} width='20px' src={image_house} /> <span className='hc-sidebar-text'><GetStrLocalized language={language} textId="home" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "categoriesFolderName")}><img style={{ marginLeft: 20 }} width='20px' src={image_house} /> <span className='hc-sidebar-text hc-sidebar-text-sub'><GetStrLocalized language={language} textId="categories" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "categoriesFolderName") + "/" + GetFolderName(language, "reasonsToBelieveFolderName")}><img style={{ marginLeft: 20 }} width='20px' src={image_house} /> <span className='hc-sidebar-text hc-sidebar-text-sub-sub'><GetStrLocalized language={language} textId="reasonsToBelieve" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "chatbotFolderName")}><img style={{ marginLeft: 20 }} width='20px' src={image_chatbot} /> <span className='hc-sidebar-text'><GetStrLocalized language={language} textId="chatbot" /></span></Link>
				{/*
            
            <a href='" + pStringsResources.getReadingsOfTheDayPath() + "'><img style='margin-left: 20px;' width='20px' src='/resources/custom/navbar_icons/bible.jpg' /> <span class='hc-sidebar-text'>readingsOfTheDay</span></a>
            <a href='" + pStringsResources.getReadingsOfTheDayPath() + "/" + pStringsResources.massReadingFolderName(MassReading::GOSPEL) + "'><img style='margin-left: 20px;' width='20px' src='/resources/custom/navbar_icons/bible.jpg' /> <span class='hc-sidebar-text hc-sidebar-text-sub'>gospelOfTheDay</span></a>
            <a href='" + pStringsResources.getResourcesPath() + "'><img style='margin-left: 20px;' width='20px' src='/resources/custom/navbar_icons/bible.jpg' /> <span class='hc-sidebar-text'>readings</span></a>
            <a href='" + pStringsResources.getBibleRootPath() + "'><img style='margin-left: 20px;' width='20px' src='/resources/custom/navbar_icons/bible.jpg' /> <span class='hc-sidebar-text hc-sidebar-text-sub'>bible</span></a>
            <a href='" + pStringsResources.getBibleRootPath() + "/" + pStringsResources.gospelsFolderName() + "'><img style='margin-left: 20px;' width='20px' src='/resources/custom/navbar_icons/bible.jpg' /> <span class='hc-sidebar-text hc-sidebar-text-sub-sub'>gospels</span></a>
            <a href='/" + pStringsResources.currentLanguageFolderName() + "/" + pStringsResources.sourcesFolderName() + "'><img style='margin-left: 20px;' width='20px' src='/resources/custom/navbar_icons/sources.jpg' /> <span class='hc-sidebar-text'>sources</span></a>
            <a href='/" + otherLanguageFolderName + "'><img style='margin-left: 20px;' width='20px' src='/resources/custom/navbar_icons/" + otherLanguageFlag + "' /> <span class='hc-sidebar-text'>goToTheOtherLanguageVersion</span></a>
            <a href='/" + pStringsResources.currentLanguageFolderName() + "/" + pStringsResources.aboutFolderName() + "'><img style='margin-left: 20px;' width='20px' src='/resources/custom/navbar_icons/profil.png' /> <span class='hc-sidebar-text'>about</span></a>
*/}
			</div>
		</div>
	)
}

export default HCNavBar
