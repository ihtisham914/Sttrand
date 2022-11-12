import React from "react";
import { Flex, Heading, VStack, Image } from "@chakra-ui/react";
import ButtonAction from "./ButtonAction";
const MerchantSection = () => {
  return (
    <VStack
      px={["50px", "138px", "138px", "222px", "300px"]}
      my="90px"
      py="65.5px"
      align="center"
      justifyContent="center"
      bg="brand"
      spacing="100px"
    >
      <VStack spacing={10}>
        <Heading
          color="#fff"
          fontSize={["9pxpx", "21px", "21px", "34px", "54px"]}
          fontWeight="regular"
        >
          Become Merchant
        </Heading>
        <ButtonAction
          text="Learn More"
          size="lg"
          bgcolor="#fff"
          color="brand"
        />
      </VStack>
      <VStack spacing="50px">
        <Image
          src="./images/dashboardone.png"
          w={["260px", "547px", "547px", "834px", "1320px"]}
          h={["130px", "270px", "270px", "420px", "600px"]}
        ></Image>
        <Image
          src="./images/dashboardtwo.png"
          w={["260px", "547px", "547px", "834px", "1320px"]}
          h={["130px", "270px", "270px", "420px", "600px"]}
        ></Image>
      </VStack>
    </VStack>
  );
};

export default MerchantSection;