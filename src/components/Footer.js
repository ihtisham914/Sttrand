import {
  Flex,
  VStack,
  Image,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box mt="90px">
      <Flex
        px={["50px", "210px", "210px", "300px", "250px"]}
        gap={["20px", "20px", "50px", "70px", "100px"]}
        align="center"
        mb={["30px", "40px", "40px", "60px", "74px"]}
        direction={{
          base: "column",
          sm: "row",
          md: "row",
          lg: "row",
          "2xl": "row",
        }}
      >
        <Image
          src="./images/logo.png"
          h={["20px", "20px", "20px", "31px", "47px"]}
          w={["90px", "90px", "90px", "141px", "211px"]}
        />
        <SimpleGrid columns={3} spacing="100px">
          <GridItem>
            <VStack align="flex-start">
              <Heading
                fontSize={{
                  base: "6px",
                  sm: "9px",
                  lg: "9px",
                  xl: "13px",
                  "2xl": "22px",
                }}
                textTransform="uppercase"
                letterSpacing="1px"
                mb="20px"
              >
                Company
              </Heading>
              <Text
                fontSize={{
                  base: "6px",
                  sm: "6px",
                  lg: "6px",
                  xl: "10px",
                  "2xl": "18px",
                }}
                textTransform="uppercase"
              >
                About Us
              </Text>
              <Text
                fontSize={{
                  base: "6px",
                  sm: "6px",
                  lg: "6px",
                  xl: "10px",
                  "2xl": "18px",
                }}
                textTransform="uppercase"
              >
                How it works
              </Text>
              <Text
                fontSize={{
                  base: "6px",
                  sm: "6px",
                  lg: "6px",
                  xl: "10px",
                  "2xl": "18px",
                }}
                textTransform="uppercase"
              >
                contact
              </Text>
              <Text
                fontSize={{
                  base: "6px",
                  sm: "6px",
                  lg: "6px",
                  xl: "10px",
                  "2xl": "18px",
                }}
                textTransform="uppercase"
              >
                support
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="flex-start">
              <Heading
                fontSize={{
                  base: "6px",
                  sm: "9px",
                  lg: "9px",
                  xl: "13px",
                  "2xl": "22px",
                }}
                textTransform="uppercase"
                letterSpacing="1px"
              >
                Privacy and terms
              </Heading>
              <Text
                fontSize={{
                  base: "6px",
                  sm: "6px",
                  lg: "6px",
                  xl: "10px",
                  "2xl": "18px",
                }}
                textTransform="uppercase"
              >
                Privacy policy
              </Text>
              <Text
                fontSize={{
                  base: "6px",
                  sm: "6px",
                  lg: "6px",
                  xl: "10px",
                  "2xl": "18px",
                }}
                textTransform="uppercase"
              >
                terms of use
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="flex-start">
              <Heading
                fontSize={{
                  base: "6px",
                  sm: "9px",
                  lg: "9px",
                  xl: "13px",
                  "2xl": "22px",
                }}
                textTransform="uppercase"
                letterSpacing="1px"
                mb="20px"
              >
                Help
              </Heading>
              <Text
                fontSize={{
                  base: "6px",
                  sm: "6px",
                  lg: "6px",
                  xl: "10px",
                  "2xl": "18px",
                }}
                textTransform="uppercase"
              >
                Faqs
              </Text>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Flex>
      <Flex
        w="100%"
        bg="brand"
        h={["31px", "31px", "31px", "48px", "72px"]}
        borderTopRadius="40px"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="#fff" fontSize={["10px", "10px", "10px", "12px", "18px"]}>
          Copyright &copy; 2022 Sttrand. Inc
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
