import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import splitbee from "@splitbee/web";
import { SPLITBEE_EVENTS_NAME } from "constants/eventSplitbee";
import { WEBINAR_LINK } from "constants/paths";
import ArticleCard from "./ArticleCard";

export default function Article() {
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
                  <Button variant="primary" onClick={()=> splitbee.track(SPLITBEE_EVENTS_NAME.REGISTER_WEBINAR,{link: WEBINAR_LINK})}>Visit Our Website</Button>
                </Link>
              </Box>

              <VStack py="14" position="relative" spacing="10">
                <ArticleCard />
                <ArticleCard />
              </VStack>
            </Container>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
