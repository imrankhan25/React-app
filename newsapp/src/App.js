import React, { Component } from 'react'

import TextForm from './components/TextForm'
import Navbar from './components/NavBar'
//import NavBarClass from './components/NavBarClass'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';


export class App extends Component {

 
  render() {
   
    return (
      <>

 { /*  <Navbar sen="About" title= "rrr"/> 
     <NavBarClass/> 
     <div className="container">
      <TextForm heading="New look"/>
      </div> */}

      <BrowserRouter>
        <Navbar title='TextUtils' sen='About Us'  />
        <div className="container my-3">
        <Routes>
        <Route path="/" element={<TextForm heading='Enter the text to analyze below'/>} />
        <Route path="/about" element={<About />} />
      </Routes>
        </div>
      </BrowserRouter>  
     
 
      </>
    )
  }
 
 
}



export default App
