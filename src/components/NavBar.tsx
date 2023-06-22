import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" alt="logo" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
