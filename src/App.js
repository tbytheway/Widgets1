import React from "react";
import Counter from "./Counter"
import Greeting from "./Greeting"
import Hide from "./Hide"
import FontSize from "./FontSize"
import TextColor from "./TextColor"
import Align from "./Align"
import Time from "./Time"
import Rgb from "./Rgb"
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      
      <Counter />
      <hr></hr>
      <Greeting />
      <hr></hr>
      <Hide />
      <hr></hr>
      <FontSize />
      <hr></hr>
      <TextColor />
      <hr></hr>
      <Align />
      <hr></hr>
      <Time />
      <hr></hr>
      <Rgb />
    </div>
  );
}
