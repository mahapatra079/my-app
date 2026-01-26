function EventHandlerProps({text}){

    const name="handler props"

    const handleClick = () => {
        console.log(`hey ${name}, is working with event handling  props ${text}`)
    }
    return(
        <button className="addBtn" onClick={handleClick}>{text}</button>
    )
}

export default EventHandlerProps;

// Handling Events in React is all about  passing functions to special props like onClick