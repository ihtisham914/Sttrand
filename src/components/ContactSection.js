import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Spacer,
  SimpleGrid,
  GridItem,
  Input,
  Textarea,
} from "@chakra-ui/react";
import ButtonAction from "./ButtonAction";

const ContactSection = () => {
  return (
    <Flex
      px={["50px", "70px", "70px", "100px", "278px"]}
      py="82px"
      my="50px"
      bgImage="url('/images/contactbackground.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      color="white"
      direction={["column", "row", "row", "row", "row"]}
    >
      <VStack
        alignSelf={{
          base: "center",
          md: "flex-start",
          lg: "flex-start",
          "2xl": "flex-start",
        }}
        width="40%"
      >
        <VStack align="self-start">
          <Heading
            textTransform="uppercase"
            fontSize={["20px", "20px", "20px", "40px", "62px"]}
            fontWeight="regular"
            alignSelf={{
              base: "center",
              md: "flex-start",
              lg: "flex-start",
              "2xl": "flex-start",
            }}
          >
            Contact us
          </Heading>
          <Flex>
            <Text
              fontSize={["12px", "12px", "12px", "18px", "18px"]}
              alignSelf={{
                base: "center",
                md: "flex-start",
                lg: "flex-start",
                "2xl": "flex-start",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </Flex>
        </VStack>
        <Spacer />
        <Text
          fontSize={["12px", "12px", "12px", "18px", "18px"]}
          fontWeight="bold"
          alignSelf={{
            base: "center",
            md: "flex-start",
            lg: "flex-start",
            "2xl": "flex-start",
          }}
        >
          Let's talk
        </Text>
      </VStack>
      <Spacer />
      <SimpleGrid
        bg="white"
        py="75px"
        px="60px"
        columns={["1", "1", "1", "1", "2"]}
        rowGap={["10px", "20px", "20px", "40px", "60px"]}
        columnGap="30px"
        borderRadius="2xl"
      >
        <GridItem>
          <Input type="text" placeholder="First Name" />
        </GridItem>
        <GridItem>
          <Input type="text" placeholder="Last Name" />
        </GridItem>
        <GridItem>
          <Input type="text" placeholder="Phone Number" />
        </GridItem>
        <GridItem>
          <Input type="email" placeholder="Email" />
        </GridItem>
        <GridItem colSpan={["1", "1", "1", "1", "2"]}>
          <Textarea placeholder="Address" />
        </GridItem>
        <GridItem>
          <ButtonAction text="Submit" bgcolor="brand" />
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default ContactSection;
