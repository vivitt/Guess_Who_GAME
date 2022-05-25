import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//PAGES
import Home from './pages/Home'
import Game from './pages/Game'

import NotFound from './pages/NotFound'
import Footer from './components/Footer'

//CONTEXT
import { RequireName } from './context/RequireName'
import { UserContextProv } from './context/UserContextProv'
import SelectedCharContextProv, { SelectedCharContext } from './context/SelectedCharContx';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { SoundContextProv } from './context/SoundContext';



function App() {
const [ mode, setMode ] = useState('easy');


  
  return (
    <SoundContextProv>
    <UserContextProv >
      <SelectedCharContextProv>
        
      <div className="app">

        <Router>
          <NavBar />
          
               <main>
                 <Routes>
                   <Route path="/" element={<Home mode={mode} setMode={setMode}  />} /> 
                   {/* <Route path="/login" element={<Login />} />
                   <Route path="/register" element={<Register />} /> */}
                   
                   <Route path="/game" element={ <RequireName><Game mode={mode} setMode={setMode}  /> </RequireName>} /> 
                   

                   <Route path="*" element={<NotFound />} />
                 </Routes>
               </main> 
             </Router>
             <Footer text={'© VivianaY 2022 | Guess Who Game | Made with ♥︎ Fighting gender inequality '}/>
           </div>
           
           </SelectedCharContextProv>  
          </UserContextProv>
        </SoundContextProv>
  );
}

export default App;



