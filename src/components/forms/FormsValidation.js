import { useState } from "react";
import FormOptimizeVersion from "./FormsOptimizeVersion";

function FormValidation() {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const handleName =(e) => {
        setName(e.target.value);
        console.log("Name changed to:", e.target.value);
    }

    const handleMobile = (e) => {
        setMobile(e.target.value);
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
            <form className="card" onSubmit={handleSubmit}>
            <h2 className="font-bold text-xl">Form Validation</h2>
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
            <FormOptimizeVersion />
        </>
    );
}

export default FormValidation;

// This is called a controlled component in React:

// Input value is controlled by state
// onChange updates state
// React re-renders with new value
// Form validation is done by checking if state values are empty
// Submit button is disabled if any field is empty
// This approach gives us full control over the form inputs and allows us to easily implement validation logic.