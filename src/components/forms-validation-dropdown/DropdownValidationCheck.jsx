import { useState } from "react";

export const DropdownValidationCheck = () => {

  const [formData, setFormData] = useState({
    country: "",
  });

  const [errors, setErrors] = useState({
    country: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  //  Validation
  const validateCountry = (value) => {
      if (!value) return "Please select a country";
      if (!["India", "USA"].includes(value)) return "Invalid country selected"; // just in case someone manipulates the DOM
    //   if (value === "India") return "Sorry, we do not serve India yet";
    //   if (value === "USA") return "Sorry, we do not serve USA yet"; 
      if (value === "Other") return "Sorry, we do not serve your country yet";
      if (value === "Select Country") return "Please select a country";
    return "";
  };

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value })); // update form data

    setErrors(prev => ({
      ...prev,
      [name]: validateCountry(value) // validate on change for instant feedback
    }));

    setSubmittedData(null); // reset on change
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const countryError = validateCountry(formData.country);

    setErrors({ country: countryError });

    if (countryError) return;

    setSubmittedData(formData);
  };

  return (
    <div className="card">
      <h2 className="font-bold text-lg mb-5">Dropdown Validation Check</h2>

      <form onSubmit={handleSubmit}>

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="form-control"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Other">Other</option>
        </select>

        {errors.country && (
          <p className="text-red-600">{errors.country}</p>
        )}

        <button type="submit" disabled={!formData.country || errors.country} className="addBtn mt-4">
          Submit
        </button>

      </form>

      {/* Output */}
      {submittedData && (
        <p className="text-green-600 font-medium">
          Submitted Data: {submittedData.country}
        </p>
      )}
    </div>
  );
};