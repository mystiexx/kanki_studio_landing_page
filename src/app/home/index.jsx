import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Hero from "./sections/hero";
import Choose from "./sections/choose";
import About from "./sections/about";
import Services from "./sections/service";
import { Layout } from "../../layout";
import Projects from "../portfolio/components/projects";

const Home = () => {
  return (
    <Layout>
      <Box>
        <Hero />
        <Container maxW="container.xl">
          <Projects />
        </Container>
        <Choose />
        <About />
        <Services />
      </Box>
    </Layout>
  );
};

export default Home;
