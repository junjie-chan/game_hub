import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton
        height={{
          xl: "155px",
          lg: "165px",
          md: "240px",
          sm: "295px",
          base: "185px",
        }}
      />
      <CardBody>
        <SkeletonText
          marginTop={{ md: 2, sm: 1.3, base: 1.9 }}
          noOfLines={{ lg: 2, base: 1 }}
          spacing={2.5}
          skeletonHeight="22px"
          width="180px"
          height={{
            xl: "105px",
            lg: "95px",
            md: "48px",
            sm: "50px",
            base: "62px",
          }}
        />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
