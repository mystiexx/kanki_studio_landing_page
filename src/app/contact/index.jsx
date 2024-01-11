import React, { useEffect } from "react";
import { Container, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { COLORS } from "../../enums/colors";
import { Layout } from "../../layout";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Layout>
      <Box h="100vh" display={"grid"} placeItems={"center"}>
        <Container maxW="container.xl">
          <Text
            fontSize={{ base: 40, md: 50 }}
            data-aos="fade-right"
            data-aos-duration="2000"
            fontWeight={900}
            w={{ base: "full", md: "600px" }}
          >
            Let's Bring Your Ideas to Life!
          </Text>
          <Text
            mt="7px"
            color={COLORS.grey}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Ready to embark on a creative journey with Kanki Studio? Contact us
            today to discuss your project, explore collaboration opportunities,
            or simply connect with our passionate team.
          </Text>
        </Container>
      </Box>

      <Box py="100px">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "auto", md: "repeat(2,1fr)" }}
            gap={{ base: "24px", md: "40px" }}
            h={{ base: "auto", md: "30vh" }}
          >
            <GridItem>
              <Text
                fontWeight={700}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                Contact Information
              </Text>
            </GridItem>
            <GridItem
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
              gap="40px"
            >
              <Box>
                <Text fontWeight={800} mb="16px">
                  Email
                </Text>
                <Text
                  color={COLORS.grey}
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  kankistudios@gmail.com
                </Text>
              </Box>
              <Box>
                <Text fontWeight={800} mb="16px">
                  Phone
                </Text>
                <Text
                  color={COLORS.grey}
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  +2348160341282
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Contact;
