// import * as React from 'react';
 import '../Homepage.css'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 import logo from '../logo.svg';
 import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@material-ui/core/colors';
import Grid from '@mui/material/Grid';
import { useState } from 'react';


 const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 20,
   
  },
  // palette: {
  //   primary: {
  //     light: '#757ce8',
  //     main: '#3f50b5',
  //     dark: '#002884',
  //     contrastText: '#fff',
  //   },
  //   secondary: {
  //     light: '#ff7961',
  //     main: '#f44336',
  //     dark: '#ba000d',
  //     contrastText: '#000',
  //   },
  // },
});
/**
 * @param {object} props
 * @param {"volume" | "price"} [props.displayType]
 */
function increase (props){
  let {x, newNum} = props
  x=0
  newNum= x+1
   return (
     <Grid>
       <Grid item >{newNum}</Grid>
     </Grid>
   )
}
export default function Homepage(props) {
  let [clickMe, setClickMe] =useState(0);
  let x=0
  console.log('GGGGGGGGG',props)
  function increase (props){
    return x=x+1
  }
  
  return(
   
    <div className="Homepage">
    <ThemeProvider theme ={theme} >
      <Button variant="contained" size="large" >คลิกสิไม่มีอะไรเกิดขึ้น</Button>
      <Button variant="contained" size="large" color="secondary" onClick={()=>{setClickMe(clickMe+1)}} >คลิกสิเลขเพิ่มนะ</Button>
      <p>sadsad {x} {props.newNum} {clickMe}</p>
    </ThemeProvider>
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