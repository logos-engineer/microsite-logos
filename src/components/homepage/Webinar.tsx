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
} from "@chakra-ui/react";
import Image from "next/image";
import ImageWebinar from "@/public/img/image-webinar.png";

export default function Webinar() {
  const variantTitle = useBreakpointValue({ base: "mobile-h3", lg: "h3" });
  const variantSizeButton = useBreakpointValue({ base: "xs", sm: "md" });
  return (
    <Container mb="20" mt={{ base: "50px", sm: "0" }}>
      <Grid
        display="grid"
        templateColumns="repeat(12,1fr)"
        gap={{ base: "10px", lg: "30px" }}
        position="relative"
        alignItems="center"
      >
        <GridItem
          colSpan={6}
          position="relative"
          d="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width={{ base: "165px", md: "250px", lg: "461px" }}
            height={{ base: "165px", md: "250px", lg: "461px" }}
            zIndex="4"
            position="relative"
          >
            <ChakraImage
              src="/img/ornament/square-webinar.svg"
              w="217px"
              h="195px"
              position="absolute"
              top="-7%"
              left="-10%"
              d={{ base: "none", lg: "block" }}
            />
            <Image
              src={ImageWebinar}
              alt="Webinar Poster"
              placeholder="blur"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </GridItem>
        <GridItem colSpan={6} colStart={7}>
          <Heading variant={variantTitle} as="h1" mb="5">
            {
              "Opresi Driver dalam Kultur Kerja 'Gig Economy' Startup Indonesia."
            }
          </Heading>
          <Text mb="5" d={{ base: "none", lg: "block" }}>
            {`Fenomena start up yang mengeksploitasi pekerjanya akhir-akhir ini
            merupakan salah satu akibat buruk dari sistem 'Gig Economy' Gi...`}
          </Text>
          <Button variant="primary" size={variantSizeButton}>
            Daftar Webinar
          </Button>
        </GridItem>
      </Grid>
    </Container>
  );
}
