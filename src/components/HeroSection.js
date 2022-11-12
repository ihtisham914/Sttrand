import React from "react";
import {
  Flex,
  VStack,
  HStack,
  Heading,
  Box,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      h="90vh"
      px={["50px", "70px", "70px", "100px", "200px"]}
      mt="90px"
      alignContent="center"
      gap="22px"
      direction={{
        base: "column",
        sm: "row",
        md: "row",
        lg: "row",
        "2xl": "row",
      }}
      bgImage="url('/images/herodesign.png')"
      bgPosition="center"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <VStack w="460px" spacing="3" mt="10">
        <Heading
          fontSize={["24px", "20px", "20px", "40px", "48px"]}
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
          fontWeight="regular"
        >
          Buy together,
          <HStack>
            <Text color="texthighlight">save</Text> <Text>together!</Text>
          </HStack>
        </Heading>
        <Text
          maxW="sm"
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
          fontSize={["14px", "10px", "10px", "16px", "22px"]}
        >
          Realizing the power of community. Sttrand is the social commerce
          infractrure for the continent of Africa
        </Text>
        <HStack
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
        >
          <Image
            src="./images/appstore.png"
            w={["197px", "97px", "152px", "228px", "228px"]}
            h={["65px", "28px", "28px", "43px", "65px"]}
          ></Image>
          <Image
            src="./images/google.png"
            w={["197px", "97px", "152px", "228px", "228px"]}
            h={["65px", "28px", "28px", "43px", "65px"]}
          ></Image>
        </HStack>
      </VStack>
      <Spacer />

      <Box className="hero-design">
        <Image
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
          mr="90px"
          src="./images/heroimage.png"
          alt="Hero image"
          w="230px"
          h="520px"
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
