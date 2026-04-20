import { useState } from "react"

export const FormValidationCheckV1 = () => {

  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [submittedData, setSubmittedData] = useState(null)
    const [error, setError] = useState("");

  
    const handleName = (e) => {
        setName(e.target.value);
        console.log("name", e.target.value)
    }

    const handleMobile = (e) => {
        setMobile(e.target.value)
        console.log("mobile", e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log("email", e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, mobile, email }
        
        setSubmittedData(data);
        console.log("submitted form :", data)
        
        validateName(); // Call validation function before submission
        if (error === "" && name !== "") {
            alert("Form Submitted");
            }
    }

    // Validation function for the name field
    const validateName = () => {
        if (name.trim() === "") {
        setError("Name is required");
        } else if (name.length < 3) {
        setError("Minimum 3 characters");
        } else if (!/^[A-Za-z ]+$/.test(name)) {
        setError("Only alphabets allowed");
        } else {
        setError(""); // no error
        }
  };

    return (
        <>
        <div className="card">
                <form  onsSubmit={handleSubmit}>
                     <h1 className="font-bold text-lg">Form Validation Checks version 1 - (State-based function) </h1>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="name" className="text-xs truncate w-full">Name: {name}</label>
                            <input type="text" id="name" name="name" value={name} onChange={handleName} onBlur={validateName} className="form-control" />
                            {error && <span className="text-red-500">{error}</span>}
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="mobile" className="text-xs truncate w-full">Mobile: {mobile}</label>
                            <input type="text" id="mobile" name="mobile" value={mobile} onChange={handleMobile} className="form-control" />
                            {!mobile && <span className="text-red-500">Requiered *</span>}
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <label htmlFor="email" className="text-xs truncate w-full">Email: {email}</label>
                            <input type="email" id="email" name="email" value={email} onChange={handleEmail} className="form-control " />
                            {!email && <span className="text-red-500">Requiered *</span>}
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="addBtn" disabled={!name || !mobile || !email}>
                        Submit
                    </button>                    
                </form>
                <ul>
                    {submittedData && (
                        <li>
                            <strong>Submitted Data:</strong>
                            <ul>
                                <li>Name: {submittedData.name}</li>
                                <li>Mobile: {submittedData.mobile}</li>
                                <li>Email: {submittedData.email}</li>
                            </ul>
                        </li>
                    )}
            </ul>
        </div>
        </>
    );
}
 
// Valudation Checks - Requirement for Name Field
    // 1. Required field → Name should not be empty.
    // 2. Minimum length → At least 3 characters
    // 3. Only alphabets → No numbers or special characters allowed
    

// name.trim() === ""
  // trim() removes spaces from start and end
  //  " " → becomes ""

 
// name.length < 3
  // Prevents very short names like "A" or "Jo"  

//RegEx (Regular Expression) is a pattern used to check if a string follows certain rules.
    // [] → allowed characters
    // ^ and $ → full string validation
    // + → one or more
    // returns true and false based on the validation on the field