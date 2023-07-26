import { Montserrat, Roboto, Inter } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
});

export const roboto = Roboto({
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
});

export const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic"],
});
