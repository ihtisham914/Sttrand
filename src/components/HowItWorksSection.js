import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Spacer,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const HowItWorksSection = () => {
  return (
    <SimpleGrid
      px={["72px", "72px", "134px", "223px", "278px"]}
      py="180px"
      bg="brand"
      color="white"
      columns={["1", "2", "2", "2", "4"]}
      justifyItems="center"
      alignItems="center"
      spacing="30px"
    >
      <GridItem p="50px" bg="white" color="#000" borderRadius="xl">
        <VStack spacing="30px">
          <HStack>
            <Box py="10px" px="15px" border="4px" borderRadius="xl">
              <VStack>
                <Heading fontSize="12px">35 GHC</Heading>
                <Text fontSize="8px">Buy yourself</Text>
              </VStack>
            </Box>
            <Box py="10px" px="20px" border="4px" borderRadius="xl">
              <VStack>
                <Heading fontSize="12px">23 GHC</Heading>
                <Text fontSize="8px">Buy with friends</Text>
              </VStack>
            </Box>
          </HStack>
          <Box width="200px" height="100px">
            <Text fontSize={["10px", "10px", "14px", "14px", "12px"]}>
              Consumers are presented with two price options on everyday
              household consumption goods (e.g. groceries, etc)
            </Text>
          </Box>
        </VStack>
      </GridItem>

      <GridItem p="50px" bg="white" color="#000" borderRadius="xl">
        <VStack spacing="30px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92.098"
            height="65.368"
            viewBox="0 0 92.098 65.368"
          >
            <path
              d="M46.776,66.118H6.682A8.192,8.192,0,0,1-1.5,57.936V53.927A17.527,17.527,0,0,1,16.038,36.389h1.5l.307.147a20.028,20.028,0,0,0,17.775,0l.308-.148h1.5A17.527,17.527,0,0,1,54.959,53.927v4.009A8.192,8.192,0,0,1,46.776,66.118ZM16.038,39.389A14.554,14.554,0,0,0,1.5,53.927v4.009a5.188,5.188,0,0,0,5.182,5.182H46.776a5.188,5.188,0,0,0,5.182-5.182V53.927A14.554,14.554,0,0,0,37.421,39.389H36.6a22.99,22.99,0,0,1-19.744,0ZM82.415,61.664H56.257l.075-1.571c.009-.19.031-.359.051-.509a2.874,2.874,0,0,0,.031-.311V53.927a18.912,18.912,0,0,0-5.126-12.873l-1.281-1.381,1.632-.94a16.879,16.879,0,0,1,8.5-2.344h.781l.238.082a16.064,16.064,0,0,0,11.327,0l.238-.082h.781A17.073,17.073,0,0,1,90.6,53.481,8.192,8.192,0,0,1,82.415,61.664Zm-23-3h23A5.188,5.188,0,0,0,87.6,53.481,14.108,14.108,0,0,0,73.506,39.389h-.281a18.953,18.953,0,0,1-12.8,0h-.281a13.541,13.541,0,0,0-5.376,1.127,21.8,21.8,0,0,1,4.649,13.411Zm7.41-23.729a14.868,14.868,0,1,1,10.51-4.355A14.767,14.767,0,0,1,66.823,34.934Zm0-26.729A11.865,11.865,0,1,0,78.688,20.07,11.878,11.878,0,0,0,66.823,8.2ZM26.729,34.934a17.043,17.043,0,1,1,6.656-1.343A17,17,0,0,1,26.729,34.934Zm0-31.184A14.092,14.092,0,1,0,40.821,17.842,14.108,14.108,0,0,0,26.729,3.75Z"
              transform="translate(1.5 -0.75)"
              fill="#0e203f"
            />
          </svg>
          <Box width="200px" height="100px">
            <Text fontSize={["10px", "10px", "14px", "14px", "12px"]}>
              Consumers have the option to purchase common household items
              individually at a standard retail price or they can partner with a
              family/friend or other consumers on our platform to get a
              discounted price.
            </Text>
          </Box>
        </VStack>
      </GridItem>

      <GridItem p="50px" bg="white" color="#000" borderRadius="xl">
        <VStack spacing="30px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54.912"
            height="66.888"
            viewBox="0 0 54.912 66.888"
          >
            <path
              d="M27.08,65.388a27.454,27.454,0,0,1-5.493-54.353V9.486H19.593a3,3,0,0,1-3-3V1.5a3,3,0,0,1,3-3H34.566a3,3,0,0,1,3,3V6.489a3,3,0,0,1-3,3H32.573v1.55A27.34,27.34,0,0,1,43.39,15.858l2.494-2.494a3,3,0,0,1,4.243,0L53.658,16.9a3,3,0,0,1,0,4.243l-2.9,2.9A27.44,27.44,0,0,1,27.08,65.388ZM19.6,6.486h4.99v7.092l-1.272.2a24.453,24.453,0,1,0,28.22,24.16A24.2,24.2,0,0,0,47.6,24.642l-.667-1.02,4.605-4.605-3.531-3.531-4.393,4.393-1.051-.863a24.333,24.333,0,0,0-11.718-5.242l-1.271-.2V6.486h4.991V1.5H19.6V6.485Zm9.979,38.937H24.584a3,3,0,0,1-3-3v-18.9a3,3,0,0,1,3-3h4.991a3,3,0,0,1,3,3v18.9A3,3,0,0,1,29.575,45.423Zm-4.988-3h4.985v-18.9H24.587v18.9Z"
              transform="translate(0.375 1.5)"
              fill="#0e203f"
            />
          </svg>
          <Box width="200px" height="100px">
            <Text fontSize={["10px", "10px", "14px", "14px", "12px"]}>
              The family/friend or other consumers who have received a request
              to partner to purchase items have 24 hours to make their purchase.
            </Text>
          </Box>
        </VStack>
      </GridItem>

      <GridItem p="50px" bg="white" color="#000" borderRadius="xl">
        <VStack spacing="30px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79.906"
            height="56.834"
            viewBox="0 0 79.906 56.834"
          >
            <path
              d="M3.845.75H53.834A5.351,5.351,0,0,1,59.179,6.1V16.143h3.006a9.134,9.134,0,0,1,6.5,2.686l7.03,7.03a9.12,9.12,0,0,1,2.686,6.492V42.625a3.427,3.427,0,0,1-3.423,3.423h-.431q.008.212.008.423a11.113,11.113,0,1,1-22.226,0q0-.214.007-.423H36.1q.008.212.008.423A11.111,11.111,0,0,1,24.994,57.584a10.886,10.886,0,0,1-5.063-1.232,11.216,11.216,0,0,1-2.629-1.9,11.281,11.281,0,0,1-2.624,1.894,10.87,10.87,0,0,1-5.065,1.237A11.111,11.111,0,0,1-1.5,46.471V6.1A5.351,5.351,0,0,1,3.845.75Zm71.138,42.3a.428.428,0,0,0,.423-.423V32.351A6.14,6.14,0,0,0,73.6,27.981l-7.03-7.03a6.154,6.154,0,0,0-4.383-1.808H56.179V6.1A2.348,2.348,0,0,0,53.834,3.75H3.845A2.348,2.348,0,0,0,1.5,6.1V46.471a8.089,8.089,0,0,0,14.6,4.821l1.2-1.608,1.2,1.611a8.035,8.035,0,0,0,6.488,3.289,8.122,8.122,0,0,0,8.113-8.113,8.608,8.608,0,0,0-.165-1.639L32.6,43.048H55.877l-.383,1.81a7.709,7.709,0,0,0-.16,1.612,8.113,8.113,0,1,0,16.226,0,8.609,8.609,0,0,0-.165-1.639l-.343-1.783ZM56.179,21.9h6.006a3.4,3.4,0,0,1,2.419,1l7.764,7.764H56.179Zm8.946,5.768-2.643-2.643a.408.408,0,0,0-.3-.125H59.179v2.768ZM9.613,41.125a5.345,5.345,0,1,1-5.345,5.345A5.351,5.351,0,0,1,9.613,41.125Zm0,7.691a2.345,2.345,0,1,0-2.345-2.345A2.348,2.348,0,0,0,9.613,48.816Zm15.381-7.691a5.345,5.345,0,1,1-5.345,5.345A5.351,5.351,0,0,1,24.994,41.125Zm0,7.691a2.345,2.345,0,1,0-2.345-2.345A2.348,2.348,0,0,0,24.994,48.816Zm38.453-7.691A5.345,5.345,0,1,1,58.1,46.471,5.351,5.351,0,0,1,63.447,41.125Zm0,7.691A2.345,2.345,0,1,0,61.1,46.471,2.348,2.348,0,0,0,63.447,48.816Z"
              transform="translate(1.5 -0.75)"
              fill="#0e203f"
            />
          </svg>
          <Box width="200px" height="100px">
            <Text fontSize={["10px", "10px", "14px", "14px", "12px"]}>
              The items can be picked up at your local market or will be
              delivered once the order has been competed and placed.
            </Text>
          </Box>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export default HowItWorksSection;
