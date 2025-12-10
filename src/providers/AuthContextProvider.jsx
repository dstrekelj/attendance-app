import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const users = [
  { username: "user1@mailinator.com", password: "password1" },
  { username: "user2@mailinator.com", password: "password2" },
];

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = (username, password) => {
    const user = users.find((u) => u.username === username);
    if (user && user.password === password) {
      setUser(username);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  const value = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
