import React from "react";
import { Box, Button, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import NavList from "./NavList";

function Header() {
  return (
    <Box padding={" 1rem 2%"}>
      <Flex alignItems={"center"}>
        <Box>
          <Heading>snap</Heading>
        </Box>

        <Box ml={"5%"}>
          <NavList />
        </Box>
        <Spacer />
        <Box>
          <Link>Login</Link>
          <Button>Register</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
