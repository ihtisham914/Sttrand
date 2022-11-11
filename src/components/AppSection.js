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
    <Box px={["150px", "200px", "278px"]} py="80px" bg="bgcolor">
      <VStack align="center" spacing="50">
        <Heading fontSize="38px" align="center" fontWeight="regular">
          A Platform Where Consumers <br /> can Utilize Social Apps to buy Items
          at a Discount
        </Heading>
        <Text fontSize="25px" align="center">
          Cosumers have the option to purchase everyday household items
          individually at a standard retail price or they can partner with a
          family/friend or other consumers on our platform to get a discounted
          price.
        </Text>
        <ButtonAction text="Get the App" size="lg" />
      </VStack>
      <SimpleGrid
        columns={3}
        my="27px"
        spacing="117px"
        justifyContent={"center"}
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
        <GridItem colSpan={3}>
          <Flex w="100%" align="center" justifyContent="center" gap="117px">
            <Image src="./images/app4.png"></Image>
            <Image src="./images/app5.png" h="820px" w="400px"></Image>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default AppSection;
