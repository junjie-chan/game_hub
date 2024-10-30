import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatform);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

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
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            paddingLeft={5}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
