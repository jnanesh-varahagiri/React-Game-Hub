import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    onSearch(data.search);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        {...register("search")}
        onKeyDown={handleKeyDown}
        borderRadius={20}
        placeholder="Search games..."
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
