import React from 'react';
import Login from './Components/login-signup/Login/Login';
import Signup from './Components/login-signup/Signup/Signup';
import NewsFilter from './Components/news-home/NewsFilter';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TVNewsUI from "./Components/Channels/TVNewsUI";
import UserProfile from './Components/UserProfile/UserProfile';
import Weather from './Components/Weather/Weather';


function App(){
    return (
    <Router>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/home" element = {<NewsFilter/>}/>
          <Route path = "/livetv" element = {<TVNewsUI/>}/>
          <Route path = "/profile" element = {<UserProfile/>}/>
          <Route path = "/weather" element = {<Weather/>}/>
        </Routes>
    </Router>
    );
}

export default App;