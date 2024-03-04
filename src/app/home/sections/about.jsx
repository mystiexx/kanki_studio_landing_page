import React, { useEffect } from "react";
import { Container, Text, Box } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box h={{ base: "70vh", md: "auto" }} pt="50px" pb="200px">
      <Container maxW="container.xl" pt="50px">
        <Text
          fontSize={{ base: 40, md: 70 }}
          fontWeight={800}
          w={{ base: "full", md: "700px" }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Your oasis of creativity in the digital realm.
        </Text>

        <Text mt="24px" data-aos="fade-left" data-aos-duration="1000">
          We specialize in bringing dreams to life through captivating
          animations, immersive video games, and innovative projects. Explore
          the limitless possibilities of imagination with Kanki Studio.
        </Text>
      </Container>
    </Box>
  );
};

export default About;
