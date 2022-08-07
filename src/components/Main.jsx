import {
  Box,
  Button,
  // Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Main() {
  return (
    <Box>
      <Flex>
        <Box width={"70vw"} padding={"5% 10%"}>
          <Heading fontSize={"5rem"} paddingBottom={"10%"}>
            Make remote work
          </Heading>
          <Text paddingBottom={"10%"}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Text>
          <Button>Learn More</Button>
        </Box>
        <Box>
          <Image
            boxSize={"100%"}
            src={require("../images/image-hero-desktop.png")}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Main;
