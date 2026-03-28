import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically handle authentication logic, such as validating user credentials.
    // For this example, we'll assume the login is successful and navigate to the dashboard.
    navigate("/auth/dashboard");
  };

  return (
    <div className="card">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Page 🔐</h2>
      <form className="forms-card" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input className="form-control" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className="form-control" type="password" placeholder="Password" />
        </div>
        <button className="addBtn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
