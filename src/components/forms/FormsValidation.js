import { useState } from "react";
import FormOptimizeVersion from "./FormsOptimizeVersion";
import FormValidationUnControlled from "./FormValidationUnControlled";
import FormValidationRenderingBrowser from "./FormValidationRenderingBrowser";

function FormValidation() {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const handleName =(e) => {
        setName(e.target.value);
        console.log("Name changed to:", e.target.value);
    }

    const handleMobile = (e) => {
        setMobile(e.target.value);// Update the mobile state with the current value of the input field  
        console.log("Mobile changed to:", e.target.value);

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log("Email changed to:", e.target.value);
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted with values:", { name, mobile, email });
    }

    return (
        <>
            <div className="card">
                <h1 className="font-bold text-xl">Form Validation</h1>
                <form className="card" onSubmit={handleSubmit}>
                 <h2 className="font-bold text-xl">Form Validation - Controlled Components (State Mangement)</h2>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="name" className="text-xs truncate w-full">Name: {name}</label>
                            <input type="text" id="name" name="name" value={name} required onChange={handleName} className="form-control" />
                            { !name && <span className="text-sm text-red-500"> Required *</span> }
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="mobile" className="text-xs truncate w-full">Mobile: {mobile}</label>
                            <input type="tel" id="mobile" name="mobile" value={mobile} required onChange={handleMobile} className="form-control" />
                            { !mobile && <span className="text-sm text-red-500"> Required *</span> }    
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="email" className="text-xs truncate w-full">Email: {email}</label>
                            <input type="email" id="email" name="email" value={email} required onChange={handleEmail} className="form-control " />
                            { !email && <span className="text-sm text-red-500"> Required *</span> }
                        </div>
                    </div>
                  <button type="submit" className="addBtn" disabled={!name || !mobile || !email}>Submit</button>
                </form>
                <>
                  <FormOptimizeVersion />
                  <FormValidationUnControlled/>
                  <FormValidationRenderingBrowser />
                </>
            </div>
        </>
    );
}

export default FormValidation;

// Can we use useRef instead of useState?

// Yes, we can use useRef for uncontrolled components, but for forms that require validation,
// UI updates, or dynamic feedback, useState is preferred because it keeps the UI in sync with the data.

// Problem with useRef for form handling:
  // My  current form has:

    // Live value display (Name: {form.name})
    // Validation messages
    // Disabled button logic
    // These features rely on state updates to trigger re-renders, which useRef does not provide.
 
// With useRef, you lose all of this easily

   