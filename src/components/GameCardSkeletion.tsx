import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeletion = () => {
  return (
    <Card>
      <Skeleton height="165px" />
      <CardBody>
        <SkeletonText height="95px" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeletion;
