import { useState } from "react";

export const FormValidationCheckV3 = () => {

  // Single state for form data and errors
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: ""
  });

  // Separate state for errors
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: ""
  });

  // State for submitted data to display after successful submission
  const [submittedData, setSubmittedData] = useState(null);


  // onChange handler for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateName(value) }));
  };


  //Validation Functions (PURE)
  const validateName = (value) => {
    if (value.trim() === "") return "Name is required";
    if (value.length < 3) return "Minimum 3 characters";
    if (!/^[A-Za-z ]+$/.test(value)) return "Only alphabets allowed";
    return "";
  };

  const validateMobile = (value) => {
    if (value.trim() === "") return "Mobile number is required";
    if (value.length < 10) return "Minimum 10 digits";
    if (value.length > 15) return "Maximum 15 digits";
    if (!/^\d+$/.test(value)) return "Only digits allowed";
    return "";
  };

  const validateEmail = (value) => {
    if (value.trim() === "") return "Email is required";
    if (value.length < 6) return "Minimum 6 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
    return "";
  };


  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const nameErr = validateName(formData.name);
    const mobileErr = validateMobile(formData.mobile);
    const emailErr = validateEmail(formData.email);

    const newErrors = {
      name: nameErr,
      mobile: mobileErr,
      email: emailErr
    };

    setErrors(newErrors);

    if (nameErr || mobileErr || emailErr) return;

    const data = { name: formData.name, mobile: formData.mobile, email: formData.email };
    setSubmittedData(data);
  };

  return (
    <div className="card">
      <h2 className="font-bold text-lg mb-5">Form Validation (Optimize Version)</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">

          {/* Name */}
          <div>
            <input
              type="text"
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
          disabled={
            !formData.name ||
            !formData.mobile ||
            !formData.email ||
            errors.name ||
            errors.mobile ||
            errors.email
          }
        >
          Submit
        </button>
      </form>

      {/* Output */}
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