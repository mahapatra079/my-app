import React, {useRef} from "react"
function Reference(){
  
  const inputRef = useRef()
  
  const handleFocus = () => {
    inputRef.current.focus()
    console.log(inputRef.current)
  }
  return(
      <div className="card">
         <input ref={inputRef} className="form-control"/>
         <button type="button" onClick={handleFocus} className="addBtn">Hey Reference focus on me</button>
      </div>
    );
}

export default Reference;

// inputRef.current is successfully pointing to the actual DOM input element
// focus() is working correctly when the button is clicked
// The ref is properly attached to the input

