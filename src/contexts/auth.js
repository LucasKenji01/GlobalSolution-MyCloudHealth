import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ signed: !!user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}