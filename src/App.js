import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import AuthDetail from "./components/AuthDetail";
import Home from "./components/Home";
import Puzzle from "./components/Puzzle";
import Leaderboard from './components/Leaderboard';
import Admin from './components/Admin';
import Contact from "./components/Contact";
import SignInasAdmin from "./components/SignInasAdmin";
import Social from "./components/Social";
import './App.css'

function App() {
    return (


      <div className="main-app">
        <BrowserRouter>
         
      <Routes>
        <Route exact path="/Leaderboard" element={<Leaderboard/>}/>
        <Route exact path="/Puzzle" element={<Puzzle/>}/>
        <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/admin" element={<Admin />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/SignInasAdmin" element={<SignInasAdmin/>}/>
        <Route exact path="/Social" element={< Social />}/>
        
      </Routes>
      </BrowserRouter>
      <footer>
        Developed by Anurag
      </footer>
      </div>
     
    );
}
export default App;