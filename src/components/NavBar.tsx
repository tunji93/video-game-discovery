import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput, { SearchInputProps } from "./SearchInput";
import logo from "../assets/logo.webp"


function NavBar({onSearch}: SearchInputProps) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        alt="logo"
      />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>
    </HStack>
  );
}

export default NavBar;
