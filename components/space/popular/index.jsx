import { Grid, Box, Heading, GridItem, VStack } from "@chakra-ui/react";
import BlogCard from "@/components/common/card";
import VideoCard from "@/components/common/video";
const Popular = () => {
  return (
    <Box mb="8">
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Popular Contents.
        </Heading>
      </VStack>
      <Grid templateColumns={["1fr", "repeat(6, 1fr)"]} gap={4}>
        <GridItem
          colSpan={[1, 3]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <BlogCard />
        </GridItem>
        <GridItem
          colSpan={[1, 3]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <VideoCard />
        </GridItem>
        <GridItem
          colSpan={[1, 2]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <BlogCard />
        </GridItem>
        <GridItem
          colSpan={[1, 2]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <VideoCard />
        </GridItem>
        <GridItem
          colSpan={[1, 2]}
          w="100%"
          minH={["auto", "320px"]}
          overflow="hidden"
          borderRadius={"3em"}
          cursor="pointer"
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "1.5em",
          }}
        >
          <BlogCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Popular;
