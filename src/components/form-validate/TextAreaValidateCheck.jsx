import { useState } from "react";

export const TextAreaValidation = () => {

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(null);

  // Validation
  const validateMessage = (value) => {
    if (!value.trim()) return "Message is required";
    if (value.length < 10) return "Minimum 10 characters";
    if (value.length > 200) return "Maximum 200 characters";
    return "";
  };

  // Change
  const handleChange = (e) => {
    const value = e.target.value;

    setMessage(value);
    setError(validateMessage(value));
    setSubmitted(null);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validateMessage(message);
    setError(err);

    if (err) return;

    setSubmitted(message);
  };

  return (
    <form onSubmit={handleSubmit} className="card">

      <h2 className="font-bold text-lg mb-5">Textarea Validation</h2>

      <textarea
        rows="4"
        placeholder="Enter your message..."
        value={message}
        onChange={handleChange}
        className="form-control"
      />

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <p className="font-medium mb-5">{message.length}/200</p>

      <button type="submit" className="addBtn" disabled={!message || error}>
        Submit
      </button>

      {/* Output */}
      {submitted && (
        <p className="text-green-500 font-medium mt-5 break-words">
          Submitted: {submitted}
        </p>
      )}

    </form>
  );
};