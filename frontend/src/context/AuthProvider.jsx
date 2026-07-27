import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import api from "../services/api";


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }

    setLoading(false);
  }, []);

  async function login() {
    setLoading(true);

    try {
      const response = await api.post("/auth/guest");
      const { user: userData, token: tokenData } = response.data;

      localStorage.setItem("user", JSON.stringfy(userData));
      localStorage.setItem("token", tokenData);

      setUser(userData);
      setToken(tokenData);
    } catch (error) {
      console.error("Error no login:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);
    setToken(null);
  }

  return (
   <AuthContext.Provider
      value={{
         user,
         token,
         loading,
         isAuthenticated: !!user,
         login,
         logout,
      }}
   >
      {children}
   </AuthContext.Provider>
  )
}


