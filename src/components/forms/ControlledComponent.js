import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered Name: " + name);
  };

  return (
    <form onSubmit={handleSubmit} className="card forms-card">
      <h5>Controlled Component</h5>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Enter name" 
        className="form-control"
      />
      <button type="submit" className="addBtn">Submit</button>
    </form>
  );
}

export default ControlledComponent;

// What’s Happening Here?

  //  - Input value is stored in useState
  //  - value={ name } makes React control the input
  //  - onChange updates the state
  //  - React re-renders with new value