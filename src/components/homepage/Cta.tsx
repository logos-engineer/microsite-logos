import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import logos from "@/public/img/logos_component.svg";
import typography from "@/public/img/typography.svg";

const Cta = () => {
  return (
    <Box width="full">
      <Box
        m="140px auto"
        h="288px"
        w="1155px"
        bg="pink.primary"
        borderRadius="16px"
        overflow="hidden"
      >
        <Container p="53px 60px">
          <Grid templateColumns="repeat(12,1fr)">
            <GridItem colSpan={6}>
              <VStack alignItems="flex-start" spacing="32px">
                <Text
                  variant="2xLarge"
                  as="h3"
                  fontSize="4xl"
                  fontWeight="500"
                  lineHeight="shorter"
                >
                  Dukung kami untuk jadi Logos yang lebih baik
                </Text>
                <Button>Support Us</Button>
              </VStack>
            </GridItem>
            <GridItem colSpan={6} position="relative" top="-53px">
              <Box position="absolute" zIndex="4" right="0px" top="24px">
                <Image src={logos} alt="" />
              </Box>
              <Box position="absolute" zIndex="3" top="-57px" right="-69px">
                <Image src={typography} alt="" height="600px" width="795px" />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Cta;
