import React, { useEffect } from "react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { COLORS } from "../../../enums/colors";
import { TeamCard } from "../../../components/card";
import Aos from "aos";
import "aos/dist/aos.css";
import { team } from "../../../enums/enums";

const Team = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container maxW="container.xl" pb="100px">
      <Grid templateColumns={{ base: "auto", md: "repeat(2,1fr)" }} gap="40px">
        <GridItem>
          <Text fontWeight={700} data-aos="fade-right" data-aos-duration="2000">
            Our Team
          </Text>
          <Text
            fontSize={14}
            mt="10px"
            color={COLORS.gray}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Meet the minds behind Kanki Studio - a diverse and talented team of
            creatives, animators, and game developers. Get to know the
            individuals shaping the future of digital storytelling.
          </Text>
        </GridItem>

        <GridItem>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3,1fr)" }}
            gap="30px"
          >
            {team.map((data, idx) => (
              <GridItem key={idx} data-aos="fade-up" data-aos-duration="2000">
                <TeamCard content={data} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Team;
