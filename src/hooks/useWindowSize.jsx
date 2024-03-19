import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [value, setValue] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleChange = () => {
      setValue({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleChange);

    return () => {
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  
  return value;
};

export default useWindowSize;
