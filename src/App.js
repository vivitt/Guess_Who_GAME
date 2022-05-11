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

function App() {
  return (
    <UserContextProv >
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
                   <Route path="/game" element={<Game />} /> 
                   <Route path="/howtoplay" element={ <HowToPlay />  } />
                   <Route path="*" element={<NotFound />} />
                 </Routes>
               </main> 
             </Router>
             <Footer text={'© Viviana Yanez 2022 | Guess Who Game | Made with ♥︎ '}/>
           </div>
             
          </UserContextProv>
   
  );
}

export default App;



// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import { useParams } from 'react-router-dom';
// import NotFound from './pages/NotFound';
// import InfoMovie from './components/InfoMovie';
// import Footer from './components/Footer';
// import UserButton from './components/UserButton';

// import {UserContextProv} from "./context/UserContextProv"
// import UserFavs from "./pages/UserFavs";
// import RequireAuth from "./context/AuthenticationProv";
// import { useUserContext } from "./context/UserContextProv";
// //import movies from './movies';
// import { useLoader } from './context/LoadContext';
// import Loader from './components/Loader';

// function App() {
//   //Loader
//   //const categories =  movies.map ((item, category) => item = category.value)
//   //const items = movies;
//   const activeUser = useUserContext();
//   console.log('active user:', activeUser)
//     // //LOADER 
//     // const [loading, setLoading] = useState(false);
//     const  { isLoading }   = useLoader(); 
//   return (
//     <UserContextProv >
//        { isLoading ? ( <Loader></Loader>
//       ) : (
//     <div className="app">
//       <Router>
//         <div className="nav-bar">
//           <span className="login-logout-button" >
//           <UserButton />
//           </span>
//           <ul>
//             <li>
//               <NavLink to="/">Home </NavLink>
//             </li>
            
//             <li>
              
//               <NavLink to="/users"><i className="fa-solid fa-star"></i>My WatchList</NavLink>
             
//             </li>
//             </ul>
            
//         </div>
      
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} /> 
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/users" element={ <RequireAuth> <UserFavs /> </RequireAuth> } />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </main> 
//       </Router>
//       <Footer text={'© Viviana Yanez 2022 | Made with ♥︎ '}/>
//     </div>
//       )}
//     </UserContextProv>
    
//   );
// }

// export default App;
