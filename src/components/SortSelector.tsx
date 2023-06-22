import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

export type SortOrder = {
  value: string;
  label: string;
};


function SortSelector() {
  const sortOrders: SortOrder[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const searchText = useGameQueryStore(s=>s.gameQuery.searchText)
  const setSearchText = useGameQueryStore(s=>s.setSearchText)
  const selectedOrder = sortOrders.find(order=> order.value === searchText)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => setSearchText(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
