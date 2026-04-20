import { useState } from "react";

export const FormValidationCheckV3 = () => {

  const [formData, setFormData] = useState(
    {
      name: "",
      mobile: "",
      email: ""
    }
  );


  const [errors, setErrors] = useState(
    {
      name: "",
      mobile: "",
      email: ""
    }
  );

  // to display submitted data below the form
  const [submittedData, setSubmittedData] = useState(null); 

  //  Validation map — field name → validator 
  const validators = {
    name: validateName, // points to the validateName function
    mobile: validateMobile,
    email: validateEmail,
  };

  //  Single onChange — picks the right validator by field name
  const handleChange = (e) => {
    const { name, value } = e.target;// name is the field name (e.g. "name", "mobile", "email")
    setFormData(prev => ({ ...prev, [name]: value }));// update form data
    setErrors(prev => ({ ...prev, [name]: validators[name](value) })); // validate on change for instant feedback
  };

  // Pure validation functions

  function validateName(value) {
    if (value.trim() === "") return "Name is required";
    if (value.length < 3) return "Minimum 3 characters";
    if (!/^[A-Za-z ]+$/.test(value)) return "Only alphabets allowed";
    return "";
  }

  function validateMobile(value) {
    if (value.trim() === "") return "Mobile number is required";
    if (!/^\d+$/.test(value)) return "Only digits allowed";
    if (value.length < 10) return "Minimum 10 digits";
    if (value.length > 15) return "Maximum 15 digits";
    return "";
  }

  function validateEmail(value) {
    if (value.trim() === "") return "Email is required";
    if (value.length < 6) return "Minimum 6 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
    return "";
  }

  // Submit 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run all validations together so all errors show at once
    const newErrors = {
      name: validateName(formData.name),
      mobile: validateMobile(formData.mobile),
      email: validateEmail(formData.email),
    };

      setErrors(newErrors);
      setSubmittedData({ ...formData });
  };

  return (
    <div className="card">
      <h2 className="font-bold text-lg mb-5">Form Validation (Optimized V3)</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"              
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>

          {/* Mobile */}
          <div>
            <input
              type="text"
              name="mobile"             
              placeholder="Enter Mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="form-control"
            />
            {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"            
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>

        </div>

        <button
          className="addBtn"
          type="submit"
          disabled={!formData.name || !formData.mobile || !formData.email ||
            !!errors.name || !!errors.mobile || !!errors.email  
          }
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Mobile: {submittedData.mobile}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};