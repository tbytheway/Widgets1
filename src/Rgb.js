import React, { useState } from 'react'


export default function Rgb() {


    const [red, setRed] = useState(127);
    const [green, setGreen] = useState(127);
    const [blue, setBlue] = useState(127);


  
    return(
      <div>
<div style={{backgroundColor:'rgb(' + red + ',' + green + ',' + blue + ')', height:40, width:80}}/>
<div><p>RGB {red},{green}, {blue}</p></div>
      <input 
      id="red" 
      type="range" 
      min="0" max="255" 
      value={red} 
      onChange={e => setRed(e.target.value) }
      step="1"/>
      <input 
      id="blue" 
      type="range" 
      min="0" max="255" 
      value={green} 
      onChange={e => setGreen(e.target.value) }
      step="1"/>
      <input 
      id="green" 
      type="range" 
      min="0" max="255" 
      value={blue} 
      onChange={e => setBlue(e.target.value) }
      step="1"/>
      </div>
    )
  
  
}