

import React from "react";
import { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");

  const handleOnChange=(event)=>{
    setText(event.target.value); 
  }

  const handleUpOnClick = () => {
    setText(text.toUpperCase());
  }
  const handleLowOnClick = ()=>{
    setText(text.toLowerCase())
  }
   
  const handleESpacesOnClick=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  }
  

  const handleClearTextOnClick = () =>{
    setText(''); 
  }
  

  return (
    <div className="container w-2/3 mx-auto">
      <div>
        <h2 className="text-xl font-bold">Text Conversion Services: </h2>
        <textarea
          name="textarea"
          id="text"
          cols="120"
          rows="8"
          placeholder="Enter your text here"
          value={text}
          onChange={handleOnChange}
          
          className="border"
        ></textarea>
      </div>
      <div className="space-x-2">

      <button className="bg-slate-400 border-2 border-black rounded-lg" onClick={handleUpOnClick}>
          Convert to Upercas
        </button>

        <button className="bg-slate-400 border-2 border-black rounded-lg" disabled={text.length===0} onClick={handleLowOnClick}>
          Convert to Lowercase
        </button>
       
        <button className="bg-slate-400 border-2 border-black rounded-lg" disabled={text.length===0} onClick={handleESpacesOnClick}>
          Remove spaces
        </button>
        <button className="bg-slate-400 border-2 border-black rounded-lg" disabled={text.length===0} onClick={handleClearTextOnClick}>
          Clear Text
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold">Text summary </h2>
          <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0})).length} words, {text.length} characters </p>
        <h2 className="text-xl font-bold">Preview</h2>
        <p>{(text.length>0) ?text:'Enter text in above textarea and see preview text here'}</p>
      </div>
    </div>
  );
}
