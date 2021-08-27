import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  VStack,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticleCardMobile from "./ArticleCardMobile";

export default function Article() {
  const [mediaQuery] = useMediaQuery("(min-width: 1024px)");
  const [isTablet, setIsTablet] = useState<boolean>(false);
  useEffect(() => {
    if (mediaQuery !== isTablet) {
      setIsTablet(mediaQuery);
    }
  }, [mediaQuery]);
  return (
    <Box width="full" mt="44" mb="24" as="section" id="article">
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
                  width: "217px",
                  height: "193px",
                  backgroundImage: "url('/pattern/dotpattern.svg')",
                  content: '"  "',
                  top: "-50px",
                  left: "-50px",
                }}
              ></Box>
              <Box></Box>
              <Box marginY="-8" display="flex">
                <Heading variant="h2" as="h1" zIndex="20" flexGrow={1}>
                  Our Latest Articles
                </Heading>
                <Button
                  variant="primary"
                  d={{ base: "none", lg: "inline-flex" }}
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
                  display: "block",
                  width: { base: "90px", lg: "155px" },
                  height: { base: "90px", lg: "155px" },
                  backgroundImage: "url('/pattern/linepattern.svg')",
                  content: '" "',
                  bottom: "30px",
                  right: "-10px",
                }}
              >
                {isTablet ? (
                  <>
                    <ArticleCard />
                    <ArticleCard />
                  </>
                ) : (
                  <>
                    <ArticleCardMobile
                      headlineCard="A Feminism History Recap: The First Wave of Feminism"
                      imageBg="/img/article/mobile-cover-1.png"
                    />
                    <ArticleCardMobile
                      headlineCard="Diferensiasi, Relasionalitas dan Fraksi: Panduan Analisis Kelas Agraria"
                      imageBg="/img/article/mobile-cover-2.png"
                    />
                  </>
                )}
              </VStack>
              <Button
                variant="primary"
                d={{ base: "inline-flex", lg: "none" }}
                mb="-25px"
                mx="auto"
              >
                Visit Out Website
              </Button>
            </Container>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
