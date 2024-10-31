import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack paddingLeft={3} paddingRight={5} paddingY={3}>
      <Link to="/">
        <Image
          src={logo}
          boxSize={"60px"}
          marginRight={{ base: 0, sm: 5, md: 10 }}
          objectFit="cover"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
