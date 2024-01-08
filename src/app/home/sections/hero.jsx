import React, { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import styles from "../styles.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box
      h="100vh"
      display={"grid"}
      placeItems={"center"}
      className={styles.hero_bg}
    >
      <Container maxW="container.xl">
        <Box>
          <div data-aos="fade-right" data-aos-duration="1000">
            <Text
              textTransform={"capitalize"}
              fontWeight={800}
              fontSize={{ base: 80, md: 150 }}
            >
              Kanki
            </Text>
          </div>

          <Text
            textTransform={"capitalize"}
            fontWeight={800}
            fontSize={{ base: 80, md: 150 }}
            ml={{ base: "50px", md: "100px" }}
            mt={{ base: -10, md: -20 }}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Studio
          </Text>
          <Text fontSize={14} data-aos="fade-right" data-aos-duration="1000">
            Where Imagination Takes Flight!
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
