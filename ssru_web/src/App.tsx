import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import {  Routes, Route} from "react-router-dom";
import AppHeader from './AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Routes>
          {/* <Route path ="/" element={<App />}/> */}
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
