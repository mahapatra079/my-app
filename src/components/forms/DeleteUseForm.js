import { useState } from "react";

function DeleteUseForm() {

    const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data
    
    const [form,setForm] = useState({
            name: '',  
            mobile: '',
            email: ''
    });
    
    const handleChange = (e) => { 
        const{name,value} = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setSubmittedData(form); // Update submittedData state with the new data
        console.log("Form submitted with values:", form);
    }

    const handleDelete = () => {
        setSubmittedData(null) // Clear the submitted data to simulate deletion
        console.log("Data deleted");
    }

    return (
        <>
            <form className="card border-4 border-orange-500" onSubmit={handleSubmit}>
                <h2 className="font-bold text-xl">Form Validation - Rendering in Browser (Deleting)</h2>
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
                {/* Show submitted data */}
                {submittedData ? (
                    <div className="mt-10 p-4 border-2 border-green-500 rounded">
                        <h3 className="font-bold text-xl">Submitted Data: Rendering on Browser</h3>
                        <p className="font-medium text-lg">Name: {submittedData.name}</p>
                        <p className="font-medium text-lg">Mobile: {submittedData.mobile}</p>
                        <p className="font-medium text-lg">Email: {submittedData.email}</p>
                        <div className="flex gap-4 w-[50%] justify-end">
                            <button className="addBtn" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                ) : (
                    <div className="mt-10 p-4 border-2 border-yellow-600 rounded">
                        <h3 className="font-bold text-xl">No data submitted yet</h3>
                    </div>
                )}
            </form>
                
        </>
    );
}

export default DeleteUseForm;


// Editing and deleting are not part of form validation.Validation is only used to verify user input before submission.
// However, in real - world applications, forms are often part of CRUD operations, where editing and deleting are added to manage submitted data

// Without Edit/Delete (Validation Only)
    // User enters data
    // Validate
    // Submit

// Enough for:

    // Login forms
    // Registration forms
    // Contact forms
 
    
// With Edit/Delete (Full CRUD)
    
    // User submits data
    // Data is stored
    // User edits or deletes later
 
//Used in:

    // Admin dashboards
    // User management systems
    // Todo apps  