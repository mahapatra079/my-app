export const loginUser = async (email, password) => {
  // Fake API (you can replace with real backend)
  if (email === "admin@gmail.com" && password === "123456") {
    return {
      token: "fake-jwt-token-123456",
      
    };
  } else {
    throw new Error("Invalid credentials");
  }
};


export const fetchProfile = async (token) => {
  if (!token) throw new Error("Unauthorized");

  return {
    name: "Amit",
    role: "Admin",
  };
};