import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box py="30px">
      <Container
        maxW="container.xl"
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{ base: "none", md: "center" }}
        gap={{ base: "40px", md: "none" }}
      >
        <Text fontSize={20} fontWeight={"bold"}>
          Kanki
        </Text>
        <Box display={"flex"} gap="20px" alignItems={"center"}>
          <a
            href="https://www.facebook.com/profile.php?id=100089678880758&mibextid=LQQJ4d"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            {" "}
            <FaFacebookF color="#BFBEC2" size={20} />{" "}
          </a>

          <a
            href="https://www.tiktok.com/@kankistudios?_t=8itatXOFTGA&_r=1"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            {" "}
            <IoLogoTiktok color="#BFBEC2" size={20} />{" "}
          </a>

          <a
            href="https://www.instagram.com/kankistudio?igsh=OGQ5ZDc2ODk2ZA=="
            target={"_blank"}
            rel="noreferrer noopener"
          >
            {" "}
            <FaInstagram color="#BFBEC2" size={20} />{" "}
          </a>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
