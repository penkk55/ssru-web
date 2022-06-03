 import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import {  Routes, Route} from "react-router-dom";
import AppHeader from './AppHeader';
import Homepage  from './pages/Homepage';

function App() {
  const token = localStorage.getItem("accessToken")
  if(!token){
    return <Signin/>
    
    // <div className="App">
    // <AppHeader/>
    // <Routes>
    //     <Route path ="/" element={<Homepage />}/>
    //     {/* <Route path="profile" element={<Profile />} /> */}
    //     <Route path="signin" element={<Signin />} /> 
    // </Routes>
    // </div>


    
  } 
  else
    return (
      <div className="App">
        <AppHeader/>
        <Routes>
            <Route path ="/" element={<Homepage />}/>
            <Route path="profile" element={<Profile />} />
            <Route path="signin" element={<Signin />} /> 
        </Routes>


        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
}

export default App;
