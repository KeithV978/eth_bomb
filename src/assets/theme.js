import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#d204e3",
    },
    secondary: {
      main: "#331295",
    },
    tertiary: {
      main: "#fc3d00",
    },
    background: "#01020e",
  },
  typography: {
    fontFamily: "Roboto, SUSE, LilitaOne, Open-Sans",

    h3: {
      fontFamily: '"LilitaOne", "Open-Sans"',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"LilitaOne", "Open-Sans"',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"SUSE", "Open-Sans"',
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
