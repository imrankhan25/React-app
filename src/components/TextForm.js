import React,{ useState } from 'react'

export default function TextForm(props) {
    
const handleUpClick = ()=>{
  //  console.log("uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
}
const handleLoClick = ()=>{
  
    let newText = text.toLowerCase();
    setText(newText)
}
const handleClearClick = ()=>{
  
  let newText = '';
  setText(newText)
}
const handleOnChange = (event)=>{
  //  console.log("on change");
    setText(event.target.value);
}
const [text,setText] = useState('Enter the text here');  

return (
<div className="container">
    <h1>{props.heading}</h1>

<div className="form-group">
<label htmlFor ="mybox"></label>
<textarea  className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" tabIndex={0}></textarea>

</div>

<button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Upper case</button>
<button onClick={handleLoClick} className="btn btn-primary mx-2">Convert to lower case</button>
<button onClick={handleClearClick} className="btn btn-primary mx-2">Clear text</button>
<div className="container">
  <h1>your text summary</h1>
  <p>{text.split(" ").length} words, {text.length} characters</p>
  <p>{0.8 * text.split(" ").length}  minutes read</p>
</div>
    </div>
  


  )
}


