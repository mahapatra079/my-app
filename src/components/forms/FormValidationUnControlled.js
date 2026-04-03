import { useRef, useState } from "react";

function FormValidationUnControlled() {

    const nameRef = useRef(null); // Create a ref for the name input field 
    const [_, forceUpdate] = useState(0); 
    // Create a state variable to force re-rendering of the component when the input value changes,
    // we don't care about the actual value of this state, so we can ignore it by using an underscore (_) as the variable name
    
    const mobileRef = useRef(null); // null is the initial value of the ref, it will be updated to the DOM element once it's rendered
    const emailRef = useRef(null);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const data = { 
            name: nameRef.current.value, // Accessing the current value of the input using useRef
            mobile: mobileRef.current.value,
            email: emailRef.current.value
        }
        console.log("form data:", data);  // Log the form data to the console
    }
      const handleChange = () => {
          forceUpdate(prev => prev + 1); // trigger re-render
          console.log("Input value changed", nameRef.current?.value);
      };

    return (
        <>
            <form className="card" onSubmit={handleSubmit}>
                <h2 className="font-bold text-xl">Form Validation using useRef</h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col items-start gap-3">
                        {/* <label htmlFor="name">Name:{console.log(nameRef.current?.value)} </label> */}
                        <label htmlFor="mobile">Name:{nameRef.current?.value}</label>
                        <input type="text" id="name" ref={nameRef} name="name" required className="form-control"  onChange={handleChange}/>
                    </div>
                     <div className="flex flex-col items-start gap-3">
                        <label htmlFor="mobile">Mobile:</label>
                        <input type="tel" id="mobile" ref={mobileRef} name="mobile" required className="form-control" />
                    </div>
                     <div className="flex flex-col items-start gap-3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" ref={emailRef} name="email" required className="form-control" />
                    </div>
                </div>
                <button type="submit" className="addBtn">Submit</button>
            </form>
        </> 
    );
}
 
export default FormValidationUnControlled;