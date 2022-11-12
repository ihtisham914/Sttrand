import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonAction = ({ text, size, bgcolor, color }) => {
  return (
    <Button
      fontSize="14px"
      rounded={{ base: "full", md: "xl", lg: "xl", "2xl": "xl" }}
      px="6"
      bg={bgcolor}
      color={color}
      ml="83"
      shadow="sm"
      size={size}
    >
      {text}
    </Button>
  );
};

export default ButtonAction;
