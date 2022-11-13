import { React, useState } from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  Spacer,
  SimpleGrid,
  GridItem,
  Input,
  Textarea,
} from "@chakra-ui/react";
import ButtonAction from "./ButtonAction";

const ContactSection = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleFnameChange = (e) => setFname(e.target.value);
  const handleLnameChange = (e) => setLname(e.target.value);
  const handleNmberChange = (e) => setNumber(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleSubmit = (e) => {
    // e.preventdefault();
    setFname("");
    setLname("");
    setNumber("");
    setEmail("");
    setAddress("");
  };
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
      alignContent={{
        base: "center",
        lg: "flex-start",
        md: "flex-start",
        "2xl": "flex-start",
      }}
    >
      <VStack
        width={["100%", "40%", "40p%", "40%", "40%"]}
        mb={["20px", "0", "0", "0", "0"]}
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
              textAlign={["center", "start", "start", "start", "start"]}
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
        px={["20px", "30px", "40px", "60px", "60px"]}
        columns={["1", "1", "1", "1", "2"]}
        rowGap={["10px", "20px", "20px", "40px", "60px"]}
        columnGap="30px"
        borderRadius="2xl"
        color="black"
      >
        <GridItem>
          <Input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={handleFnameChange}
          />
        </GridItem>
        <GridItem>
          <Input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={handleLnameChange}
          />
        </GridItem>
        <GridItem>
          <Input
            type="text"
            placeholder="Phone Number"
            value={number}
            onChange={handleNmberChange}
          />
        </GridItem>
        <GridItem>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </GridItem>
        <GridItem colSpan={["1", "1", "1", "1", "2"]}>
          <Textarea
            placeholder="Address"
            value={address}
            onChange={handleAddressChange}
          />
        </GridItem>
        <GridItem>
          <Flex w="100%" onClick={handleSubmit}>
            <ButtonAction
              alignSelf="flex-start"
              text="Submit"
              bgcolor="brand"
              color="white"
            />
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default ContactSection;
