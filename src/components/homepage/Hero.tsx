import React from "react";
import {
  Text,
  Box,
  Container,
  Heading,
  Button,
  Grid,
  GridItem,
  HStack,
  useBreakpointValue,
  Icon,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import HeroImage from "@/public/img/hero.png";
import splitbee from "@splitbee/web";
import { SPLITBEE_EVENTS_NAME } from "constants/eventSplitbee";
import { SUPPORT_LINK, WEBINAR_LINK } from "constants/paths";

const SquareIllustrate = (props: any) => {
  return (
    <Icon
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M83.5471 69.8395C83.8371 69.5495 84 69.1562 84 68.7461C84 67.3685 82.3344 66.6786 81.3603 67.6527L67.6528 81.3601C66.6787 82.3343 67.3686 84 68.7463 84C69.1565 84 69.5498 83.8371 69.8398 83.5471L83.5471 69.8395ZM82.8127 84C81.7549 84 81.2252 82.7211 81.9732 81.9731C82.7211 81.2252 84 81.7549 84 82.8127C84 83.4684 83.4684 84 82.8127 84ZM53.8131 84C54.2232 84 54.6166 83.8371 54.9066 83.547L83.5471 54.9062C83.8371 54.6162 84 54.2229 84 53.8128C84 52.4352 82.3344 51.7453 81.3603 52.7194L52.7196 81.3601C51.7454 82.3343 52.4354 84 53.8131 84ZM38.8798 84C39.2899 84 39.6832 83.8371 39.9733 83.5471L83.5471 39.9728C83.8371 39.6829 84 39.2896 84 38.8794C84 37.5018 82.3344 36.8119 81.3603 37.786L37.7863 81.3601C36.8121 82.3343 37.502 84 38.8798 84ZM23.9464 84C24.3566 84 24.7499 83.8371 25.0399 83.5471L83.5471 25.0395C83.8371 24.7495 84 24.3562 84 23.9461C84 22.5684 82.3344 21.8785 81.3602 22.8527L22.8529 81.3601C21.8787 82.3343 22.5687 84 23.9464 84ZM9.0131 84C9.42324 84 9.81658 83.8371 10.1066 83.5471L83.5471 10.1064C83.8371 9.81636 84 9.42302 84 9.01289C84 7.63519 82.3343 6.94523 81.3601 7.91942L7.91961 81.3601C6.94541 82.3343 7.63536 84 9.0131 84ZM-3.27778e-06 74.9868C-3.338e-06 76.3645 1.66559 77.0544 2.6397 76.0803L76.0803 2.6399C77.0545 1.66571 76.3645 -3.33757e-07 74.9868 -3.93979e-07C74.5767 -4.11906e-07 74.1833 0.162925 73.8933 0.452935L0.452901 73.8934C0.162915 74.1834 -3.25985e-06 74.5767 -3.27778e-06 74.9868ZM-2.62502e-06 60.0535C-2.68524e-06 61.4311 1.66559 62.121 2.6397 61.1469L61.147 2.63985C62.1212 1.66568 61.4312 -9.86512e-07 60.0535 -1.04673e-06C59.6434 -1.06466e-06 59.2501 0.162922 58.9601 0.452926L0.452901 58.9601C0.162908 59.2501 -2.6071e-06 59.6434 -2.62502e-06 60.0535ZM-1.97227e-06 45.1202C-2.03248e-06 46.4978 1.66559 47.1877 2.63971 46.2136L46.2137 2.63991C47.1879 1.66572 46.498 -1.63927e-06 45.1202 -1.69949e-06C44.7101 -1.71742e-06 44.3168 0.162925 44.0267 0.452936L0.452902 44.0268C0.162916 44.3168 -1.95434e-06 44.7101 -1.97227e-06 45.1202ZM-1.31951e-06 30.1868C-1.37973e-06 31.5645 1.66559 32.2544 2.63971 31.2803L31.2804 2.63991C32.2546 1.66572 31.5646 -2.29202e-06 30.1869 -2.35225e-06C29.7768 -2.37017e-06 29.3834 0.162924 29.0934 0.452935L0.452902 29.0934C0.162909 29.3834 -1.30158e-06 29.7767 -1.31951e-06 30.1868ZM-6.66748e-07 15.2534C-7.26969e-07 16.6311 1.6657 17.3211 2.63989 16.3469L16.347 2.63992C17.3212 1.66572 16.6313 -2.94478e-06 15.2536 -3.005e-06C14.8434 -3.02293e-06 14.4501 0.162921 14.1601 0.452929L0.452941 14.1599C0.162925 14.4499 -6.4882e-07 14.8433 -6.66748e-07 15.2534ZM-5.18965e-08 1.18725C-9.81308e-08 2.24497 1.27881 2.77469 2.02675 2.02679C2.77471 1.27887 2.245 -3.57362e-06 1.18726 -3.61986e-06C0.531555 -3.64852e-06 -2.32349e-08 0.531548 -5.18965e-08 1.18725Z"
        fill="#F65097"
      />
    </Icon>
  );
};

const Hero = () => {
  const variantTitle = useBreakpointValue({ base: "mobile-h1", lg: "h1" });
  const variantSubtitle = useBreakpointValue({ base: "md", lg: "lg" });

  const pressButton = (link: any, type:string) =>{
    let event = type === 'webinar' ? SPLITBEE_EVENTS_NAME.REGISTER_WEBINAR : SPLITBEE_EVENTS_NAME.SUPPORT_US;
    splitbee.track(`${event}`, {link})
  }

  return (
    <Box w="full" position="relative" as="section" id="hero">
      <Box
        mt={{ base: "0", lg: "-100px" }}
        position="absolute"
        bg="pink.primary"
        zIndex="0"
        transform={{ base: "skewY(0deg)", lg: "skewY(5deg)" }}
        h="full"
        w="full"
      ></Box>
      <Container
        pt={{ base: "20px", lg: "50px" }}
        pb={{ base: "30px", sm: "140px", lg: "194px" }}
      >
        <Grid
          templateColumns="repeat(12,1fr)"
          gap={{ base: "10px", lg: "30px" }}
          position="relative"
          zIndex="2"
        >
          <GridItem
            colSpan={{ base: 12, lg: 7 }}
            rowStart={{ base: 2, lg: 1 }}
            d="flex"
            flexDir="column"
            justifyContent="center"
          >
            <Heading
              variant={variantTitle}
              as="h1"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
              mt={{ base: "12px", md: "14px" }}
            >
              Logos ID
            </Heading>
            <Text
              variant={variantSubtitle}
              color="white"
              mt="10px"
              w={{ base: "full", md: "80%", lg: "md" }}
              ml={{ base: "auto", lg: "0" }}
              mr={{ base: "auto", lg: "0" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              Tempat diskusi dan edukasi Filsafat, Sosiologi, Politik, Sejarah,
              Pop Culture, dan Sains.
            </Text>
            <HStack spacing="24px" mt="32px" d={{ base: "none", lg: "flex" }}>

              <Link isExternal href={WEBINAR_LINK}>
                <Button variant="primary" size="md" fontWeight="semibold" onClick={()=>pressButton(WEBINAR_LINK, 'webinar')}>
                  Daftar Webinar
                </Button>
              </Link>
              <Link isExternal href={SUPPORT_LINK}>
                <Button
                  variant="outline"
                  borderColor="white"
                  color="white"
                  size="md"
                  fontWeight="semibold"
                  _hover={{
                    borderColor: "blue.700",
                    bg: "blue.700",
                  }}
                  onClick={()=>{pressButton(SUPPORT_LINK, 'support')}}
                >
                  Support Us
                </Button>
              </Link>
            </HStack>
          </GridItem>
          <GridItem
            colSpan={{ base: 12, lg: 5 }}
            colEnd={13}
            rowStart={{ base: 1, lg: 1 }}
          >
            <Box
              position="relative"
              mr={{ base: "auto", lg: "-3.5rem" }}
              w={{ base: "200px", lg: "90%" }}
              h={{ base: "200px", lg: "auto" }}
              ml="auto"
            >
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
