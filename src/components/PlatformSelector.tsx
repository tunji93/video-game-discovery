import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

type Props = {
  selectedPlatformId?: number;
  onSelectPlatform: (selectedPlatformId: number) => void;
};

function PlatformSelector({ selectedPlatformId, onSelectPlatform }: Props) {
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
            onClick={() => onSelectPlatform(platform.id)}
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
