import React, { useEffect } from "react";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

const Choose = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box py="100px" h={{ base: "70vh", md: "70vh" }}>
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "auto", md: "repeat(2,1fr)" }}
          gap="40px"
        >
          <GridItem>
            <Text fontSize={20} data-aos="fade-right">
              Why Choose Kanki Studio?
            </Text>
          </GridItem>
          <GridItem>
            <Box data-aos="fade-left" data-aos-duration="3000">
              <Text fontWeight={800} fontSize={18}>
                Innovation
              </Text>
              <Text mt="5px">
                Harnessing cutting-edge technology for unparalleled creativity.
              </Text>
            </Box>
            <Box mt="24px" data-aos="fade-left" data-aos-duration="3000">
              <Text fontWeight={800} fontSize={18}>
                Talent
              </Text>
              <Text mt="5px">
                A team of passionate and skilled professionals dedicated to your
                vision.
              </Text>
            </Box>
            <Box mt="24px" data-aos="fade-left" data-aos-duration="3000">
              <Text fontWeight={800} fontSize={18}>
                Experience
              </Text>
              <Text mt="5px">
                Years of expertise in crafting captivating animations and
                immersive gaming experiences.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Choose;
