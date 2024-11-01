import { Box, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack paddingLeft={3} paddingRight={{ base: 0, sm: 5 }} paddingY={3}>
      <Link to="/">
        <Box boxSize="60px" marginRight={{ base: 0, md: 8 }}>
          <Image src={logo} />
        </Box>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
