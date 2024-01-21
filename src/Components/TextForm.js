import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !", "success");
    }
    
    const handleLoClick = ()=>{
        // console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !", "success");

    }

    const handleCapitalizeClick = ()=>{
        let newText = text.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalize !", "success");
    }

    
    const handleReverseClick = ()=>{
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Converted to Reverse !", "success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard !", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/).join(" ")
        setText(newText);
        props.showAlert("Extra spaces has been  removed !", "success");
    }

    const handleClear = ()=>{
        setText('');
        props.showAlert("Text Cleard !", "success");
    }
    
    const [text, setText] = useState("");
    // text = "new text"; //Wrong way to change the state
  // setText("new text"); //Correct way to change the state
    
    return (
        <>
    <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>Capitalize each Word</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse Word</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
         <h3>Preview</h3>
         <p>{text.length>0?text:"Enter something to preview."}</p>
    </div>
  
    </>
  )

}