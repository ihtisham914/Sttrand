import { extendTheme } from "@chakra-ui/react";
// import { createBreakPoints } from "@chakra-ui/theme-tools";
import Montserrat from "@fontsource/montserrat";

// const breakpoints = createBreakPoints({
//   sm: "22.5em",
//   md: "51.25",
//   lg: "80em",
//   xl: "120em",
// });

const theme = extendTheme({
  // breakpoints,
  colors: {
    brand: "#12203D",
    brandfocus: "#1d3462",
    texthighlight: "#73C9F0",
    bgcolor: "#FBFBFB",
    white: "#FFF",
  },
  fonts: {
    body: "Montserrat",
  },
});

export default theme;
