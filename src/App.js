import React from 'react';
import Img from './logo.svg';
import './App.css';
import Photo from './photo';
import Name from './Name';
import Mybutton from './Mybutton';

function App() {
  return (
    <div className="App">

      <Photo src={Img} />
      <Name first="" last=""/>
      <Mybutton>MyFacebook</Mybutton>
      <Mybutton>LinkedIn</Mybutton>

     
         </div>
  );
}

export default App;
