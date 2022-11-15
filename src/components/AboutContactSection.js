import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Highlight,
} from "@chakra-ui/react";

const AboutContactSection = () => {
  return (
    <Box
      px={["50px", "136px", "136px", "223px", "278px"]}
      my={["19px", "50px", "50px", "76.4px", "116px"]}
    >
      <VStack align="center" spacing={["20px", "20px", "20px", "50px", "27px"]}>
        <Heading
          align="center"
          fontSize={["14px", "16px", "16px", "29px", "44px"]}
        >
          <Highlight
            query="&ldquo; &rdquo;"
            styles={{
              fontsize: "30px",
              fontWeight: "bold",
              color: "texthighlight",
            }}
          >
            &ldquo;Our goal is to increase the purchasing power of the people
            within the continent while creating disposable income for our
            customers&rdquo;
          </Highlight>
        </Heading>
        <Text
          align="center"
          fontSize={["14px", "12px", "12px", "18px", "25px"]}
        >
          <Highlight
            query="social apps"
            styles={{
              fontsize: "30px",
              color: "texthighlight",
            }}
          >
            We utilize social apps to help consumers partner together to get
            everyday household items at great prices.
          </Highlight>
        </Text>
        <HStack spacing={["20px", "20px", "50px", "70px", "100px"]}>
          <VStack>
            <Image
              src="./images/whatsapp.png"
              h={["23px", "23px", "27px", "27px", "40px"]}
            />
            <Text>Whatsapp</Text>
          </VStack>
          <VStack>
            <Image
              src="./images/messenger.png"
              h={["23px", "23px", "27px", "27px", "40px"]}
            />
            <Text>Messenger</Text>
          </VStack>
          <VStack>
            <Image
              src="./images/chat.png"
              h={["23px", "23px", "27px", "27px", "40px"]}
            />
            <Text>SMS</Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AboutContactSection;
