import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#1C334B",
        fontFamily: "JetBrains Mono",
        color: "#fff",
        overflowX: "hidden",
      },
    }),
  },
});
