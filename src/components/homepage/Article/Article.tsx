import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  VStack,
  Button,
  Link,
  useMediaQuery,
  useBreakpointValue,
} from "@chakra-ui/react";
import splitbee from "@splitbee/web";
import { SPLITBEE_EVENTS_NAME } from "constants/eventSplitbee";
import { WEBINAR_LINK } from "constants/paths";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticleCardMobile from "./ArticleCardMobile";
import { wpArticle } from "@/types/wp";
import fetcher from "@/utils/utils";
import useSWR from "swr";
export default function Article() {
  const { data, error } = useSWR<wpArticle[]>("/api/wp-article", fetcher);
  const variantHeading = useBreakpointValue({ base: "h4", lg: "h2" });
  const [mediaQuery] = useMediaQuery("(min-width: 1024px)");
  const [isTablet, setIsTablet] = useState<boolean>(true);

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    if (mediaQuery !== isTablet) {
      setIsTablet(mediaQuery);
    }
  }, [mediaQuery, isTablet]);
  return (
    <Box
      width="full"
      mt={{ base: "44px", lg: "44" }}
      mb={{ base: "24px", lg: "24" }}
      as="section"
      id="article"
    >
      <Grid templateColumns="repeat(12,1fr)" width="full">
        <GridItem colSpan={12} display="grid">
          <Box
            w="full"
            bgColor="#F5F6F8"
            display="flex"
            borderRightRadius="32px"
            position="relative"
          >
            <Container position="relative" d="flex" flexDir="column">
              <Box
                _before={{
                  position: "absolute",
                  display: "block",
                  width: { base: "64px", lg: "217px" },
                  height: { base: "58px", lg: "193px" },
                  backgroundImage: "url('/pattern/dotpattern.svg')",
                  bgSize: "cover",
                  content: '"  "',
                  top: { base: "-5%", lg: "-50px" },
                  left: { base: "4%", lg: "-50px" },
                }}
              ></Box>
              <Box></Box>
              <Box marginY="-8" display="flex">
                <Heading
                  variant={variantHeading}
                  as="h1"
                  zIndex="20"
                  flexGrow={1}
                >
                  Our Latest Articles
                </Heading>
                <Button
                  variant="primary"
                  d={{ base: "none", lg: "inline-flex" }}
                  zIndex="5"
                  pos="relative"
                >
                  Visit Out Website
                </Button>
              </Box>

              <VStack
                py="14"
                position="relative"
                spacing="10"
                _before={{
                  position: "absolute",
                  zIndex: 1,
                  display: "block",
                  width: { base: "90px", lg: "155px" },
                  height: { base: "90px", lg: "155px" },
                  backgroundImage: "url('/pattern/linepattern.svg')",
                  bgSize: "cover",
                  content: '" "',
                  bottom: "30px",
                  right: "-10px",
                }}
                minH={["500px", "500px", "900px"]}
              >
                {isTablet ? (
                  <>
                    {data?.map((article:any) => (
                      <ArticleCard key={article.id} data={article} />
                    ))}
                  </>
                ) : (
                  <>
                    {data?.map((article:any) => (
                      <ArticleCardMobile key={article.id} data={article} />
                    ))}
                  </>
                )}
              </VStack>
              <Link
                href="https://logosid.xyz"
                role="link"
                isExternal
                d={{ base: "inline-flex", lg: "none" }}
                mb="-25px"
                mx="auto"
              >
                <Button variant="primary">Visit Out Website</Button>
              </Link>
            </Container>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
