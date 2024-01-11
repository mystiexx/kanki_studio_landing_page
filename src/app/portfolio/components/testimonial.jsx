import React, { useState, useEffect } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { COLORS } from "../../../enums/colors";
import { TestimonialCard } from "../../../components/card";
import { testimonialData } from "../../../enums/enums";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleChange = (doc) => {
    setCurrentIndex(doc);
  };
  return (
    <Box py="100px">
      <Text
        textAlign="left"
        fontSize={18}
        fontWeight={700}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        What our client say about us?
      </Text>
      <Text
        textAlign="left"
        fontSize={12}
        mt="7px"
        color={COLORS.grey}
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        Hear what our clients have to say about their experiences working with
        Kanki Studio. Their success stories are a testament to our commitment to
        excellence.
      </Text>

      <Box display={"grid"} placeItems={"center"}>
        <Box
          mt="100px"
          display={"flex"}
          gap="40px"
          flexDir="column"
          w={{ base: "auto", md: "600px" }}
        >
          <Box>
            <Box
              display={"inline-block"}
              transition={"transform 0.5s ease-in-out"}
            >
              {testimonialData.map((data, idx) => (
                <Box
                  key={idx}
                  display={idx === currentIndex ? "block" : "none"}
                  transform={`translateX(${(idx - currentIndex) * 100})`}
                >
                  <TestimonialCard content={data} />
                </Box>
              ))}
            </Box>
          </Box>
          <Center>
            <Box display={"flex"} gap="10px">
              {testimonialData.map((_, idx) => (
                <Box
                  key={idx}
                  w="10px"
                  h="10px"
                  borderRadius={"full"}
                  bg={idx === currentIndex ? COLORS.dark : COLORS.grey}
                  onClick={() => handleChange(idx)}
                />
              ))}
            </Box>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
