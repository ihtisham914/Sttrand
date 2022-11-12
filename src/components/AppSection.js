import React from "react";
import ButtonAction from "./ButtonAction";
import {
  Flex,
  VStack,
  Heading,
  Text,
  Box,
  SimpleGrid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const AppSection = () => {
  return (
    <Box px={["50px", "70px", "70px", "100px", "200px"]} py="80px" bg="bgcolor">
      <VStack align="center" spacing="50">
        <Heading
          fontSize={["14px", "20px", "20px", "30px", "38px"]}
          align="center"
          fontWeight="regular"
        >
          A Platform Where Consumers <br /> can Utilize Social Apps to buy Items
          at a Discount
        </Heading>
        <Text
          fontSize={["14px", "12px", "12px", "18px", "25px"]}
          align="center"
        >
          Cosumers have the option to purchase everyday household items
          individually at a standard retail price or they can partner with a
          family/friend or other consumers on our platform to get a discounted
          price.
        </Text>
        <ButtonAction
          text="Get the App"
          size="lg"
          bgcolor="brand"
          color="#fff"
        />
      </VStack>
      <SimpleGrid
        columns={{ base: "1", md: "3", lg: "3", "2xl": "3" }}
        my="27px"
        spacing="117px"
        justifyContent={"center"}
        bgImage="url('/images/appdesign.png')"
        bgPosition="center"
        bgSize="contain"
        bgRepeat="no-repeat"
      >
        <GridItem>
          <Image src="./images/app1.png"></Image>
        </GridItem>
        <GridItem>
          <Image src="./images/app2.png"></Image>
        </GridItem>
        <GridItem>
          <Image src="./images/app3.png"></Image>
        </GridItem>
        <GridItem>
          <Image src="./images/app4.png"></Image>
        </GridItem>
        <GridItem>
          <Image src="./images/app5.png"></Image>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default AppSection;
