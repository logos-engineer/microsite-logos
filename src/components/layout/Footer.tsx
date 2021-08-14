import {
  Box,
  Container,
  GridItem,
  Heading,
  Grid,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w="full" position="relative">
      <Box
        position="absolute"
        bg="pink.primary"
        zIndex="0"
        clipPath="polygon(0 0, 100% 34%, 100% 100%, 0 100%)"
        h="full"
        w="full"
      ></Box>
      <Container pt="184px" pb="80px">
        <Grid position="relative" zIndex="2">
          <GridItem>
            <Heading variant="h2" as="h2" color="white">
              Tertarik untuk Partnership?
            </Heading>
            <Text variant="2xl" color="white" mt="16px">
              Please contact us through this button below.
            </Text>
            <HStack spacing="24px" mt="32px">
              <Button variant="primary">Visit Our Website</Button>
            </HStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
