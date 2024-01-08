import React from "react";
import { Box } from "@chakra-ui/react";
import { COLORS } from "../../enums/colors";
import { navRoutes } from "../../enums/routes";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Mobile = ({ isOpen, onClose }) => {
  return (
    <Box>
      <Box
        bg="black"
        opacity="0.5"
        position="fixed"
        top="0"
        w="100%"
        h="100vh"
        onClick={onClose}
        left={isOpen ? "0" : "-100%"}
        zIndex="9"
        transition="0.3s ease-in-out"
      />
      <Box
        position="fixed"
        top="0"
        w="300px"
        h="100vh"
        left={isOpen ? "0" : "-100%"}
        zIndex="10"
        bg={COLORS.primary}
        opacity={isOpen ? "100%" : "0"}
        transition="0.3s ease-in-out"
        overflowY="scroll"
      >
        <Box
          py="200px"
          display={"flex"}
          flexDir={"column"}
          gap="24px"
          px="16px"
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
      </Box>
    </Box>
  );
};

export default Mobile;
