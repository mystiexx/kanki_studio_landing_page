import React, { useEffect } from "react";
import { Box, Container, Text, Grid, GridItem, Flex } from "@chakra-ui/react";
import { COLORS } from "../../../enums/colors";
import Aos from "aos";
import "aos/dist/aos.css";

const Statements = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box py="100px">
      <Container maxW="container.xl">
        <Grid
          templateColumns={{ base: "auto", md: "repeat(2,1fr)" }}
          gap="40px"
        >
          <GridItem>
            <Text
              fontWeight={700}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Our Mission
            </Text>
          </GridItem>
          <GridItem>
            <Text
              color={COLORS.gray}
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              To redefine the boundaries of creativity, one project at a time.
              We are committed to delivering exceptional and unforgettable
              experiences that leave a lasting impact.
            </Text>
          </GridItem>
        </Grid>
        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          gap="40px"
          py="200px"
        >
          <Box w="full">
            <Grid
              templateColumns={{ base: "auto", md: "repeat(3,1fr)" }}
              gap="40px"
            >
              <GridItem data-aos="fade-up" data-aos-duration="2000">
                <Text fontWeight={800} mb="16px">
                  Innovation
                </Text>
                <Text color={COLORS.gray}>
                  Embracing the forefront of technology and creativity.
                </Text>
                <Box h="3px" w="50px" bg={COLORS.white} mt="24px" />
              </GridItem>
              <GridItem data-aos="fade-up" data-aos-duration="2000">
                <Text fontWeight={800} mb="16px">
                  Collaboration
                </Text>
                <Text color={COLORS.gray}>
                  Fostering partnerships to bring ideas to life.
                </Text>
                <Box h="3px" w="50px" bg={COLORS.white} mt="24px" />
              </GridItem>
              <GridItem data-aos="fade-up" data-aos-duration="2000">
                <Text fontWeight={800} mb="16px">
                  Passion
                </Text>
                <Text color={COLORS.gray}>
                  Infusing every project with enthusiasm and dedication.
                </Text>
                <Box h="3px" w="50px" bg={COLORS.white} mt="24px" />
              </GridItem>
            </Grid>
          </Box>
          <Box w="full">
            <Text
              textAlign={{ base: "left", md: "right" }}
              data-aos="fade-left"
              data-aos-duration="2000"
              fontWeight={700}
            >
              Kanki Studio's Values
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Statements;
