import { Avatar, Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../enums/colors";

export const TeamCard = () => {
  return (
    <Box>
      <Center>
        <Avatar
          src={
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          size={"2xl"}
        />
      </Center>
      <Text fontSize={14} textAlign={"center"} fontWeight={600}>
        Jane Doe
      </Text>
      <Text
        fontSize={12}
        textAlign={"center"}
        fontWeight={500}
        color={COLORS.gray}
      >
        Software Engineer
      </Text>
    </Box>
  );
};
