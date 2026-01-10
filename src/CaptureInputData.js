//  Create a form that captures user input and displays it in real-time as the user types.

import { useState } from "react";

function CaptureInputData() {
    
    const [user, setUser] = useState("")
    const [user2,setUser2] = useState("")

    return(
        <div className="capture-input">
            <h4>Capture Input Data (Real-Time)</h4>
            {/* Typing → onChange → setState → re-render → display text */}
                <form>
                    <div className="mt-10">
                        <label>User 1 </label>
                        <input type="text" className="form-control" onChange={(e) => setUser(e.target.value)} />
                        <p>Text Value : {user}</p>

                    </div>
                    <div className="mt-10">
                        <label>User 2 </label>
                        <input type="text" className="form-control" onChange={(e)=>setUser2(e.target.value) } />
                         <p>Text Value : {user2}</p>
                    </div>
                </form>
        </div>
    )
}

export default CaptureInputData;