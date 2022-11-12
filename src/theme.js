import { extendTheme } from "@chakra-ui/react";
import Montserrat from "@fontsource/montserrat";

const theme = extendTheme(
  {
    colors: {
      brand: "#12203D",
      texthighlight: "#73C9F0",
      bgcolor: "#FBFBFB",
      white: "#FFF",
    },
    fonts: {
      body: "Montserrat",
    },
  }
  // withDefaultColorScheme({
  //   colorScheme: "brand",
  // })
);

export default theme;
