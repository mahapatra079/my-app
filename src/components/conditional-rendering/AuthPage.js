import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import DashboardPage from "../auth/Dashboard";

function Login() {
    return <LoginForm />;
    // Render the LoginForm component when the user navigates to the login route
}

function ProtectedPage() {
  const isLoggedIn = false; // This should be replaced with actual authentication logic
  console.log('isLoggedIn:', isLoggedIn);
    isLoggedIn ? console.log('Rendering Dashboard') : console.log('Redirecting to Login');
    // For debugging: Log the value of isLoggedIn and the rendering decision
    return isLoggedIn ? <DashboardPage /> : <Navigate to="/auth/login" />;
    // If the user is logged in, render the DashboardPage; otherwise, redirect to the Login page
}

function AuthPage() {
  return (
    <Routes>
      <Route index element={<Navigate to="dashboard" />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<ProtectedPage />} />
    </Routes>
  );
}

export default AuthPage;