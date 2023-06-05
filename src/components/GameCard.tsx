import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import MetaCritic from "./MetaCritic";
import PlatformsList from "./PlatformsList";

type Props = {
  game: Game;
};

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformsList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <MetaCritic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
