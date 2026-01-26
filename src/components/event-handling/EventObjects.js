function EventObjects(){
    const handleClick = (e) =>{
        console.log("clicked element",e.target);
        console.log("current coordinates",e.clientX,e.clientY);
        console.log("which mouse button",e.button)
    }

    return (
        <> 
            <div className="card">
                <button onClick={handleClick} className="addBtn">Hit The Button</button>
             </div>   
        </>
    )
}

export default EventObjects;

// e is the event object
// React automatically passes this object when the event happens
// Event Object is an object that contains information about the event that occurred, like the target element, mouse position, and key or button pressed.