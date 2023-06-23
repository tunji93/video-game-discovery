import { Box } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

type Props = {
  gameId: number;
};

function GameTrailer({ gameId }: Props) {
  const { data, isLoading, error } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <Box marginBottom={2}>
      <video
        src={data?.results[0]?.data[480]}
        controls
        poster={data?.results[0]?.preview}
      />
    </Box>
  );
}

export default GameTrailer;
