import { useState } from "react"

function Toggle(){

    const[isOn, SetIsOn]=useState(false)
    // useStae - functional component inialtization
    // this.state{} - class component

    return(
        <div className="toggle">
            <h4>Basic example of State</h4>
            <button type="button" className="mt-10" onClick={()=> SetIsOn(!isOn)}>
                {isOn ? "On" : "Off"}
            </button>
        </div>
    )
}
export default Toggle