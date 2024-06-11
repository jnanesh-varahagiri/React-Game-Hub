import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../Services/Image-url";
import emptyImage from "../assets/empty.webp";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  console.log(game);
  return (
    <Card>
      <Image
        src={
          game.background_image
            ? getCroppedImageUrl(game.background_image)
            : emptyImage
        }
      ></Image>
      <CardBody>
        <HStack marginBottom={3} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
