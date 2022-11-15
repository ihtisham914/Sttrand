import {
  Flex,
  VStack,
  Image,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { company, privacy } from "../links";

const Footer = () => {
  return (
    <Box mt={["47px", "47px", "47px", "47px", "90px"]}>
      <Flex
        px={["50px", "210px", "210px", "328px", "506px"]}
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
        <Link href="/">
          <Image
            src="./images/logo.png"
            h={["20px", "20px", "20px", "31px", "47px"]}
            w={["90px", "90px", "90px", "141px", "211px"]}
          />
        </Link>

        <SimpleGrid
          columns={3}
          spacing={["20px", "30px", "40px", "70px", "80px"]}
        >
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
                mb="15px"
              >
                Company
              </Heading>
              {company.map((compny, index) => (
                <Link
                  key={index}
                  href={compny.link}
                  fontSize={{
                    base: "6px",
                    sm: "6px",
                    lg: "6px",
                    xl: "10px",
                    "2xl": "18px",
                  }}
                  textTransform="uppercase"
                  textdecoration="none"
                >
                  {compny.name}
                </Link>
              ))}
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
                mb="5px"
              >
                Privacy and terms
              </Heading>
              {privacy.map((privacy, index) => (
                <Link
                  key={index}
                  href={privacy.link}
                  fontSize={{
                    base: "6px",
                    sm: "6px",
                    lg: "6px",
                    xl: "10px",
                    "2xl": "18px",
                  }}
                  textTransform="uppercase"
                  textdecoration="none"
                >
                  {privacy.name}
                </Link>
              ))}
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
                mb="15px"
              >
                Help
              </Heading>
              <Link
                href="/"
                fontSize={{
                  base: "6px",
                  sm: "6px",
                  lg: "6px",
                  xl: "10px",
                  "2xl": "18px",
                }}
                textTransform="uppercase"
                textdecoration="none"
              >
                FAQs
              </Link>
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
