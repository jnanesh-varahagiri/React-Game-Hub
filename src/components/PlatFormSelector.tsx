import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (selectedPlatformId: number) => void;
}

const PlatFormSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const Platform = usePlatform(selectedPlatformId ? selectedPlatformId : 0);

  if (error) {
    return null;
  }
  return (
    <Box>
      <Menu>
        <MenuButton px={4} py={2} as={Button} rightIcon={<BiChevronDown />}>
          {selectedPlatformId ? Platform?.name : "Platforms"}
        </MenuButton>
        <MenuList>
          {data &&
            data.results.map((menu: any) => {
              return (
                <MenuItem
                  key={"platformFilter" + menu.id}
                  onClick={() => onSelectPlatform(menu.id)}
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
