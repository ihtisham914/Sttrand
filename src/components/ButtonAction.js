import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonAction = ({ text, size }) => {
  return (
    <Button
      fontSize="14px"
      rounded="xl"
      px="6"
      bg="brand"
      color="#fff"
      ml="83"
      shadow="sm"
      size={size}
    >
      {text}
    </Button>
  );
};

export default ButtonAction;
