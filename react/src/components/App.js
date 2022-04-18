import Banner from './Banner'
import Categories from './Categories'
import HCNavBar from './HCNavBar'
import Chatbot from './Chatbot'
import GetFolderName from './GetFolderName'
import { Routes, Route } from "react-router-dom";


function App() {
	return (
		<div>
			<Banner />
			
			{/*
			*/}
			<Routes> {/* The Switch decides which component to show based on the current URL.*/}
               <Route path='/fr/*'>
    			   <Route path='' element={<HCNavBar language="fr"/>}></Route>
    			   <Route path={GetFolderName("fr", "categoriesFolderName")} element={<Categories language="fr" />}></Route>				   
    			   <Route path={GetFolderName("fr", "chatbotFolderName")} element={<Chatbot language="fr" />}></Route>	
				   <Route path='*' element={<HCNavBar language="fr"/>}></Route>
			   </Route>
               <Route path='/en/*'>
    			   <Route path='' element={<HCNavBar language="en"/>}></Route>
    			   <Route path='*' element={<HCNavBar language="en"/>}></Route>
			   </Route>
			   <Route exact path='/signup/*' element={<Categories/>}></Route>
            </Routes>
		</div>
	)
}

export default App
