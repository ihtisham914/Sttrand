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
  Link,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Flex
      minH={["85vh", "100vh", "100vh", "90vh", "90vh"]}
      px={["50px", "136px", "136px", "223px", "278px"]}
      mt={["47px", "47px", "47px", "47px", "90px"]}
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
        "url('/images/mobilehero.png')",
        "url('/images/tablethero.png')",
        "url('/images/tablethero.png')",
        "url('/images/laptophero.png')",
        "url('/images/herodesign.png')",
      ]}
      bgPosition={["bottom", "center", "center", "center", "center"]}
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
          textAlign={["center", "start", "start", "start", "start"]}
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
          <Link href="https://www.apple.com/app-store/" isExternal>
            <Image
              src="./images/appstore.png"
              w={["97px", "97px", "152px", "152px", "228px"]}
              h={["28px", "28px", "43px", "43px", "65px"]}
            ></Image>
          </Link>
          <Link href="https://play.google.com/store/apps" isExternal>
            <Image
              src="./images/google.png"
              w={["97px", "97px", "152px", "153px", "228px"]}
              h={["28px", "28px", "43px", "43px", "65px"]}
            ></Image>
          </Link>
        </HStack>
      </VStack>
      <Spacer />

      <Box
        className="hero-design"
        display={["none", "flex", "flex", "flex", "flex"]}
      >
        <Image
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
          mt={["0", "0", "0", "0", "20px"]}
          mr={["0", "30px", "130px", "53px", "90px"]}
          src="./images/heroimage.png"
          // alt="Hero image"
          w={["201px", "189px", "189px", "287px", "273px"]}
          h={["437px", "411px", "411px", "623px", "595px"]}
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
