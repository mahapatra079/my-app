import { useState } from "react";
import { Dropdown } from "../common-component/Dropdown";
import { PhoneNumber } from "../common-component/PhoneNumber";
import { TextArea } from "../common-component/TextArea";

export const ContactForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    countryCode: "+91",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [loader, setLoader] = useState(false);

  // Handle input change
  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation
 const validate = () => {    
    //nested decision-making
    const newError = {
        name: form.name ? "" : "Name is required",
        email: !form.email
        ? "Email is required"
        : (!form.email.includes("@") || !form.email.includes("."))
        ? "Invalid email format"
        : ""               
        ? "Invalid email format"
        : "", // Regular expression for basic email validation
        message: form.message ? "" : "Message is required",
        phone: form.phone ? "" : "Phone number is required",
    };
     //It’s conditional decision-making using ternary operators to generate validation messages.
     
  setError(newError);

  return Object.values(newError).every((val) => val === "");
};

  // Submit
  const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;
        
        setSubmitted(true);
        setLoader(true);

        // Simulate API call
        setTimeout(() => {
          setLoader(false);
          alert("Form submitted successfully!");
        }, 2000);
  };

    
 const option = [
 
      { label: "India (+91)", value: "+91" },
      { label: "USA (+1)", value: "+1" },
      { label: "UK (+44)", value: "+44" },
      { label: "Australia (+61)", value: "+61" },
      { label: "Canada (+1)", value: "+1" },
      { label: "Germany (+49)", value: "+49" },
      { label: "France (+33)", value: "+33" },
      { label: "Japan (+81)", value: "+81" },
      { label: "China (+86)", value: "+86" },
      { label: "Brazil (+55)", value: "+55" },
  ];
    
  return (
    <form className="card p-4" onSubmit={handleSubmit}>
      <h2 className="font-bold text-lg mb-5">Contact Form</h2>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            className="form-control cursor-pointer"
            name="name"
            value={form.name}
            onChange={handleForm}
          />
          {error.name && (
            <p className="text-red-500 text-sm mt-1">{error.name}</p>
          )}
        </div>

        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            className="form-control cursor-pointer"
            name="email"
            value={form.email}
            onChange={handleForm}
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}
        </div>

        <div>
          <label className="block mb-2">Phone:</label>
          <div className="flex items-center gap-2">
            <Dropdown
                label="Country Code"
                name="countryCode"
                value={form.countryCode}
                onChange={handleForm}
                options={option}
             />
             <PhoneNumber
                name="phone"
                value={form.phone}
                onChange={handleForm}
             />
          </div>
          {error.phone && (
            <p className="text-red-500 text-sm mt-1">{error.phone}</p>
          )}
        </div>

        <div className="col-span-2">
          <label className="block mb-2">Message:</label>
          <TextArea
            name="message"
            value={form.message}
            onChange={handleForm}
          />
          {error.message && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      </div>

      <button type="submit" className="addBtn mt-4">
        Contact Form Submit
      </button>

      {/* Submitted Data */}
      {submitted && (
        <ul className="card mt-4 p-4 border border-green-500">
          <li className="font-bold text-lg mb-3">Submitted Data:</li>
          <li className="mb-2">Name: {form.name}</li>
          <li className="mb-2">Email: {form.email}</li>
          <li className="mb-2">Message: {form.message}</li>
          <li className="mb-2">
            Phone: {form.countryCode} {form.phone}
          </li>
        </ul>
      )}

      {loader && (
        <div className="loader mt-4">Submitting...</div>
      )}
    </form>
  );
};


// A reusable, scalable form system using controlled components and composable inputs.