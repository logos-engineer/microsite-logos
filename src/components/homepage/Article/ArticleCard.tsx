import { Heading, Box, GridItem, Text, Button } from "@chakra-ui/react";

import Image from "next/image";
export default function ArticleCard() {
  return (
    <Box w="full" display="grid" gridTemplateColumns="repeat(4,1fr)">
      <GridItem colSpan={1}>
        <Box width="100%" height="100%">
          <Image
            src={require("@/public/img/Article1.png")}
            width={360}
            height={352}
            alt="articlePage"
            placeholder="blur"
            layout="responsive"
          />
        </Box>
      </GridItem>
      <GridItem
        boxSizing="border-box"
        colStart={2}
        colSpan={3}
        bgColor="white"
        display="flex"
        flexDir="column"
        justifyContent="center"
        py="2"
        px="4"
        gridGap="5"
        borderRightRadius="3xl"
      >
        <Heading as="h2" variant="h4" fontWeight="bold">
          A Feminism History Recap: The First Wave of Feminism
        </Heading>
        <Text>
          What is feminism? Arguably for most, the meaning of feminism is still
          dependent on the eyes of the beholder. Different sides are
          contributing their voices to both the feminist movement and the
          opposition of such moveme...
        </Text>
        <Button
          variant="outline"
          w="max-content"
          _hover={{
            color: "white",
            bg: "blue.400",
          }}
        >
          Read More
        </Button>
      </GridItem>
    </Box>
  );
}
