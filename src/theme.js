import { extendTheme } from "@chakra-ui/react";
import Montserrat from "@fontsource/montserrat";

const theme = extendTheme({
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
