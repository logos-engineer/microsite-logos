import {
  Box,
  Container,
  GridItem,
  Heading,
  Grid,
  Text,
  HStack,
  Button,
  Link,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";

const Footer = () => {
  const variantHeading = useBreakpointValue({ base: "subtitle2", lg: "h2" });
  const variantSubtitle = useBreakpointValue({ base: "xs", lg: "2xl" });
  const variantButton = useBreakpointValue({
    base: "xs",
    lg: "md",
  });
  const variantFooter = useBreakpointValue({ base: "xs", lg: "sm" });
  return (
    <Box w="full" position="relative" as="footer">
      <Box
        position="absolute"
        bg="pink.primary"
        zIndex="0"
        clipPath={{ lg: "polygon(0 0, 100% 34%, 100% 100%, 0 100%)" }}
        h="full"
        w="full"
      ></Box>
      <Container
        pt={{ base: "24px", lg: "184px" }}
        pb={{ base: "60px", lg: "80px" }}
      >
        <Grid position="relative" zIndex="2">
          <GridItem>
            <Heading variant={variantHeading} as="h2" color="white">
              Tertarik untuk Partnership?
            </Heading>
            <Text
              variant={variantSubtitle}
              color="white"
              mt={{ base: "4px", lg: "16px" }}
            >
              Please contact us through this button below.
            </Text>
            <HStack spacing="24px" mt={{ base: "12px", lg: "32px" }}>
              <Link role="link" href="https://logosid.xyz" isExternal>
                <Button variant="primary" size={variantButton}>
                  Visit Our Website
                </Button>
              </Link>
            </HStack>
          </GridItem>
        </Grid>
      </Container>
      <Box
        position="absolute"
        zIndex="3"
        py={{ base: 3, lg: 3 }}
        left="0"
        bottom="0"
        right="0"
        bg="pink.700"
        d="flex"
        justifyContent="center"
      >
        <Stack
          direction={{ base: "row" }}
          spacing={{ base: "4px", lg: "12px" }}
        >
          <Text variant={variantFooter} color="white">
            &copy; 2021. Made with ❤ by
          </Text>
          <Link
            href="https://github.com/logos-engineer/microsite-logos"
            isExternal
            role="link"
          >
            <Text variant={variantFooter} color="white">
              Logos Engineer
            </Text>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
