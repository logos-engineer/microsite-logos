import { Box, Text, Button, Divider } from "@chakra-ui/react";
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
export default function Styleguide() {
  return (
    <Box>
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
    </Box>
  );
}
