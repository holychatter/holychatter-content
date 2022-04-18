import Banner from './Banner'
import Categories from './Categories'
import HCNavBar from './HCNavBar'
import Chatbot from './Chatbot'
import GetFolderName from '../datas/GetFolderName'
import React from 'react'
import { Navigate, Routes, Route } from "react-router-dom";

function App() {
	return (
		<React.Fragment>
			<Routes> {/* The Routes decides which component to show based on the current URL.*/}
				<Route path='/fr/*'>
					<Route path='' element={<HCNavBar language="fr" />}></Route>
					<Route path={GetFolderName("fr", "categoriesFolderName")} element={<Categories language="fr" />}></Route>
					<Route path={GetFolderName("fr", "chatbotFolderName")} element={<Chatbot language="fr" />}></Route>
					<Route path='*' element={<HCNavBar language="fr" />}></Route>
				</Route>
				<Route path='/en/*'>
					<Route path='' element={<HCNavBar language="en" />}></Route>
					<Route path='*' element={<HCNavBar language="en" />}></Route>
				</Route>
				<Route path='*' element={<Navigate to="/fr" />}></Route>
			</Routes>
			<Banner />
		</React.Fragment>
	)
}

export default App
