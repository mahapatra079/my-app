
// Create an Input field. Then Implement a toggle switch that shows/hides the input field when clicked.

import { useState } from "react"

function ToggleSwitch() {
    const [show, setShow] = useState(true)

    const handleSwitch = () => {        
        setShow(!show)
    }

    return (
        <div className="show-hide">
          <h4>Toggle Switch - show & Hide</h4>
            <div className="mt-10">
                {show && <input type="text" className="form-control" placeholder="field" />}
                <button type="button" className="addBtn" onClick={handleSwitch}>Toggle Switch</button>
                {/* 
                       . show → current value - true
                       . !show → false  
                          result => hide 
                */}
            </div>
        </div>
    )
}

export default ToggleSwitch;