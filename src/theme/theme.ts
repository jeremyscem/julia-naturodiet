"use client";
import { createTheme } from '@mui/material/styles';
import { Merriweather } from 'next/font/google';
import { colors } from './colors';

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
      },
      body1: {
          fontSize:"18px",
          fontWeight:"400",
        },
        body2: {
          fontSize:"16px",
          fontWeight:"600",
        }
      
    },
    components: {
        MuiButton: {
            variants: [
                {
                  props: { variant: 'contained', color: 'primary' },
                  style: {
                    backgroundColor: colors.black,
                    color: colors.white,
                    borderRadius:"12px",
                    height:"40px",
                    fontSize:"16px",
                    fontWeight:"700",
                    padding:"0 24px",
                    fontFamily:"Lora",
                    textTransform:"none",
                    boxShadow:"none",
                  },
                },{
                    props: { variant: 'contained', color: 'secondary' },
                    style: {
                      backgroundColor: colors.neutral,
                      color: colors.black,
                      borderRadius:"12px",
                      height:"40px",
                      fontSize:"16px",
                      fontWeight:"700",
                      padding:"0 24px",
                      fontFamily:"Lora",
                      textTransform:"none",
                      border:`1px solid ${colors.black}`,
                      boxShadow:"none",
                    },
                  },
              ],
              
        }
    }
});
  
  export default theme;

