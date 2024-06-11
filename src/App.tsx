import { Grid, GridItem, Show, HStack, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatFormSelector from "./components/PlatFormSelector";
import SortSSelector from "./components/SortSSelector";
import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  search: string | null;
  pageParam: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    sortOrder: "",
    search: null,
    pageParam: 1,
  });

  function handleSelectedGenre(genreId: number) {
    console.log(genreId);
    setGameQuery((prev) => {
      return { ...prev, genreId: genreId };
    });
  }
  function handleSelectedPlatform(platformId: number) {
    setGameQuery((prev) => {
      return { ...prev, platformId: platformId };
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
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={10}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5}>
              <PlatFormSelector
                onSelectPlatform={handleSelectedPlatform}
                selectedPlatformId={gameQuery.platformId}
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
