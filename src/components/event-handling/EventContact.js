import { Button } from "../common-component/Button"

export const EventContact = () =>{
    const handleContact = () => {
        alert("Contact Us");
    }
    return(
        <>  
            <div className="card">
                 <h3>Event Handlers as Props</h3>
                <Button text="Contact Us" onClick={handleContact} />
            </div>
        </>
    )
}