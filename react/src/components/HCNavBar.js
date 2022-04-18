import '../assets/resources/custom/style/main-6.css'
import { Link } from "react-router-dom";
import image_house from '../assets/resources/custom/navbar_icons/house.png'
import image_chatbot from '../assets/resources/custom/navbar_icons/chatbot.jpg'
import image_bible from '../assets/resources/custom/navbar_icons/bible.jpg'
import image_sources from '../assets/resources/custom/navbar_icons/sources.jpg'
import image_englishFlag from '../assets/resources/custom/navbar_icons/england.png'
import image_frenchFlag from '../assets/resources/custom/navbar_icons/france.png'
import image_profil from '../assets/resources/custom/navbar_icons/profil.png'
import GetStrLocalized from '../datas/Translations'
import GetFolderName from '../datas/GetFolderName'
import OpenNav from './nav/OpenNav'
import CloseNav from './nav/CloseNav'


function HCNavBar({ language }) {

	const otherLanguageFolderName = (language === "fr") ? "en" : "fr";
	const image_otherLanguageFlag = (language === "fr") ? image_englishFlag : image_frenchFlag;

	return (
		<div className="App">
			<div id='hcSidenavId' className='hc-sidenav' onMouseOver={OpenNav} onMouseOut={CloseNav}>
				<Link to={"/" + language}><img style={{marginLeft: 20}} width='20px' src={image_house} /> <span className='hc-sidebar-text'><GetStrLocalized language={language} textId="home" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "categoriesFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_house} /> <span className='hc-sidebar-text hc-sidebar-text-sub'><GetStrLocalized language={language} textId="categories" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "categoriesFolderName") + "/" + GetFolderName(language, "reasonsToBelieveFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_house} /> <span className='hc-sidebar-text hc-sidebar-text-sub-sub'><GetStrLocalized language={language} textId="reasonsToBelieve" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "chatbotFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_chatbot} /> <span className='hc-sidebar-text'><GetStrLocalized language={language} textId="chatbot" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "readingsOfTheDayFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} /> <span className='hc-sidebar-text'><GetStrLocalized language={language} textId="readingsOfTheDay" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "readingsOfTheDayFolderName") + "/" + GetFolderName(language, "gospelFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} /> <span className='hc-sidebar-text hc-sidebar-text-sub'><GetStrLocalized language={language} textId="gospelOfTheDay" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "readingsFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} /> <span className='hc-sidebar-text'><GetStrLocalized language={language} textId="readings" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "readingsFolderName") + "/" + GetFolderName(language, "bibleFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} /> <span className='hc-sidebar-text hc-sidebar-text-sub'><GetStrLocalized language={language} textId="bible" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "readingsFolderName") + "/" + GetFolderName(language, "bibleFolderName") + "/" + GetFolderName(language, "gospelsFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} /><span className='hc-sidebar-text hc-sidebar-text-sub-sub'><GetStrLocalized language={language} textId="gospels" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "sourcesFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_sources} /><span className='hc-sidebar-text'><GetStrLocalized language={language} textId="sources" /></span></Link>
				<Link to={"/" + otherLanguageFolderName}><img style={{marginLeft: 20}} width='20px' src={image_otherLanguageFlag} /><span className='hc-sidebar-text'><GetStrLocalized language={language} textId="goToTheOtherLanguageVersion" /></span></Link>
				<Link to={"/" + language + "/" + GetFolderName(language, "aboutFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_profil} /> <span className='hc-sidebar-text'><GetStrLocalized language={language} textId="about" /></span></Link>
			</div>
		</div>
	)
}

export default HCNavBar
