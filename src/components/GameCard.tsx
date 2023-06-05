import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
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
        <PlatformsList platforms={game.parent_platforms.map((platform)=> platform.platform)}/>
      </CardBody>
    </Card>
  );
}

export default GameCard;
