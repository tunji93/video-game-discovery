import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

type Props = {
  gameId: number;
};

function GameScreenshot({ gameId }: Props) {
  const { data, isLoading, error } = useScreenshot(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results?.map((image) => (
        <Image key={image.id} src={image.image} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshot;
