"use client";
import { createTheme } from '@mui/material/styles';
import { Merriweather } from 'next/font/google';

const merri = Merriweather({
    weight: ["400", "700", "900"],
    subsets: ["latin"],
  });


const theme = createTheme({
    typography: {
      fontFamily: merri.style.fontFamily,
      h1: {
          fontSize:"56px",
          fontWeight:"900",
      },
      h2: {
          fontSize:"48px",
          fontWeight:"700",
      },
      h3: {
          fontSize:"40px",
          fontWeight:"700",
      },
      h4: {
          fontSize:"32px",
          fontWeight:"700",
      },
      h5: {
          fontSize:"24px",
          fontWeight:"700",
      },
      h6: {
          fontSize:"20px",
          fontWeight:"700",
      }
      
    },
});
  
  export default theme;

