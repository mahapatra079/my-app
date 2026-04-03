import { useState } from "react";

function FormOptimizeVersion() {

    const [form,setForm] = useState({ // Single state object to hold all form fields
        name: '',  // Single state object to hold all form fields
        mobile: '',
        email: ''   // It also allows us to easily add more fields in the future without needing to create new state variables
    });

    const handleChange = (e) => {
        const {name,value} = e.target; // Destructure name and value from the event target
        setForm(prevState => ({  
            ...prevState,  // Spread the previous state to keep other fields unchanged
            [name]: value  // Update the specific field that changed
        }));
        console.log(`${name} changed to:`, value); // Log the changed field and its new value
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted with values:", form);
    }

    return (
        <>
         <form className="card" onSubmit={handleSubmit}>
            <h2 className="font-bold text-xl">Form Validation - Optimized Version</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col items-start gap-3">
                    <label htmlFor="name" className="text-xs truncate w-full">Name: {form.name}</label>
                    <input type="text" id="name" name="name" value={form.name} required onChange={handleChange} className="form-control" />
                    { !form.name && <span className="text-sm text-red-500"> Required *</span> }
                </div>
                <div className="flex flex-col items-start gap-3">
                    <label htmlFor="mobile" className="text-xs truncate w-full">Mobile: {form.mobile}</label>
                    <input type="tel" id="mobile" name="mobile" value={form.mobile} required onChange={handleChange} className="form-control" />
                    { !form.mobile && <span className="text-sm text-red-500"> Required *</span> }    
                </div>
                <div className="flex flex-col items-start gap-3">
                    <label htmlFor="email" className="text-xs truncate w-full">Email: {form.email}</label>
                    <input type="email" id="email" name="email" value={form.email} required onChange={handleChange} className="form-control " />
                    { !form.email && <span className="text-sm text-red-500"> Required *</span> }
                </div>
            </div>
              <button type="submit" className="addBtn" disabled={!form.name || !form.mobile || !form.email}>Submit</button>
            </form>
        </>
    );
}

export default FormOptimizeVersion;