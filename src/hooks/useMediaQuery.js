import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [isMedia, setIsmedia] = useState(false);

  useEffect(() => {
    let isQuery = window.matchMedia(query);

    isQuery.addEventListener("change", () => setIsmedia(isQuery.matches));
    return () => {
      isQuery.removeEventListener("change", () => setIsmedia(isQuery.matches));
    };
  }, [query]);

  return isMedia;
};

export default useMediaQuery;
