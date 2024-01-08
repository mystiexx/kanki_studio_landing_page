import React from "react";
import { Box, Button, Center, Container, Text } from "@chakra-ui/react";
import { COLORS } from "../../enums/colors";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Box h="100vh" display="grid" placeItems={"center"}>
      <Container maxW="container.xl">
        <Text
          fontSize={{ base: 50, md: 150 }}
          textAlign={"center"}
          fontWeight={900}
        >
          OOOPS!!!
        </Text>
        <Text textAlign={"center"} color={COLORS.gray}>
          Page does not exist!!!
        </Text>
        <Center>
          <Link to="/">
            <Button
              bg="transparent"
              _hover={{ bg: "transparent" }}
              color={COLORS.white}
            >
              Go to home
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  );
};

export default ErrorPage;
