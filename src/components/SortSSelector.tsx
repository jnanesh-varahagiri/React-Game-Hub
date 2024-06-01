import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
interface Props {
  selectedOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const data = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-added", label: "Date Added" },
    { value: "-created", label: "Created" },
    { value: "-updated", label: "Updated" },
    { value: "-rating", label: "Rating" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Metacritic" },
  ];

  const [selectedData] = data.filter((item) => item.value === selectedOrder);
  return (
    <Box>
      <Menu>
        <MenuButton px={4} py={2} as={Button} rightIcon={<BiChevronDown />}>
          Order By : {selectedData.label}
        </MenuButton>
        <MenuList>
          {data.map((menu, i) => {
            return (
              <MenuItem
                onClick={() => onSelectSortOrder(menu.value)}
                key={"ordering" + i}
              >
                {menu.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SortSSelector;
