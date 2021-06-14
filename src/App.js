import './App.css';
import React,{useState, Component} from "react";
import Slider from './components/slider/index';



const title = "Calculator";


const slides=[
  {"title":"title 0","text":"text 0"},
  {"title":"title 1","text":"text 1"},
    {"title":"title 2","text":"text 2"},
      {"title":"title 3","text":"text 3"},
]


function App() {




  return(<div>



        <Slider slides={slides} />
    </div>);

}

export default App;
