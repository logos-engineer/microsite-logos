import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Text,
  Image,
  VStack,
  AspectRatio,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import AccessibleLink from "../AccessibleLink";

const Cta = () => {
  const variantSubtitle = useBreakpointValue({
    base: "subtitle2",
    lg: "h3",
  });
  const variantSupport = useBreakpointValue({
    base: "xs",
    lg: "md",
  });
  return (
    <Box width="full" as="section" id="support" px={{ base: "16px", lg: "0 " }}>
      <AspectRatio
        m={{ base: "42px auto", lg: "140px auto" }}
        ratio={{ base: 344 / 138, lg: 1155 / 288 }}
        maxW="1155px"
        bg="pink.primary"
        borderRadius="16px"
        overflow="hidden"
      >
        <Container
          py={{ base: "22px", lg: "24px" }}
          px={{ base: "16px", lg: "60px" }}
        >
          <Grid templateColumns="repeat(12,1fr)">
            <GridItem colSpan={{ base: 8, lg: 6 }}>
              <VStack
                alignItems="flex-start"
                spacing={{ base: "24px", lg: "32px" }}
                mt={{ lg: "25px" }}
                h="full"
              >
                <Heading
                  variant={variantSubtitle}
                  as="h3"
                  fontWeight="500"
                  lineHeight="shorter"
                  color="white"
                >
                  Dukung kami untuk jadi Logos yang lebih baik
                </Heading>
                <AccessibleLink
                  href="https://lynk.id/logos_id"
                  isExternal
                  role="url"
                  aria-label="support-us"
                  mt="auto"
                >
                  <Button size={variantSupport}>Support Us</Button>
                </AccessibleLink>
              </VStack>
            </GridItem>
            <GridItem colSpan={{ base: 4, lg: 6 }} position="relative">
              <Image
                src="/img/logos_component.svg"
                alt=""
                boxSize={{ base: "106px", lg: "240px" }}
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
      </AspectRatio>
    </Box>
  );
};

export default Cta;
