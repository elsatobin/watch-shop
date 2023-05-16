import { useState } from "react";
import Layout from "@/Components/Layout";
import "@/styles/globals.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Theme, { myTheme } from "@/Components/Theme";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }) {
  const [toggleDark, settoggleDark] = useState(true);

  // const myTheme = createTheme({
  //   palette: {
  //     mode: toggleDark ? "dark" : "light",
  //     primary: {
  //       main: "#3f51b5",
  //     },
  //     secondary: {
  //       main: "#a8741a",
  //       MuiButton: {
  //         hover: { backgroundColor: "#a8741a" },
  //       },
  //     },
  //   },
  //   typography: {
  //     fontFamily: "Rubik",
  //     h2: {
  //       fontFamily: "Prata",
  //     },
  //     subtitle1: {
  //       fontWeight: 500,
  //     },
  //   },
  //   // overrides: {
  //   MuiButton: {
  //     outlinedSecondary: {
  //       "&:hover": {
  //         color: "#fff",
  //         backgroundColor: "#a8741a", // تعيين لون الخلفية عند التحويم إلى اللون الثانوي
  //       },
  //     },
  //   },
  //   // },
  // });

  const myTheme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
      primary: {
        main: "#a8741a",
      },
      secondary: {
        main: "#252525",
      },
      pwhite: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: "Rubik",
      h2: {
        fontFamily: "Prata",
      },
      subtitle1: {
        fontWeight: 700,
      },
      body1: {
        fontWeight: 600,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          // outlinedPrimary: {
          "&:hover": {
            color: "#fff",
            backgroundColor: "#a8741a",
          },
          // },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      {/* <Theme /> */}
      <Layout toggleDark={toggleDark} settoggleDark={settoggleDark}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
