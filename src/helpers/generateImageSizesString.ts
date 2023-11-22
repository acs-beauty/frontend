import { SCREENS } from "@/constants";

export const generateImageSizesString = (
  mobileSize: string,
  tabletSize: string,
  desktopSize: string
): string => {
  return `(min-width: ${SCREENS.mobile}) ${mobileSize}, (min-width: ${SCREENS.tablet}) ${tabletSize}, (min-width: ${SCREENS.desktop}) ${desktopSize}`;
};
