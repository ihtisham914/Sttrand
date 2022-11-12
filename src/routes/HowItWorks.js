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
    <div>
      <HowMainSection />
      <HowItWorksSection />
    </div>
  );
};

export default HowItWorks;
