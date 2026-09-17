import { useState } from "react";

function LoginAPiButtonCall() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      console.log("API Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
    };
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();

    //     console.log(data);
    // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            id="name"
            onChange={handleName}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            id="email"
            onChange={handleEmail}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginAPiButtonCall;