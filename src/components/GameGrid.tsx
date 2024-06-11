import { SimpleGrid, Text, Button, Box, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Box padding={10}>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
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
      </InfiniteScroll>
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
