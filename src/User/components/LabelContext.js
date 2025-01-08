import React, { createContext, useState } from "react";

// Create Context
export const LabelContext = createContext();

// Context Provider Component
export const LabelProvider = ({ children }) => {
    console.log(children)
  const [labelText, setLabelText] = useState("Mumbai");
  const [CountryText, setCountryText] = useState("India");
  const [Countryid, setCountryid] = useState(101);
  const [StateText, setStateText] = useState('');

  return (
    <LabelContext.Provider value={{ labelText, setLabelText,CountryText,setCountryText,StateText,setStateText ,Countryid,setCountryid}}>
      {children}
    </LabelContext.Provider>
  );
};
