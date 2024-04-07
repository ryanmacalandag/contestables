import { Changa, Silkscreen, Poppins  } from "next/font/google";

export const fontlogo = Changa({
  subsets: ["latin"],
  variable: '--font-logo-01',
  display: 'swap',
});

export const fontheading = Poppins({
  subsets: ["latin"],
  variable: '--font-heading',
  weight: ['200','400','500','700','900'],
  display: 'swap',
});

export const fontbody = Poppins({
  subsets: ["latin"],
  variable: '--font-body',
  weight: ['200','400','500','700','900'],
  display: 'swap',
});

export const fontlogoalt = Silkscreen({
  subsets: ["latin"],
  variable: '--font-logo-02',
  weight: '700',
});