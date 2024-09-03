import React, { Component } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export class App extends Component {

 
  render() {
    // var mybox = {
    //   fontSize: 80,  
    //      fontFamily: 'Courier',  

    //      color: '#0047ab'  
    // }
    return (
      <>
     <Navbar sen="About" title="TextUtils"/>
     <div className="container">
      <TextForm heading="New look"/>
      </div>
     
 
      </>
    )
  }
 
 
}

export default App
