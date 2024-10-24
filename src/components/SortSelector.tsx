import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relvance
      </MenuButton>
      <MenuList
        minWidth="190px"
        overflowY="auto"
        maxHeight="172px"
        sx={{
          /* Hide scrollbar */
          scrollbarWidth: "none" /* For Firefox */,
          msOverflowStyle: "none" /* For IE and Edge */,
          "&::-webkit-scrollbar": {
            display: "none" /* For Chrome, Safari, and Opera */,
          },
        }}
      >
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <MenuItem>4</MenuItem>
        <MenuItem>5</MenuItem>
        <MenuItem>6</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
