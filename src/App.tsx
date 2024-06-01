import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatFormSelector from "./components/PlatFormSelector";
import { Platform } from "./hooks/usePlatforms";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
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
          <NavBar />
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
          <PlatFormSelector
            onSelectPlatform={handleSelectedPlatform}
            selectedPlatform={gameQuery.platform}
          />
          <GameGrid key="gamegrid" gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
