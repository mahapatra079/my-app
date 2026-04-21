import { useState } from "react";

export const ToggleSwitchValidate = () => {

  const [isOn, setIsOn] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Validation
  const validateToggle = (value) => {
    if (!value) return "Please enable this option";
    return "";
  };

  // Toggle
  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);

    setError(validateToggle(newValue)); // validate on change
    setSubmitted(false);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validateToggle(isOn);
    setError(err);

    if (err) return;

    setSubmitted(true);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 className="font-bold text-lg mb-5">Toggle Switch Validation</h2>

      <div className="flex items-center gap-4">

        <label className="toggle">
          <input
            type="checkbox"
            checked={isOn}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>

        <p className="font-medium">Status: {isOn ? "ON" : "OFF"}</p>
      </div>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      <button
        type="submit"
        className="addBtn mt-3"
        disabled={!isOn}
      >
        Submit
      </button>

      {submitted && (
        <p className="text-green-600 mt-3 font-medium">
          Toggle enabled successfully
        </p>
      )}
    </form>
  );
};
 
//Toggle Switch represents a boolean state (ON/OFF, true/false).

// UI component used to toggle between two states, often used for settings or preferences:

    // Enable / Disable settings
    // Turn ON / OFF features
    
    //true  → ON  
    //false → OFF

// Validation for Toggle Switch:
    //must be ON before submit