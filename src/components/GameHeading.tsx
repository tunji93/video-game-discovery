import { Heading } from "@chakra-ui/react";
import { GamesQuery } from "../App";

type Props = {
  gamesQuery: GamesQuery;
};
function GameHeading({ gamesQuery }: Props) {
  //   const heading = `${gamesQuery?.platform?.name || ""} ${
  //     gamesQuery?.genre?.name || ""
  //   } Games`;
  return (
    <Heading as="h1" paddingY={5} fontSize="5xl">
      {/* {heading} Wahab */} Wahab
    </Heading>
  );
}

export default GameHeading;
