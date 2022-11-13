import React from "react";
import { Flex, Text, Link, VStack } from "@chakra-ui/react";
import ButtonAction from "../components/ButtonAction";

const Error = () => {
  return (
    <Flex
      h="80vh"
      w="100vw"
      alignItems="center"
      justifyContent="center"
      borderBottom="2px"
    >
      <VStack spacing="30px">
        <Text fontSize="2xl">Oops! Page not found</Text>
        <Link href="/">
          <ButtonAction text="Go Back" color="white" bgcolor="brand" />
        </Link>
      </VStack>
    </Flex>
  );
};

export default Error;
