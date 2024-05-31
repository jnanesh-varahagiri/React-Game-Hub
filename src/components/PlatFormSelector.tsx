import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (selectedPlatforn: Platform) => void;
}

const PlatFormSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }
  return (
    <Box paddingX={10}>
      <Menu>
        <MenuButton px={4} py={2} as={Button} rightIcon={<BiChevronDown />}>
          {selectedPlatform ? selectedPlatform.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((menu) => {
            return (
              <MenuItem
                key={"platformFilter" + menu.id}
                onClick={() => onSelectPlatform(menu)}
              >
                {menu.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatFormSelector;
