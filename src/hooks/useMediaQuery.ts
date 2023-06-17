import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    // CHECK IF THERE IS A DIFFERENCE IN MEDIA QUERY
    // RUN ON FIRST RENDER
    if (media.matches !== matches) {
      // SET TO MATCH
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    // MATCH IF THE WINDOWS GET RESIZED
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
