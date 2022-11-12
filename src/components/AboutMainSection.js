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

const AboutMainSection = () => {
  return (
    <Box px={["50px", "70px", "70px", "100px", "200px"]} my="90px">
      <Flex
        align="center"
        mb="25px"
        gap={{ base: "9px" }}
        justifyContent="space-between"
        direction={{
          base: "column",
          sm: "row",
          md: "row",
          lg: "row",
          "2xl": "row",
        }}
      >
        <VStack width={["100%", "40%", "40%", "40%", "40%"]}>
          <Heading
            fontSize={["24px", "20px", "20px", "36px", "48px"]}
            fontWeight="regular"
            alignSelf={{
              base: "center",
              md: "flex-start",
              lg: "flex-start",
              "2xl": "flex-start",
            }}
          >
            About Us
          </Heading>
          <Text
            fontSize={["14px", "12px", "12px", "14px", "18px"]}
            alignSelf={{
              base: "center",
              md: "flex-start",
              lg: "flex-start",
              "2xl": "flex-start",
            }}
          >
            Sttrand is a
            <Heading
              color="texthighlight"
              fontSize={["14px", "12px", "12px", "14px", "18px"]}
            >
              social commerce marketplace
            </Heading>
            for the continent of Africa. We know the cost of daily household
            goods are an important concern for consumers looking to provide for
            themselves and loved ones.
          </Text>
        </VStack>
        <Image
          src="./images/aboutone.png"
          h={["170px", "190px", "290px", "290px", "410px"]}
          w={["170px", "200px", "300px", "300px", "400px"]}
        />
      </Flex>
      <Flex
        align="center"
        gap={{ base: "9px" }}
        justifyContent="space-between"
        direction={{
          base: "column",
          sm: "row-reverse",
          md: "row-reverse",
          lg: "row-reverse",
          "2xl": "row-reverse",
        }}
      >
        <VStack width={["100%", "40%", "40%", "40%", "40%"]}>
          <Text
            fontSize={["14px", "12px", "12px", "14px", "18px"]}
            alignSelf={{
              base: "center",
              md: "flex-start",
              lg: "flex-start",
              "2xl": "flex-start",
            }}
          >
            The Market shopping experience leaves consumers bargaining on goods
            that fluctuate in price at any given time. No simplified way exists
            to partner together using social apps with others to{" "}
            <Heading
              color="texthighlight"
              fontSize={["14px", "12px", "12px", "14px", "18px"]}
            >
              increase a consumer’s purchasing power on household items
            </Heading>{" "}
            within the continent of Africa today.
          </Text>
        </VStack>
        <Image
          src="./images/abouttwo.png"
          h={["190px", "200px", "300px", "300px", "500px"]}
          w={["270px", "300px", "450px", "450px", "662px"]}
        />
      </Flex>
    </Box>
  );
};

export default AboutMainSection;
