import React, { useState, useEffect, createContext, useContext } from "react";

export const ScreenWidthContext = createContext();

const ScreenWidthProvider = ({ children }) => {
  const [withResize, setWithResize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWithResize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ScreenWidthContext.Provider value={withResize}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export default ScreenWidthProvider;
