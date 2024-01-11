import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const Layout = ({ children }) => {
  return (
    <Box display={"flex"} flexDir="column">
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
