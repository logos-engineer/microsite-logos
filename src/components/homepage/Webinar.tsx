import {
  Text,
  Container,
  Grid,
  GridItem,
  Heading,
  Button,
  Box,
  Image as ChakraImage,
  useBreakpointValue,
  VStack,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import ImageWebinar from "@/public/img/image-webinar.png";
import splitbee from "@splitbee/web";
import { SPLITBEE_EVENTS_NAME } from "constants/eventSplitbee";
import { WEBINAR_LINK } from "constants/paths";

export default function Webinar() {
  const variantTitle = useBreakpointValue({ base: "mobile-h3", lg: "h3" });
  const variantDescription = useBreakpointValue({
    base: "xs",
    md: "sm",
    lg: "lg",
  });
  const variantSizeButton = useBreakpointValue({ base: "xs", sm: "md" });

  return (
    <Container mb="20" mt={{ base: "50px", lg: "0" }} as="section" id="webinar">
      <Grid
        display="grid"
        templateColumns="repeat(12,1fr)"
        gap={{ base: "10px", sm: "40px" }}
        position="relative"
        alignItems="center"
      >
        <GridItem colSpan={5} position="relative">
          <Box top="7" left="5" width="100%" height="100%" zIndex="20">
            <Image
              src={ImageWebinar}
              width={416}
              height={416}
              alt="Webinar Poster"
              placeholder="blur"
              layout="responsive"
              objectFit="cover"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={7} colStart={6}>
          <Heading
            variant={variantTitle}
            as="h1"
            mb={{ base: "10px", sm: "10px", lg: "10px" }}
          >
            {
              "Opresi Driver dalam Kultur Kerja 'Gig Economy' Startup Indonesia."
            }
          </Heading>

          <VStack
            d={{ base: "none", md: "flex" }}
            mb={{ base: "10px", sm: "20px", lg: "10px" }}
            spacing="3"
          >
            <Text variant={variantDescription}>
              {`Fenomena start up yang mengeksploitasi pekerjanya akhir-akhir ini merupakan salah satu akibat buruk dari sistem "Gig Economy"`}
            </Text>
            <Text variant={variantDescription}>
              {`Gig Economy adalah suatu kondisi di mana terjadi pergeseran status pekerja, dari permanen menjadi karyawan tidak tetap.`}
            </Text>
          </VStack>
          <Link href="https://lynk.id/logos_id" role="link" isExternal>
            <Button variant="primary" size={variantSizeButton} onClick={()=> splitbee.track(SPLITBEE_EVENTS_NAME.REGISTER_WEBINAR, {link: WEBINAR_LINK})}>
              Daftar Webinar
            </Button>
          </Link>
        </GridItem>
      </Grid>
    </Container>
  );
}
