// import * as React from 'react';
 import '../Homepage.css'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 import logo from '../logo.svg';

export default function Homepage() {
  return(
    <div className="Homepage">
    <Button variant="contained">คลิกสิไม่มีอะไรเกิดขึ้น</Button>
      <header className="Homepage-header">
          <img src={logo} className="Homepage-logo" alt="logo" />
          <p>
            Edit <code>src/Homepage.tsx</code> and save to reload.
          </p>
          <a
            className="Homepage-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> 
      </div>  
  )
}