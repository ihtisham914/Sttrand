import React from "react";

import { Box, Heading } from "@chakra-ui/react";

const PrivacyMainSection = () => {
  return (
    <Box
      px={["50px", "136px", "136px", "223px", "278px"]}
      py={["35px", "45px", "45px", "55px", "75px"]}
      mt={["120px", "130px", "130px", "150px", "180px"]}
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
