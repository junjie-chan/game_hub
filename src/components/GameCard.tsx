import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      height={{ lg: "285px" }}
      variant={colorMode === "dark" ? "filled" : "outline"}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack
          justifyContent="space-between"
          marginBottom={game.parent_platforms.length === 0 ? 6 : 2}
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl" noOfLines={{ lg: 2 }}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
