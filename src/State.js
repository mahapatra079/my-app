import { useState } from "react"

function Toggle(){

    const[isOn, SetIsOn]=useState(false)
    // useStae - functional component inialtization
    // this.state{} - class component

    return(
        <div className="toggle">
            <button onClick={()=> SetIsOn(!isOn)}>
                {isOn ? "On" : "Off"}
            </button>
        </div>
    )
}
export default Toggle