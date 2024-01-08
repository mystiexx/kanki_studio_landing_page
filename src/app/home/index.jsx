import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "./sections/hero";
import Choose from "./sections/choose";
import About from "./sections/about";
import Services from "./sections/service";
import { Layout } from "../../layout";

const Home = () => {
  return (
    <Layout>
      <Box>
        <Hero />
        <Choose />
        <About />
        <Services />
      </Box>
    </Layout>
  );
};

export default Home;
