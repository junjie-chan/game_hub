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
      // border="1.5px solid"
      // borderColor="gray.200"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
