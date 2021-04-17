import React, { useState, useEffect } from "react";

export const myContext = React.createContext();

const Provider = props => {
  const isBrowser = typeof window !== "undefined";

  // State for Hamburger menu / Menu Background

  const [open, setOpen] = useState(null);
  const [width, setWidth] = useState(isBrowser && window.innerWidth);
  const setNewWidth = () => setWidth(isBrowser && window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", setNewWidth);
    return () => window.removeEventListener("resize", setNewWidth);
  });

  if (open === false && width > 768) {
    setOpen(null);
  }

  return (
    <myContext.Provider
      value={{
        open,
        setValue: val => setOpen(val),
        toggleValue: () => setOpen(!open),
      }}>
      {props.children}
    </myContext.Provider>
  );
};

export default Provider;
