import  { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered Name: " + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h5>Unctrolled Component</h5>
      <input type="text" ref={inputRef} placeholder="Enter name" className="form-control" />
      <button type="submit" className="addBtn">Submit</button>
    </form>
    // The DOM controls the value, not React.
  );
}

export default UncontrolledComponent;


// What’s happening here?

  // useRef() creates a reference to the input

  // React does NOT store input value in state

  // On submit, we directly read the value from the DOM using inputRef.current.value

  // This is an uncontrolled component because React does not control the input value.