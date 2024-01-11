import { Avatar, Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../enums/colors";

export const TeamCard = ({ content }) => {
  return (
    <Box>
      <Center>
        <Avatar src={content.image} size={"2xl"} />
      </Center>
      <Text
        fontSize={14}
        textAlign={"center"}
        fontWeight={600}
        textTransform={"capitalize"}
        mt="16px"
      >
        {content.name}
      </Text>
      <Text
        fontSize={12}
        textAlign={"center"}
        fontWeight={500}
        color={COLORS.grey}
      >
        {content.position}
      </Text>
    </Box>
  );
};

export const ProjectCard = ({ title }) => {
  return (
    <Box>
      <Box h="250px" bg={COLORS.grey} w="700px"></Box>
      <Text mt="12px" fontSize={14} color={COLORS.grey}>
        {title}
      </Text>
    </Box>
  );
};

export const TestimonialCard = ({ content }) => {
  return (
    <Box>
      <Box display={"flex"} flexDir="row" gap="24px">
        <Box
          w="1"
          h="100px"
          bgGradient={`linear(to-b, ${COLORS.orange}, ${COLORS.orange_50}, ${COLORS.yellow})`}
          display={"inline-block"}
        />
        <Box>
          <Text fontWeight={600} fontSize={16}>
            {content.name}
          </Text>
          <Text color={COLORS.grey} fontSize={13} mt="10px">
            {content.experience}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
