import { Box, Container, IconButton, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { COLORS } from "../../enums/colors";
import { navRoutes } from "../../enums/routes";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { RiMenu4Line } from "react-icons/ri";
import Mobile from "./mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box
      position={"fixed"}
      w="full"
      bg={COLORS.primary_65}
      zIndex={1}
      borderBottom={`0.5px solid ${COLORS.grey}`}
      // opacity={'0.65'}
    >
      <Mobile isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
      <Container
        maxW={"container.xl"}
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
        py="10px"
      >
        <IconButton
          icon={<RiMenu4Line />}
          bg="transparent"
          display={{ base: "grid", md: "none" }}
          fontSize={20}
          color={COLORS.white}
          placeItems={"center"}
          _active={{ bg: COLORS.primary }}
          _selected={{ bg: "transparent" }}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Text
          fontWeight={900}
          bgGradient={`linear(to-l, ${COLORS.orange}, ${COLORS.orange_50}, ${COLORS.yellow})`}
          bgClip={"text"}
        >
          Kanki Studio
        </Text>

        <Box
          display={{ base: "none", md: "flex" }}
          gap="24px"
          alignItems={"center"}
        >
          {navRoutes.map((nav, idx) => (
            <NavLink
              key={idx}
              to={nav.path}
              className={({ isActive }) =>
                isActive ? styles.nav_active : styles.nav
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
