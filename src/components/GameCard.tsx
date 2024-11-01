import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../enterties/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Link to={`/games/${game.slug}`}>
      <Card
        height={{ lg: "285px" }}
        variant={colorMode === "dark" ? "filled" : "outline"}
      >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody className="game-card-body">
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
    </Link>
  );
};

export default GameCard;
