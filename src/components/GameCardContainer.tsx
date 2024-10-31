import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  const hoverBgColor = colorMode === "dark" ? "#323232" : "gray.100";

  return (
    <Box
      borderRadius={15}
      overflow={"hidden"}
      transition="all 0.15s ease-in-out"
      _hover={{
        transform: "scale(1.06)",
        ".game-card-body": { backgroundColor: hoverBgColor },
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
