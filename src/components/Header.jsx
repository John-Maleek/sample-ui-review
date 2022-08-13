import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";
import NavList from "./NavList";

function Header() {
  return (
    <Box padding={" 1rem 0"}>
      <Flex alignItems={"center"}>
        <Box>
          <Heading>snaps</Heading>
        </Box>

        <Box ml={"5%"}>
          <NavList />
        </Box>
        <Spacer />
        <Box mr={"2%"}>
          <Text>Login</Text>
        </Box>
        <Button>Register</Button>
      </Flex>
    </Box>
  );
}

export default Header;
