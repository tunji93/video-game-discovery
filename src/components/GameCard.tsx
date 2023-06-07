import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import buildCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import MetaCritic from "./MetaCritic";
import PlatformsList from "./PlatformsList";

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={buildCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformsList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <MetaCritic score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
