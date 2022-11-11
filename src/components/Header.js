import React from "react";
import { Flex, Heading, HStack, Link, Spacer } from "@chakra-ui/react";
import ButtonAction from "./ButtonAction";

const Header = () => {
  return (
    <Flex px={["150px", "200px", "278px"]} mt="51px">
      <Heading>Sttrand</Heading>
      <Spacer />
      <HStack spacing="34px">
        <Link size="14px">Home</Link>
        <Link size="14px">About us</Link>
        <Link size="14px">How it works</Link>
      </HStack>
      <HStack>
        <ButtonAction text="Get the App" size="sm" />
      </HStack>
    </Flex>
  );
};

export default Header;
