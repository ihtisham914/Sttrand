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
const HowMainSection = () => {
  return (
    <Flex
      px={["50px", "70px", "70px", "100px", "200px"]}
      my="90px"
      align="center"
      justify="space-between"
      gap="60px"
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
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
          fontSize={["24px", "30px", "30px", "62px", "62px"]}
        >
          How it <Text color="texthighlight">works</Text>
        </Heading>
        <Text
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
          fontSize={["14px", "12px", "12px", "18px", "22px"]}
        >
          Sttrand is a platform that utilizes social media (WhatsApp, Facebook
          Messenger, SMS) which allows consumers to partner on purchasing items
          on a shopping mobile app.
        </Text>
      </VStack>
      <Image
        src="./images/video.png"
        width={["263px", "282px", "282px", "425px", "896px"]}
        height={["146px", "238px", "238px", "259px", "393px"]}
      />
    </Flex>
  );
};

export default HowMainSection;