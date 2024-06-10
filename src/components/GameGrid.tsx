import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  key: string;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  console.log(isLoading);

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding={10}
      >
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => (
            <GameCardContainer key={`${skeleton}skeleton`}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          data &&
          data.results.map((game: Game, index: number) => {
            return (
              <GameCardContainer key={"game" + index}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
