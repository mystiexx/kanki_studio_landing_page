import React from "react";
import { Container } from "@chakra-ui/react";
import { Layout } from "../../layout";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Testimonial from "./components/testimonial";

const Portfolio = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Hero />
        <Projects />
        <Testimonial />
      </Container>
    </Layout>
  );
};

export default Portfolio;
