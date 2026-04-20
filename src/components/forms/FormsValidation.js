import { useState } from "react";
import FormOptimizeVersion from "./FormsOptimizeVersion";
import FormValidationUnControlled from "./FormValidationUnControlled";
import UseFormConditionally from "./UseFormConditionally";
import UseForm from "./UserForm";
import DeleteUseForm from "./DeleteUseForm";

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
                <h1 className="font-bold text-xl">Basic Form Validation</h1>
                <form className="card" onSubmit={handleSubmit}>
                 <h2 className="font-bold text-xl">Form Validation - Controlled Components (State Mangement)</h2>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="name" className="text-xs truncate w-full">Name: {name}</label>
                            <input type="text" id="name" name="name" value={name} onChange={handleName} className="form-control" />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="mobile" className="text-xs truncate w-full">Mobile: {mobile}</label>
                            <input type="text" id="mobile" name="mobile" value={mobile} onChange={handleMobile} className="form-control" />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="email" className="text-xs truncate w-full">Email: {email}</label>
                            <input type="email" id="email" name="email" value={email} onChange={handleEmail} className="form-control " />
                        </div>
                    </div>
                  <button type="submit" className="addBtn">Submit</button>
                </form>
                <>
                  <FormOptimizeVersion />
                  <FormValidationUnControlled/>
                  <UseFormConditionally />
                  <UseForm/>
                  <DeleteUseForm/>
                </>
            </div>
        </>
    );
}

export default FormValidation;

   