import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import splitbee from "@splitbee/web";
import { SPLITBEE_EVENTS_NAME } from "constants/eventSplitbee";
import { WEBINAR_LINK } from "constants/paths";
import AccessibleLink from "../AccessibleLink";

const Cta = () => {
  return (
    <Box width="full" as="section" id="support">
      <Box
        m="140px auto"
        h="288px"
        w="1155px"
        bg="pink.primary"
        borderRadius="16px"
        overflow="hidden"
      >
        <Container py="24px" px="60px">
          <Grid templateColumns="repeat(12,1fr)">
            <GridItem colSpan={6}>
              <VStack alignItems="flex-start" spacing="32px" mt="25px">
                <Text
                  variant="2xLarge"
                  as="h3"
                  fontSize="4xl"
                  fontWeight="500"
                  lineHeight="shorter"
                  color="white"
                >
                  Dukung kami untuk jadi Logos yang lebih baik
                </Text>
                <AccessibleLink
                  href="https://karyakarsa.com/logos_id"
                  isExternal
                >
                  <Button onClick={()=> splitbee.track(SPLITBEE_EVENTS_NAME.SUPPORT, {link: WEBINAR_LINK})}>Support Us</Button>
                </AccessibleLink>
              </VStack>
            </GridItem>
            <GridItem colSpan={6} position="relative">
              <Image
                src="/img/logos_component.svg"
                alt=""
                boxSize="240px"
                ml="auto"
                position="relative"
                zIndex="4"
              />
              <Box position="absolute" zIndex="2" top="-10%" right="-12%">
                <Image
                  src="/pattern/topography.svg"
                  alt=""
                  height="288px"
                  width="531px"
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Cta;
