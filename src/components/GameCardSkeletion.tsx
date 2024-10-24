import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeletion = () => {
  return (
    <Card borderRadius={10} overflow={"hidden"} width="250px">
      <Skeleton height="220px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeletion;
