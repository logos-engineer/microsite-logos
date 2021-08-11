import { Heading, Box, GridItem, Text, Button } from "@chakra-ui/react";

interface Props {
  variant?: "image-left" | "image-right";
}
import Image from "next/image";
export default function ArticleCard({ variant = "image-left" }: Props) {
  return (
    <Box w="full" display="grid" gridTemplateColumns="repeat(2,1fr)">
      <GridItem colSpan={1} order={variant === "image-left" ? 1 : 2}>
        <Image
          src={require("@/public/img/Article1.png")}
          width={480}
          height={480}
          alt="articlePage"
          layout="responsive"
        />
      </GridItem>
      <GridItem
        colSpan={1}
        bgColor="white"
        p="14"
        display="flex"
        flexDir="column"
        justifyContent="center"
        gridGap="5"
        order={variant === "image-right" ? 1 : 2}
        borderTopRightRadius={variant === "image-left" ? "32px" : "0"}
        borderBottomLeftRadius={variant === "image-right" ? "32px" : "0"}
      >
        <Heading as="h2" variant="h4" fontWeight="bold">
          A Feminism History Recap: The First Wave of Feminism
        </Heading>
        <Text>
          What is feminism? Arguably for most, the meaning of feminism is still
          dependent on the eyes of the beholder...
        </Text>
        <Button variant="outline" w="max-content">
          Read More
        </Button>
      </GridItem>
    </Box>
  );
}
