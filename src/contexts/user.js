import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {

  const [cadastrado, setCadastrado] = useState(null)

  return (
    <AuthContext.Provider value={{ register: !!cadastrado, setCadastrado }}>
      {children}
    </AuthContext.Provider>
  )
}