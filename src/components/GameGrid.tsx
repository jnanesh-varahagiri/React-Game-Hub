import { SimpleGrid, Text, Button, Box } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
  key: string;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  console.log(isLoading);

  return (
    <Box padding={10}>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => (
            <GameCardContainer key={`${skeleton}skeleton`}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          data?.pages.map((page, index) => {
            return (
              <React.Fragment key={"page" + index}>
                {page.results.map((game, index) => {
                  return (
                    <GameCardContainer key={"game" + index}>
                      <GameCard game={game}></GameCard>
                    </GameCardContainer>
                  );
                })}
              </React.Fragment>
            );
          })}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          colorScheme="grey"
          background={"grey"}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading...." : "LoadMore"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
