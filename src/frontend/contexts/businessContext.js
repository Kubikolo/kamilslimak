import React, { createContext, useState } from "react";

// Tworzymy context
export const BusinessContext = createContext({
  businessID: null,
  setBusinessID: () => {}
});

// Provider, który owija całą aplikację / odpowiednią część
export const BusinessProvider = ({ children }) => {
  const [businessID, setBusinessID] = useState(null);

  return (
    <BusinessContext.Provider value={{ businessID, setBusinessID }}>
      {children}
    </BusinessContext.Provider>
  );
};
