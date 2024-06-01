import {
  HStack,
  List,
  ListItem,
  Image,
  Stack,
  Skeleton,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../Services/Image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return (
      <Stack spacing={"60px"}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
          <Skeleton key={"genreskel" + index} paddingY="10px" height="20px" />
        ))}
      </Stack>
    );
  }
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id + "genre"} paddingY="10px">
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"wrap"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : undefined}
                colorScheme={
                  genre.id === selectedGenre?.id ? "purple" : undefined
                }
                variant="link"
                fontSize={"larger"}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
