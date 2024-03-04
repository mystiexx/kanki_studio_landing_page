import React, { useRef, useEffect } from "react";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { COLORS } from "../../../enums/colors";
import { projects } from "../../../enums/enums";
import { ProjectCard } from "../../../components/card";
import styles from "../styles.module.css";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const sliderRef = useRef(null);

  const handleSlider = (direction) => {
    const container = sliderRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= 100;
      } else if (direction === "right") {
        container.scrollLeft += 200;
      }
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box py="100px">
      <Flex justifyContent={"space-between"}>
        <Box
          display="flex"
          alignItems={"center"}
          gap="24px"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <Box
            h="3px"
            w="100px"
            bgGradient={`linear(to-l, ${COLORS.orange}, ${COLORS.orange_50}, ${COLORS.yellow})`}
          />
          <Text>Featured Projects</Text>
        </Box>
        <Box display="flex" gap="10px" alignItems={"center"}>
          <IconButton
            bg={COLORS.dark}
            color={COLORS.white}
            onClick={() => handleSlider("left")}
            icon={<MdOutlineKeyboardArrowLeft size="20" />}
            _hover={{
              bg: "gray.500",
            }}
          />
          <IconButton
            bg={COLORS.dark}
            color={COLORS.white}
            onClick={() => handleSlider("right")}
            icon={<MdOutlineKeyboardArrowRight size="20" />}
            _hover={{
              bg: "gray.500",
            }}
          />
        </Box>
      </Flex>

      <Box mt="40px">
        <div className={styles.card_wrapper} ref={sliderRef}>
          {projects.map((data, idx) => (
            <Box data-aos="fade-up" data-aos-duration="2000" key={idx}>
              <ProjectCard title={data.title} data={data} />
            </Box>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Projects;
