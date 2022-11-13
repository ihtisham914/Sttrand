import React from "react";

import { Box, Heading } from "@chakra-ui/react";

const PrivacyMainSection = () => {
  return (
    <Box
      px={["72px", "72px", "134px", "223px", "278px"]}
      py="82px"
      my="50px"
      color="white"
      bg="brand"
    >
      <Heading
        fontSize={["20px", "20px", "30px", "39px", "62px"]}
        fontWeight="regular"
        width={["100%", "40%", "40%", "30%", "30%"]}
        textAlign={["center", "start", "start", "start", "start"]}
      >
        Privacy Policy & Term of Use
      </Heading>
    </Box>
  );
};

export default PrivacyMainSection;
