import { useState } from "react";
import {
  Flex,
  Box,
  HStack,
  Link,
  Spacer,
  Image,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { navs } from "../links";
// import { NavLink  } from "react-router-dom";
import ButtonAction from "./ButtonAction";

const Header = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Box
      px={["72px", "134px", "134px", "223px", "278px"]}
      mt="51px"
      align="center"
    >
      <Flex align="center">
        <Link href="/">
          <Image
            src="./images/logo.png"
            h={["15px", "15px", "15px", "22px", "33px"]}
            w={["70px", "70px", "70px", "97px", "146px"]}
          />
        </Link>

        <Spacer />
        <Flex>
          <Box display={["none", "flex", "flex", "flex"]}>
            <HStack spacing="34px">
              {navs.map((nav, index) => (
                <Link
                  href={nav.link}
                  size={["12px", "10px", "14px", "14px", "14px"]}
                  _hover={{ textDecoration: "none" }}
                >
                  {nav.name}
                </Link>
              ))}
            </HStack>

            <Link
              href="https://play.google.com/store/apps"
              ml="83px"
              isExternal
            >
              <ButtonAction text="Get the App" bgcolor="brand" color="#fff" />
            </Link>
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
        {navs.map((nav) => (
          <Link
            href={nav.link}
            size={["12px", "10px", "14px", "14px", "14px"]}
            _hover={{ textDecoration: "none" }}
          >
            {nav.name}
          </Link>
        ))}

        <Link href="https://play.google.com/store/apps" isExternal>
          <ButtonAction
            text="Get the App"
            size="md"
            bgcolor="brand"
            color="#fff"
          />
        </Link>
      </VStack>
    </Box>
  );
};

export default Header;
