import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" alt="logo" objectFit="cover" />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
