import { SCREENS } from "@/constants";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export const useScreen = () => {
  const [query, setQuery] = useState({  
    isTablet: false,
    isDesktop: false,
  });
 
  const isTablet = useMediaQuery({
    query: `(min-width: ${SCREENS.tablet}) `,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${SCREENS.desktop}) `,
  });

  useEffect(() => {
    setQuery({ isTablet, isDesktop });
  }, [isTablet, isDesktop]);

  return query;
};
