import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} marginTop={5}>
      {data?.results.map(({ image, id }) => (
        <Image
          src={image}
          key={id}
          borderRadius={8}
          transition="all 0.15s ease-in-out"
          _hover={{
            transform: "scale(1.02)",
          }}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
