import { useState } from "react";

export const CheckBoxValidate = () => {

  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  // Validation
  const validateTerms = (value) => {
    if (!value) return "You must accept terms";
    return "";
  };

  // Change
  const handleChange = (e) => {
      const checked = e.target.checked;
 
      setTerms(checked);
      setError(validateTerms(checked));
      setSubmitted(null);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validateTerms(terms);
    setError(err);

    if (err) return;

    setSubmitted("Accepted");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
        <h2 className="font-bold text-lg mb-5">Checkbox Validation</h2>
      <label>
        <input
          type="checkbox"
          checked={terms}
          onChange={handleChange}
          className="mr-5 cursor-pointer"
        />
        Accept Terms & Conditions
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={!terms} className="addBtn">
        Submit
      </button>

      {submitted && <p className="font-medium text-green-500"> Submitted Successfully</p>}

    </form>
  );
};
