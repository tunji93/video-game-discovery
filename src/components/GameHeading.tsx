import { Heading } from "@chakra-ui/react";
import { GamesQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

type Props = {
  gamesQuery: GamesQuery;
};
function GameHeading({ gamesQuery }: Props) {
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gamesQuery.platformId
  );
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gamesQuery.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" paddingY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
