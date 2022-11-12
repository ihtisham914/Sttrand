import { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  HStack,
  Link,
  Spacer,
  Image,
  VStack,
  IconButton,
  Collapse,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link as RouteLink } from "react-router-dom";
import ButtonAction from "./ButtonAction";

const Header = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Box
      px={["72px", "134px", "134px", "223px", "278px"]}
      mt="51px"
      align="center"
    >
      <Flex>
        <Image
          src="./images/logo.png"
          h={["15px", "15px", "15px", "22px", "33px"]}
          w={["70px", "70px", "70px", "97px", "146px"]}
        />
        <Spacer />
        <Flex>
          <Box display={["none", "flex", "flex", "flex"]}>
            <HStack spacing="34px">
              <Link size={["12px", "10px", "14px", "14px", "14px"]}>Home</Link>
              <Link size={["12px", "10px", "14px", "14px", "14px"]}>
                About us
              </Link>
              <Link size={["12px", "10px", "14px", "14px", "14px"]}>
                How it works
              </Link>
            </HStack>
            <HStack ml="83px">
              <ButtonAction
                text="Get the App"
                size="md"
                bgcolor="brand"
                color="#fff"
              />
            </HStack>
          </Box>
          <Box display={["flex", "none", "none", "none", "none"]}>
            <svg
              onClick={() => changeDisplay("flex")}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              viewBox="0 0 12 10"
            >
              <g transform="translate(-298 -54)">
                <line
                  x1="7"
                  transform="translate(302 55)"
                  fill="none"
                  stroke="#0e203f"
                  stroke-linecap="round"
                  stroke-width="2"
                />
                <line
                  x1="10"
                  transform="translate(299 59)"
                  fill="none"
                  stroke="#0e203f"
                  stroke-linecap="round"
                  stroke-width="2"
                />
                <line
                  x1="4"
                  transform="translate(305 63)"
                  fill="none"
                  stroke="#0e203f"
                  stroke-linecap="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </Box>
        </Flex>
      </Flex>
      <VStack
        position="fixed"
        top="0"
        right="0"
        w="100vw"
        h="60vh"
        display={[display, "none", "none", "none", "none"]}
        spacing="28px"
        bg="white"
        px="60px"
        py="45px"
        shadow="xl"
      >
        <IconButton
          alignSelf="flex-end"
          aria-label="close menu"
          size="sm"
          icon={<CloseIcon />}
          onClick={() => changeDisplay("none")}
        />
        <Link size={["12px", "10px", "14px", "14px", "14px"]}>Home</Link>
        <Link size={["12px", "10px", "14px", "14px", "14px"]}>About us</Link>
        <Link size={["12px", "10px", "14px", "14px", "14px"]}>
          How it works
        </Link>
        <ButtonAction
          text="Get the App"
          size="md"
          bgcolor="brand"
          color="#fff"
        />
      </VStack>
    </Box>
  );
};

export default Header;
