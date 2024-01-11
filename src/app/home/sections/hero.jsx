import React, { useEffect } from "react";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import styles from "../styles.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { COLORS } from "../../../enums/colors";
import { MdOutlineEmail } from "react-icons/md";

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
            bgGradient={`linear(to-l, ${COLORS.orange}, ${COLORS.orange_50}, ${COLORS.yellow})`}
            bgClip={"text"}
          >
            Studio
          </Text>
          <Text fontSize={14} data-aos="fade-right" data-aos-duration="1000">
            Where Imagination Takes Flight!
          </Text>
          <a
            href="mailto:kankistudios@gmail.com"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <Button
              mt="24px"
              bg="transparent"
              leftIcon={<MdOutlineEmail />}
              color={COLORS.grey}
              w={{ base: "full", md: "auto" }}
              _hover={{
                bg: "transparent",
              }}
            >
              Contact Us
            </Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
