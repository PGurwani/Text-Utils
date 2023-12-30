import React, { useState } from 'react'


export default function TextForm(props) {

  const handleUpClick = () => {
    let upper = text.toUpperCase();
    setText(upper);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick = () => {
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert("Converted to LowerCase", "success");
  }
  const handleReset = () => {
    setText(" ");
    props.showAlert("Text Cleared", "success");
  }
  const handleonChange = (event) => {
    console.log("Changed");
    setText(event.target.value) //sse state change honga aur final satte value initial state value + input given by the user honga
  }
  const [text, setText] = useState("");
  return (
    <div>
      <div className="form-group my-4" style= {{color : props.mode === 'light'?'black':'white'}} >
        <h1 className = "mb-2">{props.title}</h1>
        <label htmlFor="myBox"></label>
        <textarea className="form-control" value={text} id="myBox" rows="8" placeholder="Get Started" onChange={handleonChange} style ={{backgroundColor : props.mode === 'light'?'white': '#1f537d', color : props.mode === 'light'?'black':'white'}}></textarea>
        {/* Agar value de rahe hai tho onChange function bhi use karna hoga */}
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Click to LowerCase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReset}>Reset</button>
      <div className="container my-5" style = {{color : props.mode === 'light' ? '#042743' : 'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} characters</p>
        <p>{0.008 * (text.split(" ")).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h1>Your Text Preview</h1>
        {/* <p>{text}</p> */}
        <p>{text.length > 0 ?text:"Nothing to preview"}</p>
      </div>
    </div>
  )
}
