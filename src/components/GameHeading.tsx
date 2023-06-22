import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";


function GameHeading() {
  const platformId = useGameQueryStore(s=>s.gameQuery.platformId)
  const genreId = useGameQueryStore(s=>s.gameQuery.genreId)
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === platformId
  );
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" paddingY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
