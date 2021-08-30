import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  VStack,
  Button,
  Link,
  Skeleton,
} from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import { wpArticle } from "@/types/wp";
import { fetcher } from "../../../utils/utils";
import useSWR from "swr";

export default function Article() {
  const { data, error } = useSWR<wpArticle[]>("/api/wp-article", fetcher);

  return (
    <Box width="full" mt="44" mb="24" as="section" id="artikel">
      <Grid templateColumns="repeat(12,1fr)" width="full">
        <GridItem colSpan={12} display="grid">
          <Box
            w="full"
            bgColor="#F5F6F8"
            display="flex"
            borderRightRadius="32px"
            position="relative"
          >
            <Container position="relative">
              <Box
                _before={{
                  position: "absolute",
                  display: "block",
                  width: "217px",
                  height: "193px",
                  backgroundImage: "url('/pattern/dotpattern.svg')",
                  content: '"  "',
                  top: "-50px",
                  left: "-50px",
                }}
              ></Box>
              <Box
                _before={{
                  position: "absolute",
                  display: "block",
                  width: "155px",
                  height: "155px",
                  backgroundImage: "url('/pattern/linepattern.svg')",
                  content: '" "',
                  bottom: "30px",
                  right: "-10px",
                }}
              ></Box>
              <Box marginY="-8" display="flex">
                <Heading variant="h2" as="h1" zIndex="20" flexGrow={1}>
                  Our Latest Articles
                </Heading>
                <Link href="https://logosid.xyz" role="link" isExternal>
                  <Button variant="primary">Visit Our Website</Button>
                </Link>
              </Box>

              <Skeleton isLoaded={data ? true : false} minH="1000px" w="100%">
                <VStack py="14" position="relative" spacing="10">
                  {data?.map((article) => (
                    <ArticleCard key={article.id} data={article} />
                  ))}
                </VStack>
              </Skeleton>
            </Container>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
