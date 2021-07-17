import { Box, Text, Button, Divider, Flex, Heading } from "@chakra-ui/react";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  MobileH1,
  MobileH2,
  MobileH3,
} from "@/components/Heading";
import Head from "next/head";
export default function Styleguide() {
  return (
    <Box>
      <Head>
        <title>Styleguide </title>
      </Head>
      <H1>Heading</H1>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <H5>H5</H5>
      <H6>H6</H6>
      <MobileH1>Mobile H1</MobileH1>
      <MobileH2>Mobile H2</MobileH2>
      <MobileH3>Mobile H3</MobileH3>
      <Divider />
      <H1>BodyText</H1>
      <Text variant="3xl">3XLarge</Text>
      <Text variant="2xl">2XLarge</Text>
      <Text variant="xl">XLarge</Text>
      <Text variant="lg">Large</Text>
      <Text variant="md">Medium</Text>
      <Text variant="sm">Small</Text>
      <Text variant="xs">XSmall</Text>
      <Text variant="subtitle">Subtitle</Text>
      <Text variant="subtitle2">Subtitle2</Text>
      <Text variant="mobile-lg">Mobile Large</Text>
      <Text variant="mobile-semibold">Mobile Semibold</Text>
      <Divider />
      <H1>Button</H1>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="primary" isDisabled={true}>
        Primary disable
      </Button>
      <Button variant="outline" isDisabled={true}>
        Outline disable
      </Button>
      <Divider />
      <H1>Color</H1>
      <H5>Black</H5>
      <Flex p="5" gridGap="10">
        <Box>
          <Box w="20" h="20" display="block" bgColor="black.primary"></Box>
          <Text>Black Primary</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="black.active"></Box>
          <Text>Black Active</Text>
        </Box>
      </Flex>
      <H5>Gray</H5>
      <Flex p="5" gridGap="10">
        <Box>
          <Box w="20" h="20" display="block" bgColor="gray.line"></Box>
          <Text>Gray line</Text>
        </Box>
      </Flex>
      <H5>Pink</H5>
      <Flex p="5" gridGap="10">
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.primary"></Box>
          <Text>Pink Primary</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.100"></Box>
          <Text>Pink 100</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.200"></Box>
          <Text>Pink 200</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.300"></Box>
          <Text>Pink 300</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.400"></Box>
          <Text>Pink 400</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.500"></Box>
          <Text>Pink 500</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.600"></Box>
          <Text>Pink 600</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.700"></Box>
          <Text>Pink 700</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.800"></Box>
          <Text>Pink 800</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="pink.900"></Box>
          <Text>Pink 900</Text>
        </Box>
      </Flex>
      <H5>yellow</H5>
      <Flex p="5" gridGap="10">
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.primary"></Box>
          <Text>yellow Primary</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.100"></Box>
          <Text>yellow 100</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.200"></Box>
          <Text>yellow 200</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.300"></Box>
          <Text>yellow 300</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.400"></Box>
          <Text>yellow 400</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.500"></Box>
          <Text>yellow 500</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.600"></Box>
          <Text>yellow 600</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.700"></Box>
          <Text>yellow 700</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.800"></Box>
          <Text>yellow 800</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="yellow.900"></Box>
          <Text>yellow 900</Text>
        </Box>
      </Flex>
      <H5>blue</H5>
      <Flex p="5" gridGap="10">
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.primary"></Box>
          <Text>blue Primary</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.100"></Box>
          <Text>blue 100</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.200"></Box>
          <Text>blue 200</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.300"></Box>
          <Text>blue 300</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.400"></Box>
          <Text>blue 400</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.500"></Box>
          <Text>blue 500</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.600"></Box>
          <Text>blue 600</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.700"></Box>
          <Text>blue 700</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.800"></Box>
          <Text>blue 800</Text>
        </Box>
        <Box>
          <Box w="20" h="20" display="block" bgColor="blue.900"></Box>
          <Text>blue 900</Text>
        </Box>
      </Flex>
    </Box>
  );
}
