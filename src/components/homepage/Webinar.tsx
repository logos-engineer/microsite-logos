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

const StarIllustration = () => {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 0L64.0124 63.937L88.4919 4.87169L64.0356 63.9468L109.255 18.7452L64.0532 63.9644L123.128 39.5081L64.063 63.9876L128 64L64.063 64.0124L123.128 88.4919L64.0532 64.0356L109.255 109.255L64.0356 64.0532L88.4919 123.128L64.0124 64.063L64 128L63.9876 64.063L39.5081 123.128L63.9644 64.0532L18.7452 109.255L63.9468 64.0356L4.87169 88.4919L63.937 64.0124L0 64L63.937 63.9876L4.87169 39.5081L63.9468 63.9644L18.7452 18.7452L63.9644 63.9468L39.5081 4.87169L63.9876 63.937L64 0Z"
        fill="#A0AEC0"
        stroke="#D8D9DB"
        strokeWidth="4"
      />
    </svg>
  );
};

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
        <GridItem colSpan={6} position="relative" h="512px">
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
            zIndex="20"
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
          <Box position="absolute" zIndex="10" bottom="-16" right="-10">
            <StarIllustration />
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
