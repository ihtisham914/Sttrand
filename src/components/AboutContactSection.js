import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Spacer,
} from "@chakra-ui/react";

const AboutContactSection = () => {
  return (
    <Box px={["50px", "70px", "70px", "100px", "200px"]} my="120px">
      <VStack align="center" spacing={["20px", "20px", "20px", "50px", "27px"]}>
        <Heading
          align="center"
          fontSize={["14px", "16px", "16px", "29px", "44px"]}
        >
          Our goal is to increase the purchasing power of the people within the
          continent while creating disposable income for our customers.{" "}
        </Heading>
        <Text
          align="center"
          fontSize={["14px", "12px", "12px", "18px", "25px"]}
        >
          We utilize social apps to help consumers partner together to get
          everyday household items at great prices.
        </Text>
        <HStack spacing={["20px", "20px", "50px", "70px", "100px"]}>
          <VStack>
            <Image src="./images/whatsapp.png" />
            <Text>Whatsapp</Text>
          </VStack>
          <VStack>
            <Image src="./images/messenger.png" />
            <Text>Facbook Messenger</Text>
          </VStack>
          <VStack>
            <Image src="./images/chat.png" />
            <Text>SMS</Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AboutContactSection;