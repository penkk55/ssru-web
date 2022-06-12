import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// import Profile from './pages/Profile';
// import Signin from './pages/Signin';
// v2
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// {/* <Routes>
// <Route path ="/" element={<App />}>
// <Route path="Profile" element={<Profile />} />
// <Route path="Signin" element={<Signin />} /> 
// </Route>.
// </Routes> */}