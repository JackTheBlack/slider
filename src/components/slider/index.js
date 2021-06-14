import React,{useState,useEffect} from "react";




function Slider(props){


const [i,setI]=useState(0);

return(
 <div>
          <p>{props.slides.length}</p>
          <button data-testid="button-restart" disabled={i==0} onClick={()=>setI(0)}>Restart</button>
      <button data-testid="button-prev" disabled={i==0} onClick={()=>setI(i-1)}>Previous</button>
     
      <h1 data-testid="title">{props.slides[i] && props.slides[i].title}</h1>
       <p  data-testid="text" >{props.slides[i] && props.slides[i].text}</p>
       <button   data-testid="button-next"  disabled={i===props.slides.length } onClick={()=>setI(i+1)}>Next</button>
  </div>
);




}
export default Slider;
