import React from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const PaymentSection = () => {
  return (
    <Flex
      px={["50px", "136px", "136px", "223px", "278px"]}
      my={["18px", "30.2px", "30.2px", "65.8px", "127px"]}
      align="center"
      gap="60px"
      direction={{
        base: "column",
        sm: "row",
        md: "row",
        lg: "row",
        "2xl": "row",
      }}
    >
      <VStack>
        <Heading
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
          textAlign={["center", "start", "start", "start", "start"]}
          fontSize={["19px", "19px", "19px", "30px", "48px"]}
          fontWeight="regular"
        >
          Different Payment Options Accepted
        </Heading>
        <Text
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
          textAlign={["center", "start", "start", "start", "start"]}
          fontSize={["8px", "8px", "8px", "14px", "22px"]}
        >
          Different Delivery Options Available
        </Text>
      </VStack>

      <SimpleGrid columns={3} spacing="40px">
        <GridItem>
          <Image src="./images/paymentone.png"></Image>
        </GridItem>
        <GridItem mt="-10">
          <Image src="./images/paymenttwo.png"></Image>
        </GridItem>
        <GridItem>
          <Image src="./images/paymentthree.png"></Image>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default PaymentSection;
