import React from "react";
import {
  Text,
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import HeroImage from "@/public/img/hero.png";
const Hero = () => {
  return (
    <Box w="full" position="relative">
      <Box
        mt="-100px"
        position="absolute"
        bg="pink"
        zIndex="0"
        transform="skewY(5deg)"
        h="full"
        w="full"
      ></Box>
      <Container pt="50px" pb="194px">
        <Grid
          templateColumns="repeat(12,1fr)"
          gap="30px"
          position="relative"
          zIndex="2"
        >
          <GridItem
            colSpan={7}
            d="flex"
            flexDir="column"
            justifyContent="center"
          >
            <Heading variant="h1" as="h1" color="white">
              Logos ID
            </Heading>
            <Text variant="2xLarge" color="white" mt="10px">
              Tempat diskusi dan edukasi Filsafat, Sosiologi, Politik, Sejarah,
              Pop Culture, dan Sains.
            </Text>
            <HStack spacing="24px" mt="32px">
              <Button variant="primary">Daftar Webinar</Button>
              <Button variant="outline">Dukung Kami</Button>
            </HStack>
          </GridItem>
          <GridItem colSpan={5} colEnd={13}>
            <Box position="relative" mr="-3.5rem" w="90%" ml="auto">
              <Image
                src={HeroImage}
                placeholder="blur"
                width={467}
                height={485}
                layout="responsive"
                alt="Logos Filsafat"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
