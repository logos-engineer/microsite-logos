import { Box, Heading, Text, Button, Divider } from "@chakra-ui/react";
export default function Styleguide() {
  return (
    <Box>
      <Heading as="h1">Heading</Heading>
      <Heading variant="h1" as="h1">
        H1
      </Heading>
      <Heading variant="h2" as="h2">
        H2
      </Heading>
      <Heading variant="h3" as="h3">
        H3
      </Heading>
      <Heading variant="h4" as="h4">
        H4
      </Heading>
      <Heading variant="h5" as="h5">
        H5
      </Heading>
      <Heading variant="h6" as="h6">
        H6
      </Heading>
      <Heading variant="mobile-h1" as="h1">
        Mobile H1
      </Heading>
      <Heading variant="mobile-h2" as="h2">
        Mobile H2
      </Heading>
      <Heading variant="mobile-h3" as="h3">
        Mobile H3
      </Heading>
      <Divider />
      <Heading>BodyText</Heading>
      <Text variant="3xl">3XLarge</Text>
      <Text variant="2xl">2XLarge</Text>
      <Text variant="xl">XLarge</Text>
      <Text variant="lg">Large</Text>
      <Text variant="md">Medium</Text>
      <Text variant="sm">Small</Text>
      <Text variant="xs">XSmall</Text>
      <Text variant="subtitle">Subtitle</Text>
      <Text variant="subtitle2">Subtitle2</Text>
      <Heading variant="mobile-lg">Mobile Large</Heading>
      <Heading variant="mobile-semibold">Mobile Semibold</Heading>
      <Divider />
      <Heading>Button</Heading>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="primary" isDisabled={true}>
        Primary disable
      </Button>
      <Button variant="outline" isDisabled={true}>
        Outline disable
      </Button>
    </Box>
  );
}
