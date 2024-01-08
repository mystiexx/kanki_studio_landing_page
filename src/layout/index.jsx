import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";

export const Layout = ({ children }) => {
  return (
    <Box display={"flex"} flexDir="column">
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};
