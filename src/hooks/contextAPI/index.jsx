//import { createContext, useContext } from "react";
import { createContext, use  } from "react";

export const BioContext = createContext();

//this BioProvider will use in App.jsx because from this compoenent only we are going to call child compoennt.
export const BioProvider = ({ children }) => {
  const myname = "Dinesh Kumar";
  const myage = 33;
  return (
    <BioContext.Provider value={{ myname, myage }}>
      {children}
    </BioContext.Provider>
  );
};

//custom Hooks
export const useBioContext = () => {
  const context = use(BioContext);
  if (context === undefined) {
    throw new Error("Component must be wrapped with AuthProvider");
  }
  return context;
};
