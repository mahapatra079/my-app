import { useState } from "react";

function ReversingString(){
    const[text,setText]=useState("")
    const[reverse,setReverse] = useState("")

    // logic
    const handleReverseString = () => {
        setReverse(text.split("").reverse().join(""));           
    }

    return(
    <div className="reversing-string">
        <h4 className="title">Any String value  →  Reversing the Sting </h4>
        {/*     
            text.split("")   // string → array
            .reverse()       // reverse the array
            .join("")        // array → string
            "hello"

            → ["h","e","l","l","o"]
            → ["o","l","l","e","h"]
            → "olleh"
        
        */}
        <div>
            <label>String Value:  </label>
            <input type="text" className="form-control" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <button onClick={handleReverseString} className="addBtn">Click to Reverse the String</button>

        <div> 
            <label>Revrsing The String Value </label>
            <input value={reverse} disabled={reverse !== ""}/>
        </div>
    </div>
    //
    )
}

export default ReversingString;