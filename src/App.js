import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
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

function App() {
  return (
    <UserContextProv >
      <SelectedCharContextProv>
      <div className="app">
        <Router>
         <div className="nav-bar">
      {/*    <span className="login-logout-button" >
                <UserButton />
            </span> */}
                <ul>
                  <li>
                    <NavLink to="/">GAME</NavLink>
                  </li>
                  <li>
                    <NavLink to="/howtoplay"><i class="fa-solid fa-question"></i>How to play</NavLink>
                  </li>
                </ul>
                  
         </div>
            
               <main>
                 <Routes>
                   <Route path="/" element={<Home />} /> 
                   {/* <Route path="/login" element={<Login />} />
                   <Route path="/register" element={<Register />} /> */}
                   
                   <Route path="/game" element={ <RequireName><Game /> </RequireName>} /> 
                   
                   <Route path="/howtoplay" element={ <HowToPlay />  } />
                   <Route path="*" element={<NotFound />} />
                 </Routes>
               </main> 
             </Router>
             <Footer text={'© Viviana Yanez 2022 | Guess Who Game | Made with ♥︎ '}/>
           </div>
           </SelectedCharContextProv>  
          </UserContextProv>
   
  );
}

export default App;



