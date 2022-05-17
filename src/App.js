import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//PAGES
import Home from './pages/Home'
import Game from './pages/Game'
import HowToPlay from './pages/HowToPlay'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

//CONTEXT
import { RequireName } from './context/RequireName'
import { UserContextProv } from './context/UserContextProv'
import SelectedCharContextProv, { SelectedCharContext } from './context/SelectedCharContx';
import NavBar from './components/NavBar';
import { useState } from 'react';




function App() {
const [ mode, setMode ] = useState('easy')
const [ openHowTo, setOpenHowTo ] = useState(false)
  
  return (
    <UserContextProv >
      <SelectedCharContextProv>
        
      <div className="app">

        <Router>
          <NavBar />
          
               <main>
                 <Routes>
                   <Route path="/" element={<Home mode={mode} setMode={setMode} openHowTo={openHowTo} setOpenHowTo={setOpenHowTo} />} /> 
                   {/* <Route path="/login" element={<Login />} />
                   <Route path="/register" element={<Register />} /> */}
                   
                   <Route path="/game" element={ <RequireName><Game mode={mode} setMode={setMode} openHowTo={openHowTo} setOpenHowTo={setOpenHowTo} /> </RequireName>} /> 
                   
                   <Route path="/howtoplay" element={ <HowToPlay />  } />
                   <Route path="*" element={<NotFound />} />
                 </Routes>
               </main> 
             </Router>
             <Footer text={'© VivianaY 2022 | Guess Who Game | Made with ♥︎ '}/>
           </div>
           
           </SelectedCharContextProv>  
          </UserContextProv>
   
  );
}

export default App;



