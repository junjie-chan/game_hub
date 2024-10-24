import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeletion = () => {
  return (
    <Card>
      <Skeleton
        height={{
          xl: "135px",
          lg: "165px",
          md: "240px",
          sm: "295px",
          base: "185px",
        }}
      />
      <CardBody>
        <SkeletonText
          height={{
            xl: "125px",
            lg: "95px",
            md: "55px",
            sm: "60px",
            base: "62px",
          }}
        />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeletion;
