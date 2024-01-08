import React from "react";
import { Layout } from "../../layout";
import { Container } from "@chakra-ui/react";
import Hero from "./sections/hero";
import Statements from "./sections/statements";
import Team from "./sections/team";

const About = () => {
  return (
    <Layout>
      <Hero />
      <Statements />
      <Team />
    </Layout>
  );
};

export default About;
