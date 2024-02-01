import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import About from './components/About';
import React , { useState } from 'react'

// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light') 

  const toggelswitch=()=>{
    if(mode === 'light')
    {
      setmode('dark')
      document.body.style.backgroundColor='grey';
    }
    else
    {
      setmode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="Textutils" home="Home" toggelswitch={toggelswitch} mode={mode}/>
    <TextArea mode={mode} text="Text-Utils - word counter, character counter"/>
      {/* <Routes>
          <Route path="/about"
           element={<About mode={mode}/>}>
          </Route>
            <Route path="/"
            element={<TextArea mode={mode} text="Text-Utils - word counter, character counter"/>}>
          </Route>
    </Routes>
    </BrowserRouter> */}
    </>
  );
}
export default App;
