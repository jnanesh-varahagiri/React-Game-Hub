import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (search: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} height={"80px"} width={"120px"}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
