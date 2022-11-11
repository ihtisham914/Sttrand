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
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex h="80vh" px={["150px", "200px", "278px"]} my="90px">
      <VStack w="460px" spacing="3" mt="20">
        <Heading fontSize="62px" alignSelf="flex-start" fontWeight="regular">
          Buy together,
          <HStack>
            <Text color="texthighlight">save</Text> <Text>together!</Text>
          </HStack>
        </Heading>
        <Text maxW="sm" alignSelf="flex-start" fontSize="18px">
          Realizing the power of community. Sttrand is the social commerce
          infractrure for the continent of Africa
        </Text>
        <HStack alignSelf="flex-start">
          <Image src="./images/appstore.png" w="220px" h="65.5px"></Image>
          <Image src="./images/google.png" w="220px" h="65.5px"></Image>
        </HStack>
      </VStack>
      <Spacer />
      <Flex mr="90px">
        <Image
          src="./images/heroimage.png"
          alt="Hero image"
          w="273px"
          h="595px"
        />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
