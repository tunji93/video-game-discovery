import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpandableText";
import GameScreenshot from "../components/GameScreenshot";
import GameTrailer from "../components/GameTrailer";
import MetaCritic from "../components/MetaCritic";
import useGameDetails from "../hooks/useGameDetails";

function GameDetails() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);
  if (error || !game) return <Spinner />;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description_raw} />
        <SimpleGrid columns={2}>
          <DefinitionItem term={"Platforms"}>
            {game.parent_platforms?.map(({ platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            ))}
          </DefinitionItem>
          <DefinitionItem term={"Metascore"}>
            <MetaCritic score={game.metacritic} />
          </DefinitionItem>
          <DefinitionItem term={"Genres"}>
            {game.genres?.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </DefinitionItem>
          <DefinitionItem term={"Publishers"}>
            {game.publishers?.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </DefinitionItem>
        </SimpleGrid>
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenshot gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
}

export default GameDetails;
