import { HStack } from "@chakra-ui/react";
import { useRef, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CriticScoreScrollContainer = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    // Listen to the wheel event and convert vertical scrolling to horizontal scrolling
    const onWheel = (event: WheelEvent) => {
      if (scrollContainer) {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
      }
    };

    // Bind event
    scrollContainer?.addEventListener("wheel", onWheel);

    // Cleanup event binding
    return () => {
      scrollContainer?.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <HStack
      ref={scrollRef}
      overflowX="auto"
      whiteSpace="nowrap"
      w="70%"
      css={{ "&::-webkit-scrollbar": { display: "none" } }} // Hide scroll bar
    >
      {children}
    </HStack>
  );
};

export default CriticScoreScrollContainer;
