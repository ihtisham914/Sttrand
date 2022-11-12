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
      h={["150vh", "90vh", "90vh", "90vh", "90vh"]}
      px={["72px", "72px", "134px", "223px", "278px"]}
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
      bgImage={[
        // "url('/images/mobilehero.png)",
        // "url('/images/tablethero.png)",
        // "url('/images/tablethero.png)",
        // "url('/images/laptophero.png')",
        "url('/images/herodesign.png')",
      ]}
      bgPosition="center"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <VStack spacing="3" mt="10">
        <Heading
          fontSize={["24px", "20px", "20px", "40px", "62px"]}
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
          fontSize={["14px", "10px", "10px", "18px", "25px"]}
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
            w={["97px", "97px", "152px", "152px", "228px"]}
            h={["28px", "28px", "43px", "43px", "65px"]}
          ></Image>
          <Image
            src="./images/google.png"
            w={["97px", "97px", "152px", "228px", "228px"]}
            h={["28px", "28px", "43px", "43px", "65px"]}
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
          mt="20px"
          mr="100px"
          src="./images/heroimage.png"
          alt="Hero image"
          w={["201px", "189px", "289px", "287px", "273px"]}
          h={["437px", "411px", "411px", "623px", "595px"]}
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
