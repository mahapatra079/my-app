function ClickEvent(){

// Using functional updater
    const handleClick = () => {
      alert("Welcome to Event Handling");
      console.log("Triggered",alert)
    // setIsOpen(prev => !prev);
    // React guarantees prev is the latest state value, even when updates are batched.
  };


  return(
    <>
       <h3>Click Event</h3>
       <button type="button" className="addBtn" onClick={handleClick}>This is Event Handling</button>

    </>
  )
}
export default ClickEvent;


