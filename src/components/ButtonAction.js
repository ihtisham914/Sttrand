import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonAction = ({ text, size, bgcolor, color }) => {
  return (
    <Button
      fontSize="14px"
      _hover={{ bg: "#1d3462" }}
      rounded={{ base: "full", md: "xl", lg: "xl", "2xl": "xl" }}
      px="6"
      bg={bgcolor}
      color={color}
      shadow="sm"
      size={size}
    >
      {text}
    </Button>
  );
};

export default ButtonAction;
