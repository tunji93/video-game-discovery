import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import GameGrid from "./GameGrid";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        boxSize="60px"
        alt="logo"
      />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
