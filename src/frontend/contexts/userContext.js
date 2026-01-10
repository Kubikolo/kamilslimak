import React, { createContext, useState } from "react";

export const UserContext = createContext({
  userID: null,
  setUserID: () => {},
});

export const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);

  return (
    <UserContext.Provider value={{ userID, setUserID }}>
      {children}
    </UserContext.Provider>
  );
};
