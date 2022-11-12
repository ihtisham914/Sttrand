import { Flex, Heading, HStack, Link, Spacer, Image } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import ButtonAction from "./ButtonAction";

const Header = () => {
  return (
    <Flex px={["50px", "70px", "70px", "100px", "200px"]} mt="51px">
      <Image
        src="./images/logo.png"
        h={["15px", "15px", "15px", "22px", "33px"]}
        w={["70px", "70px", "70px", "97px", "146px"]}
      />
      <Spacer />
      <HStack spacing="34px">
        <Link size={["12px", "10px", "14px", "14px", "14px"]}>Home</Link>
        <Link size={["12px", "10px", "14px", "14px", "14px"]}>About us</Link>
        <Link size={["12px", "10px", "14px", "14px", "14px"]}>
          How it works
        </Link>
      </HStack>
      <HStack>
        <ButtonAction
          text="Get the App"
          size="md"
          bgcolor="brand"
          color="#fff"
        />
      </HStack>
    </Flex>
  );
};

export default Header;
