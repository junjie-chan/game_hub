import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        size={{ base: "sm", sm: "md" }}
      >
        Order by: {currentSortOrder?.label || "Relevance"}
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
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
