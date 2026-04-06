import { useState } from "react";

function UseForm() {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

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
        const data = { name, mobile, email };
        setSubmittedData(data); // Update submittedData state with the new data
        console.log("Form submitted with values:", data);
    }

    return (
        <>
            <form className="card border-4 border-green-500" onSubmit={handleSubmit}>
                <h2 className="font-bold text-xl">Form Validation - Rendering in Browser (Decision Making)</h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col items-start gap-3">
                        <label htmlFor="name" className="text-xs truncate w-full">Name: {name}</label>
                        <input type="text" id="name" name="name" value={name} required onChange={handleName} className="form-control" />
                        { !name && <span className="text-sm text-red-500"> Required *</span> }
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <label htmlFor="mobile" className="text-xs truncate w-full">Mobile: {mobile}</label>
                        <input type="text" id="mobile" name="mobile" value={mobile} required onChange={handleMobile} className="form-control" />
                        { !mobile && <span className="text-sm text-red-500"> Required *</span> }    
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <label htmlFor="email" className="text-xs truncate w-full">Email: {email}</label>
                        <input type="email" id="email" name="email" value={email} required onChange={handleEmail} className="form-control " />
                        { !email && <span className="text-sm text-red-500"> Required *</span> }
                    </div>
                </div>
                <button type="submit" className="addBtn" disabled={!name || !mobile || !email}>Submit</button>
                {/* Show submitted data */}
                {submittedData ? (
                    <div className="mt-10 p-4 border-2 border-green-500 rounded">
                        <h3 className="font-bold text-xl">Submitted Data: Rendering on Browser</h3>
                        <p className="font-medium text-lg">Name: {submittedData.name}</p>
                        <p className="font-medium text-lg">Mobile: {submittedData.mobile}</p>
                        <p className="font-medium text-lg">Email: {submittedData.email}</p>
                    </div>
                ) : (
                    <div className="mt-10 p-4 border-2 border-yellow-500 rounded">
                        <h3 className="font-bold text-xl">No data submitted yet</h3>
                    </div>
                )}
            </form>
                
        </>
    );
}

export default UseForm;

   