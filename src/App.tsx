import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatFormSelector from "./components/PlatFormSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSSelector from "./components/SortSSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string | null;
  pageParam: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    search: null,
    pageParam: 1,
  });

  function handleSelectedGenre(genre: Genre) {
    console.log(genre);
    setGameQuery((prev) => {
      return { ...prev, genre: genre };
    });
  }
  function handleSelectedPlatform(platform: Platform) {
    setGameQuery((prev) => {
      return { ...prev, platform: platform };
    });
  }

  function handleSortOrder(order: string) {
    setGameQuery((prev) => {
      return { ...prev, sortOrder: order };
    });
  }
  function handleSearch(search: string) {
    setGameQuery((prev) => {
      return { ...prev, search: search };
    });
  }
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "10% 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={handleSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={5} area="aside">
            <GenreList
              onSelectedGenre={handleSelectedGenre}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={10}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5}>
              <PlatFormSelector
                onSelectPlatform={handleSelectedPlatform}
                selectedPlatform={gameQuery.platform}
              />
              <SortSSelector
                onSelectSortOrder={handleSortOrder}
                selectedOrder={gameQuery.sortOrder}
              />
            </HStack>
          </Box>
          <GameGrid key="gamegrid" gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
