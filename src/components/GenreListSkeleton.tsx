import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem marginY={3}>
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText noOfLines={1} skeletonHeight="18px" width="100px" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
