import React , {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase", "success");
    }

    const handleCopy =() => {
      console.log("I am copy");
      var text= document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText (text.value);
      props.showAlert("Copied to Clipboard!", "success");
    }
    const handleClearClick = ()=>{
      // console.log("Uppercase was clicked");
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared", "success");

    }
    // const handleSentenceClick = ()=>{
    //   // console.log("Uppercase was clicked");
    //   let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    //   setText(newText);
    // }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const wordCount = (text)=>{
      let regex = /\s+\S+/;
      let numOfWords = text.split(regex);
      return numOfWords.length;
    }

    const[text, setText] = useState("");
  return (
    <>
    <div>
        <div className="mb-3" style={{color: props.mode==='dark'? 'white':'black'}} >
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#2b2f32':'white', color: props.mode==='dark'? 'white':'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>UPPERCASE</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>lowercase</button>
        {/* <button className='btn btn-primary mx-1' onClick={handleSentenceClick}>Sentence case</button> */}
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        

        
    </div>
    <div className="containter my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
      <h2>Your Summary</h2>
      <p>{text===""? 0 : wordCount(text)} words, {text.length}  characters and {text.split(". ").length - 1} sentences long.</p>
      {/* <p>{text.split(" ").length} words */}
      <p></p>
      <h2>Preview</h2>
      <p>{text}</p>
      
    </div>
    </>
  )
}
