import React, { useState, useEffect, useRef } from "react";

export const myContext = React.createContext();

const Provider = props => {
  const isBrowser = typeof window !== "undefined";

  // State for Hamburger menu / Menu Background

  const [open, setOpen] = useState(null);
  const [width, setWidth] = useState(isBrowser && window.innerWidth);
  const setNewWidth = () => setWidth(isBrowser && window.innerWidth);

  // State for Header Animation on Scroll
  // const isZero = window.scrollTop === 0;

  const [hideNav, setHideNav] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(
    document.documentElement.scrollTop
  );
  const [anchorLink, setAnchorLink] = useState(true);

  const prevScrollOffset = useRef("");
  let prev = prevScrollOffset.current;
  const setNewOffset = () => {
    setScrollOffset(document.documentElement.scrollTop);
    if (prev < scrollOffset) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  };

  useEffect(() => {
    if (anchorLink) {
      prevScrollOffset.current = scrollOffset;
      window.addEventListener("scroll", setNewOffset);
      return () => window.removeEventListener("scroll", setNewOffset);
    }
  });

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
        hideNav,
        anchorLink,
        setAnchor: val => setAnchorLink(val),
        setNav: val => setHideNav(val),
        setValue: val => setOpen(val),
        toggleValue: () => setOpen(!open),
      }}>
      {props.children}
    </myContext.Provider>
  );
};

export default Provider;
