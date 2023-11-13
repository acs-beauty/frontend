import { SCREENS } from "@/constants";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export const useScreen = () => {
  const [query, setQuery] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  const isMobile = useMediaQuery({
    query: `(min-width: ${SCREENS.mobileStart}) and (max-width: ${SCREENS.mobileEnd})`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${SCREENS.tabletStart}) and (max-width: ${SCREENS.tabletEnd})`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${SCREENS.desktop}) `,
  });

  useEffect(() => {
    setQuery({ isMobile, isTablet, isDesktop });
  }, [isMobile, isTablet, isDesktop]);

  return query;
};
