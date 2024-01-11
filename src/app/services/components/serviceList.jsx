import React from "react";
import { Box, Flex, Text, Grid, GridItem, Container } from "@chakra-ui/react";
import { COLORS } from "../../../enums/colors";

const ServiceList = () => {
  return (
    <Container maxW="container.xl">
      <Box h="100vh" py="100px">
        <Flex flexDir={{ base: "column", md: "row" }} gap="40px" py="100px">
          <Box w={{ base: "full", md: "300px" }}>
            <Text
              data-aos="fade-right"
              data-aos-duration="2000"
              fontWeight={700}
            >
              What we offer
            </Text>
          </Box>
          <Box w="full">
            <Grid
              templateColumns={{ base: "auto", md: "repeat(3,1fr)" }}
              gap="40px"
            >
              <GridItem data-aos="fade-up" data-aos-duration="2000">
                <Text fontWeight={800} mb="16px">
                  Animation
                </Text>
                <Text color={COLORS.grey}>
                  Our animation services transform concepts into visual
                  masterpieces. From character design to motion graphics, we
                  bring stories to life.
                </Text>
                <Box h="3px" w="50px" bg={COLORS.grey} mt="24px" />
              </GridItem>
              <GridItem data-aos="fade-up" data-aos-duration="2000">
                <Text fontWeight={800} mb="16px">
                  Video Games
                </Text>
                <Text color={COLORS.grey}>
                  Immerse your audience in interactive adventures. Our game
                  development expertise ranges from mobile games to virtual
                  reality experiences.
                </Text>
                <Box h="3px" w="50px" bg={COLORS.grey} mt="24px" />
              </GridItem>
              <GridItem data-aos="fade-up" data-aos-duration="2000">
                <Text fontWeight={800} mb="16px">
                  Digital Projects
                </Text>
                <Text color={COLORS.grey}>
                  Explore innovative solutions for the digital age. From
                  augmented reality experiences to interactive installations,
                  Kanki Studio pioneers the future of digital storytelling.
                </Text>
                <Box h="3px" w="50px" bg={COLORS.grey} mt="24px" />
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default ServiceList;
