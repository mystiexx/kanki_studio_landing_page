import React from "react";
import { Container } from "@chakra-ui/react";
import { Layout } from "../../layout";
import Hero from "./components/hero";
import ServiceList from "./components/serviceList";

const Services = () => {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Hero />
        <ServiceList />
      </Container>
    </Layout>
  );
};

export default Services;
