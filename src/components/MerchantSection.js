import React from "react";
import { Heading, VStack, Image } from "@chakra-ui/react";
import ButtonAction from "./ButtonAction";
const MerchantSection = () => {
  return (
    <VStack
      px={["50px", "136px", "136px", "223px", "278px"]}
      py={["22.6px", "50.4px", "50.4px", "65.4px", "98px"]}
      align="center"
      justifyContent="center"
      bg="brand"
      spacing={["9px", "35px", "35px", "62.4px", "101.5px"]}
      bgImage="url('/images/merchantbackground.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <VStack spacing={["2", "4", "6", "8", "10"]}>
        <Heading
          color="#fff"
          fontSize={["9pxpx", "21px", "21px", "34px", "54px"]}
          fontWeight="regular"
        >
          Become Merchant
        </Heading>
        <ButtonAction text="Learn More" bgcolor="#fff" color="brand" />
      </VStack>
      <VStack spacing="50px">
        <Image
          src="./images/dashboardone.png"
          w={["259px", "547px", "547px", "834px", "1320px"]}
          h={["160px", "340px", "340px", "517px", "818px"]}
        ></Image>
        <Image
          src="./images/dashboardtwo.png"
          w={["259px", "547px", "547px", "834px", "1320px"]}
          h={["160px", "340px", "340px", "517px", "818px"]}
        ></Image>
      </VStack>
    </VStack>
  );
};

export default MerchantSection;
