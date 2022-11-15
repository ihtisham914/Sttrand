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
      px={["50px", "136px", "136px", "223px", "278px"]}
      py={["34px", "50px", "50px", "50px", "82px"]}
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
          <Flex
            alignItems="center"
            gap="20px"
            direction={["column", "row", "row", "row", "row"]}
          >
            <svg
              id="Group_5554"
              data-name="Group 5554"
              xmlns="http://www.w3.org/2000/svg"
              width="19.368"
              height="21.305"
              viewBox="0 0 19.368 21.305"
            >
              <g id="home">
                <path
                  id="Path_53"
                  data-name="Path 53"
                  d="M11.684,1a.967.967,0,0,1,.595.2l8.716,6.779a.968.968,0,0,1,.374.764V19.4A2.909,2.909,0,0,1,18.463,22.3H4.905A2.909,2.909,0,0,1,2,19.4V8.747a.968.968,0,0,1,.374-.764L11.09,1.2A.967.967,0,0,1,11.684,1Zm7.747,8.221L11.684,3.2,3.937,9.221V19.4a.97.97,0,0,0,.968.968H18.463a.97.97,0,0,0,.968-.968Z"
                  transform="translate(-2 -1)"
                  fill="#fff"
                />
                <path
                  id="Path_54"
                  data-name="Path 54"
                  d="M14.779,22.621a.968.968,0,0,1-.968-.968V12.937H9.937v8.716a.968.968,0,1,1-1.937,0V11.968A.968.968,0,0,1,8.968,11h5.81a.968.968,0,0,1,.968.968v9.684A.968.968,0,0,1,14.779,22.621Z"
                  transform="translate(-2.19 -1.316)"
                  fill="#fff"
                />
              </g>
            </svg>

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
        py={["35px", "45px", "45px", "55px", "75px"]}
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
