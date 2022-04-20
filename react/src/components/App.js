import About from './About'
import Banner from './Banner'
import Categories from './Categories'
import HCNavBar from './HCNavBar'
import Chatbot from './Chatbot'
import GetStrLocalized from '../datas/GetStrLocalized'
import React from 'react'
import { Navigate, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from "react-helmet"

function App() {
	const location = useLocation();
	const [language, setLanguage] = useState(location.pathname.length >= 3 ? location.pathname.substring(1,3) : "en")

	return (
		<React.Fragment>
			      <Helmet>
        <html lang="fr" />
        <title>React Helmet Tutorial</title>
        <meta name="description" content="Tutorial for React Helmet" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
			<Routes> {/* The Routes decides which component to show based on the current URL.*/}
				<Route path='/fr/*'>
					<Route path='' element={<HCNavBar language="fr" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("fr", "categoriesFolderName")} element={<Categories language="fr" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("fr", "chatbotFolderName")} element={<Chatbot language="fr" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("fr", "aboutFolderName")} element={<About language="fr" setLanguage={setLanguage} />}></Route>
					<Route path='*' element={<HCNavBar language="fr" setLanguage={setLanguage} />}></Route>
				</Route>
				<Route path='/en/*'>
				<Route path='' element={<HCNavBar language="en" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("en", "categoriesFolderName")} element={<Categories language="en" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("en", "chatbotFolderName")} element={<Chatbot language="en" setLanguage={setLanguage} />}></Route>
					<Route path={GetStrLocalized("en", "aboutFolderName")} element={<About language="en" setLanguage={setLanguage} />}></Route>
					<Route path='*' element={<HCNavBar language="en" setLanguage={setLanguage} />}></Route>
				</Route>
				<Route path='*' element={<Navigate to="/fr" />}></Route>
			</Routes>
			<Banner language={language} />
		</React.Fragment>
	)
}

export default App
