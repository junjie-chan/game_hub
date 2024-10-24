import { Game, Platform } from "../hooks/useGames";
import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={{ lg: "300px" }}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Box display="flex" justifyContent="space-between" mt="auto">
            <CriticScore score={game.metacritic} />
          </Box>
        </HStack>
        <Heading fontSize="2xl" marginBottom={2} noOfLines={{ lg: 2 }}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
