import React from "react";
import { Box, Image } from "@chakra-ui/react";
import AboutMainSection from "../components/AboutMainSection";
import AboutContactSection from "../components/AboutContactSection";
import PurposeSection from "../components/PurposeSection";

const About = () => {
  return (
    <Box>
      <AboutMainSection />
      <Image src="./images/aboutdesign.png" />
      <AboutContactSection />
      <PurposeSection />
    </Box>
  );
};

export default About;
