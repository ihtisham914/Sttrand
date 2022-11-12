import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import HowMainSection from "../components/HowMainSection";
import HowItWorksSection from "../components/HowItWorksSection";

const HowItWorks = () => {
  return (
    <Box>
      <HowMainSection />
      <HowItWorksSection />
    </Box>
  );
};

export default HowItWorks;
