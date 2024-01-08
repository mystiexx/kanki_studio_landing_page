import React, { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { COLORS } from "../../../enums/colors";
import Aos from "aos";
import "aos/dist/aos.css";

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
          Unveiling the Story Behind Kanki Studio
        </Text>
        <Text
          mt="7px"
          color={COLORS.gray}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          At Kanki Studio, we believe that every project is a story waiting to
          be told. Learn about our journey, our values, and the passionate team
          that makes Kanki Studio the creative powerhouse it is today.
        </Text>
      </Container>
    </Box>
  );
};

export default Hero;
