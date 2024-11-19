"use client";

import React, { createContext, useContext, useState } from "react";

// Define the context value shape
interface AppContextType {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppContext.Provider value={{ drawerOpen, setDrawerOpen }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for consuming the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
