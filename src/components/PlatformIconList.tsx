import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import CriticScoreScrollContainer from "./CriticScoreScrollContainer";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <CriticScoreScrollContainer>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id} />
      ))}
    </CriticScoreScrollContainer>
  );
};

export default PlatformIconList;
