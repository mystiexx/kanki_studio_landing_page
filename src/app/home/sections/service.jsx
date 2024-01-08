import React, { useEffect } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box py="50px" h={{ base: "70vh", md: "70vh" }}>
      <Container maxW="container.xl">
        <Flex flexDir={{ base: "column-reverse", md: "row" }} gap="40px">
          <Box>
            <Box data-aos="fade-right" data-aos-duration="1000">
              <Text fontWeight={800} fontSize={18}>
                Animation
              </Text>
              <Text mt="5px">
                From concept to execution, we breathe life into your ideas.
              </Text>
            </Box>
            <Box mt="24px" data-aos="fade-right" data-aos-duration="1000">
              <Text fontWeight={800} fontSize={18}>
                Video Games
              </Text>
              <Text mt="5px">
                Immerse your audience in interactive and engaging gaming worlds.
              </Text>
            </Box>
            <Box mt="24px" data-aos="fade-right" data-aos-duration="1000">
              <Text fontWeight={800} fontSize={18}>
                Digital Projects
              </Text>
              <Text mt="5px">Innovative solutions for a digital age.</Text>
            </Box>
            <Box mt="24px" data-aos="fade-right" data-aos-duration="1000">
              <Text fontWeight={800} fontSize={18}>
                Education
              </Text>
              <Text mt="5px">Learn Digital skills.</Text>
            </Box>
          </Box>
          <Box w="full">
            <Text
              fontSize={20}
              textAlign={{ base: "left", md: "right" }}
              data-aos="fade-left"
              data-aos-duration="500"
            >
              Our Services
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Services;
