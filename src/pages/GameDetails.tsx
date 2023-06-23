import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";

function GameDetails() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);
  if (error || !game) return <Spinner />;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
}

export default GameDetails;
