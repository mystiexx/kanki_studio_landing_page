import { useEffect } from "react";
import React from "react";
import { Container, Text, Box } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { COLORS } from "../../../enums/colors";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box h="100vh" display={"grid"} placeItems={"center"}>
      <Container maxW="container.xl">
        <Text
          fontSize={{ base: 40, md: 50 }}
          data-aos="fade-right"
          data-aos-duration="2000"
          fontWeight={900}
          w={{ base: "full", md: "600px" }}
        >
          Elevate Your Vision with Kanki Studio's Services
        </Text>
        <Text
          mt="7px"
          color={COLORS.grey}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Discover the array of services offered by Kanki Studio, designed to
          meet the unique needs of creators, businesses, and visionaries.
        </Text>
      </Container>
    </Box>
  );
};

export default Hero;
