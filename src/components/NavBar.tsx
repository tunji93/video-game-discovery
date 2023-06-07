import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput, { SearchInputProps } from "./SearchInput";


function NavBar({onSearch}: SearchInputProps) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        boxSize="60px"
        alt="logo"
      />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>
    </HStack>
  );
}

export default NavBar;
