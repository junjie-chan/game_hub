import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton
        height={{
          xl: "150px",
          lg: "160px",
          md: "235px",
          sm: "295px",
          base: "215px",
        }}
      />
      <CardBody>
        <SkeletonText
          marginTop={{ md: 7, sm: 7, base: 8 }}
          noOfLines={{ lg: 2, base: 1 }}
          spacing={2.5}
          skeletonHeight="22px"
          height={{
            xl: "65px",
            lg: "55px",
            md: "30px",
            sm: "30px",
            base: "30px",
          }}
        />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
