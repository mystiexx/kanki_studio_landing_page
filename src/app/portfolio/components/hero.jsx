import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { COLORS } from "../../../enums/colors";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box h="100vh" display="grid" placeItems={"center"}>
      <Box>
        <Text
          fontSize={{ base: 40, md: 50 }}
          fontWeight={900}
          w={{ base: "full", md: "600px" }}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Explore Our Creative Universe
        </Text>
        <Text
          mt="7px"
          color={COLORS.gray}
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          Dive into our portfolio to witness the magic and diversity of projects
          crafted by Kanki Studio. Each piece tells a unique story, capturing
          the essence of our creative spirit.
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
