import React , { useState } from 'react'


export default function TextArea(props) {

    const handelup=()=>{
        let newtext= text.toUpperCase();
        settext(newtext);
    }

    const handello=()=>{
        let newtext=text.toLowerCase();
        settext(newtext);
    }

    const handelclear=()=>{
        let newtext="";
        settext(newtext);
    }

    const handelcopy=()=>{
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const onchangehandel=(event)=>{
        settext(event.target.value);
    }
    const [text, settext] = useState("");

    return (
        <>
        
        <div className="mb-3" style={{color:props.mode === 'light'?'black':'white'}}>
        <h1 className='heading mb-4 mt-2'>{props.text}</h1>
        <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.mode === 'light'?'whitesmoke':'#333', color:props.mode === 'light'?'black':'white'}} onChange={onchangehandel} rows="8"></textarea>
        </div>
        <div className='text-center'>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1 " onClick={handelup}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handello}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handelcopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handelclear}>Clear Text</button>
        </div>

        <div className="container my-2 text-center" style={{color:props.mode === 'light'?'black':'white'}}>
            <h2>Your text sumary</h2>
            <p>You have used {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} Characters</p>
            <h2>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read whole content</h2>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>

     </>
    )
}
