import {
  Text,
  Container,
  Grid,
  GridItem,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import ImageWebinar from "@/public/img/Image Webinar.png";
import IllustrateTiles from "@/public/img/Illustrate tiles.png";

export default function Webinar() {
  return (
    <Container mb="20">
      <Grid
        display="grid"
        templateColumns="repeat(12,1fr)"
        gap="30px"
        position="relative"
        alignItems="center"
      >
        <GridItem colSpan={5} position="relative" h="512px">
          <Box width="217px" height="195px">
            <Image
              src={IllustrateTiles}
              width={217}
              height={195}
              alt="Illustration tiles"
              placeholder="blur"
              layout="responsive"
            />
          </Box>
          <Box
            position="absolute"
            top="7"
            left="5"
            width="512px"
            height="512px"
          >
            <Image
              src={ImageWebinar}
              width={512}
              height={512}
              alt="Webinar Poster"
              placeholder="blur"
              layout="responsive"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={6} colStart={7}>
          <Heading variant="h3" as="h1" mb="5">
            Opresi Driver dalam Kultur Kerja {"Gig Economy"} Startup Indonesia.
          </Heading>
          <Text mb="5">
            Fenomena start up yang mengeksploitasi pekerjanya akhir-akhir ini
            merupakan salah satu akibat buruk dari sistem {"Gig Economy"} Gi...
          </Text>
          <Button variant="primary">Daftar Webinar</Button>
        </GridItem>
      </Grid>
    </Container>
  );
}
