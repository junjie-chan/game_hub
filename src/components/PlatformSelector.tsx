import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        size={{ base: "sm", sm: "md" }}
      >
        {selectedPlatform?.name || "Platforms"}
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
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            paddingLeft={5}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
