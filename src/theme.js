import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { createContext, useMemo, useState } from "react";

// Shades of color for dark and light mode effect
export const shades = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        blueAccent: {
          100: "#d7f2fe",
          200: "#afe5fc",
          300: "#88d7fb",
          400: "#60caf9",
          500: "#38bdf8",
          600: "#2d97c6",
          700: "#227195",
          800: "#164c63",
          900: "#0b2632",
        },
        redAccent: {
          100: "#fcd8da",
          200: "#f9b0b5",
          300: "#f68991",
          400: "#f3616c",
          500: "#f03a47",
          600: "#c02e39",
          700: "#90232b",
          800: "#60171c",
          900: "#300c0e",
        },
        white: {
          100: "#fffeff",
          200: "#fffdff",
          300: "#fffdfe",
          400: "#fffcfe",
          500: "#fffbfe",
          600: "#ccc9cb",
          700: "#999798",
          800: "#666466",
          900: "#333233",
        },
        grey: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
      },
      greenAccent: {
        100: "#cce6cc",
        200: "#99cc99",
        300: "#66b366",
        400: "#339933",
        500: "#008000",
        600: "#006600",
        700: "#004d00",
        800: "#003300",
        900: "#001a00",
    },
    yellowAccent: {
        100: "#ffffcc",
        200: "#ffff99",
        300: "#ffff66",
        400: "#ffff33",
        500: "#ffff00",
        600: "#cccc00",
        700: "#999900",
        800: "#666600",
        900: "#333300",
    },
      }
    : {
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#101624",
          500: "#fffbfe",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        blueAccent: {
          100: "#0b2632",
          200: "#164c63",
          300: "#227195",
          400: "#2d97c6",
          500: "#38bdf8",
          600: "#60caf9",
          700: "#88d7fb",
          800: "#afe5fc",
          900: "#d7f2fe",
        },
        redAccent: {
          100: "#300c0e",
          200: "#60171c",
          300: "#90232b",
          400: "#c02e39",
          500: "#f03a47",
          600: "#f3616c",
          700: "#f68991",
          800: "#f9b0b5",
          900: "#fcd8da",
        },
        white: {
          100: "#333233",
          200: "#666466",
          300: "#999798",
          400: "#ccc9cb",
          500: "#fffbfe",
          600: "#fffcfe",
          700: "#fffdfe",
          800: "#fffdff",
          900: "#fffeff",
        },
        grey: {
          50: '#212121',
          100: '#424242',
          200: '#616161',
          300: '#757575',
          400: '#9e9e9e',
          500: '#bdbdbd',
          600: '#e0e0e0',
          700: '#eeeeee',
          800: '#f5f5f5',
          900: '#fafafa',
      },
      greenAccent: {
        100: "#001a00",
        200: "#003300",
        300: "#004d00",
        400: "#006600",
        500: "#008000",
        600: "#339933",
        700: "#66b366",
        800: "#99cc99",
        900: "#cce6cc",
    },
    yellowAccent: {
        100: "#333300",
        200: "#666600",
        300: "#999900",
        400: "#cccc00",
        500: "#ffff00",
        600: "#ffff33",
        700: "#ffff66",
        800: "#ffff99",
        900: "#ffffcc",
    },
      }),
});

//Custom theme for settings for mui

export const themeSettings = (mode) => {
  const colors = shades(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            accent: {
              main: colors.redAccent[500],
            },
            background: {
              default: colors.primary[600],
            },
            text: {
                primary: "#FFFFFF",
                secondary: "#FCFCFC"
            }
          }
        : {
            primary: {
              main: colors.white[500],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            accent: {
              main: colors.redAccent[500],
            },
            background: {
              default: "#FAFAFB",
            },
            text: {
                primary: "#141b2d",
                secondary: colors.primary[400],
            }
          }),
    },
    typography: {
        fontSize: 12
    }
  };
};

//Context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

//Memorize color mode context and theme

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};





