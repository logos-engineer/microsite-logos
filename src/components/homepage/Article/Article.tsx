import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  VStack,
  Button,
  useMediaQuery,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticleCardMobile from "./ArticleCardMobile";

export default function Article() {
  const variantHeading = useBreakpointValue({ base: "h4", lg: "h2" });
  const [mediaQuery] = useMediaQuery("(min-width: 1024px)");
  const [isTablet, setIsTablet] = useState<boolean>(false);
  useEffect(() => {
    if (mediaQuery !== isTablet) {
      setIsTablet(mediaQuery);
    }
  }, [mediaQuery]);
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
