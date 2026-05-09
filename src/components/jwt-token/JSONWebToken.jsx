import { useState, useEffect } from "react";
import { loginUser, fetchProfile } from "../api/auth";
import { setToken, getToken, removeToken } from "../../utils/auth";

export const JSONWebToken = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const token = getToken();
  console.log("[JWT] current token:", token);

  // Fetch profile if token exists
  useEffect(() => {
    if (token) {
      console.log("[JWT] fetching profile for token", token);
      fetchProfile(token)
        .then((data) => {
          console.log("[JWT] profile fetched", data);
          setUser(data);
        })
        .catch((err) => {
          console.error("[JWT] profile fetch failed", err);
          removeToken();
          setUser(null);
        });
    }
  }, [token]);

  // Login
  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      console.log("[JWT] login success", res);
      setToken(res.token);
      setError("");
      window.location.reload(); // simple refresh
    } catch (err) {
      console.error("[JWT] login failed", err);
      setError(err.message);
    }
  };

  // Logout
  const handleLogout = () => {
    console.log("[JWT] logout");
    removeToken();
    setUser(null);
  };

    return (
      <>
      <h2 className="font-medium">JWT Authentication</h2>
        <div className="card">

        {!token ? (
            <>
                <input
                className="form-control mb-5"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                className="form-control"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button className="addBtn" onClick={handleLogin}>Login</button>

                {error && <p style={{ color: "red" }}>{error}</p>}
            </>
        ) : (
            <>
                <h3>Welcome {user?.name}</h3>
                <p>Role: {user?.role}</p>

                <button className="addBtn" onClick={handleLogout}>Logout</button>
            </>
        )}
        </div>
    </>
  );
};

// Use cookies (HttpOnly) instead of localStorage for security
// Use Axios interceptors for automatic token attach
// Handle refresh tokens for expiry