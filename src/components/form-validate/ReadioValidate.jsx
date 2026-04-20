import { useState } from "react";

export const RadioValidate = () => {

  const [formData, setFormData] = useState({
     gender: "",
  });

  const [errors, setErrors] = useState({
     gender: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Validation
  const validateGender = (value) => {
    if (!value) return "Please select a gender";
    return "";
  };

  //Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));

    setErrors(prev => ({
      ...prev,
      [name]: validateGender(value)
    }));

    setSubmittedData(null);
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validateGender(formData.gender);

    setErrors({ gender: err });

    if (err) return;

    setSubmittedData(formData);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 className="font-bold text-lg mb-5">Radio Button Validation</h2>

      <div className="grid grid-cols-4 gap-4 items-center">

        <label className="cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            // checked attribute is necessary to make it a controlled component and to reflect the current state in the UI
            checked={formData.gender === "male"} 
            onChange={handleChange}
            className="mr-5 cursor-pointer"
          />
          Male
        </label>

        <label className="cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
            className="mr-5 cursor-pointer"
          />
          Female
        </label>

        <label className="cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="transgender"
            checked={formData.gender === "transgender"}
            onChange={handleChange}
            className="mr-5 cursor-pointer"
          />
          Transgender
        </label>

        <label className="cursor-pointer"   >
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
            className="mr-5 cursor-pointer"
          />
          Other
        </label>

      </div>

      {errors.gender && (
        <p className="text-red-600 mt-2">{errors.gender}</p>
      )}

      <button
        type="submit"
        className="addBtn mt-3"
        disabled={!formData.gender}
      >
        Submit Gender
      </button>

      {submittedData && (
        <p className="font-medium mt-3">
          Gender Selected As: {submittedData.gender}
        </p>
      )}
    </form>
  );
};