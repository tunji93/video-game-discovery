import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";



function PlatformSelector() {
  const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId)
  const setSelectedPlatformId = useGameQueryStore(s=>s.setPlatformId)
  const { data: platforms } = usePlatforms();

  const selectedPlatform = platforms?.results?.find((platform)=> platform.id === selectedPlatformId)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
