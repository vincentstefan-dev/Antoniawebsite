import {
  Cormorant_Garamond,
  Montserrat,
  Luxurious_Script,
} from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const luxuriousScript = Luxurious_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luxurious-script",
});

export const forestFonts = `${cormorant.variable} ${montserrat.variable} ${luxuriousScript.variable}`;