import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={15}
      overflow={"hidden"}
      transition="all 0.1s ease-in-out"
      _hover={{ transform: "scale(1.06)" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
