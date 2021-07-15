import { Text, Box, Container, Heading, Button, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container
      maxW="container.xl"
      mx="auto"
      minH="100vh"
      border="1px solid black"
    >
      <Heading as="h1" fontSize="3xl">
        H1
      </Heading>
      <Heading as="h2" fontSize="2xl">
        H2
      </Heading>
      <Heading as="h3" fontSize="xl">
        H3
      </Heading>
      <Heading as="h5" fontSize="lg">
        H5
      </Heading>

      <Text fontSize="xs">Subtitle 2</Text>
      <Text fontSize="sm">Subtitle 1</Text>

      <Text fontSize="lg">Body Text 2XLarge</Text>
      <Text fontSize="md">Body Text XLarge</Text>
      <Text fontSize="sm">Body Text Large</Text>

      <Button colorScheme="blue">Button example</Button>

      <Flex mt="10" gridGap="10">
        <Box w="10" h="10" display="block" bgColor="black"></Box>
        <Box w="10" h="10" display="block" bgColor="blackBody"></Box>
        <Box w="10" h="10" display="block" bgColor="pink"></Box>
        <Box w="10" h="10" display="block" bgColor="lightpink"></Box>
        <Box w="10" h="10" display="block" bgColor="yellow"></Box>
        <Box w="10" h="10" display="block" bgColor="blue"></Box>
        <Box
          w="10"
          h="10"
          display="block"
          bgColor="white"
          border="1px solid black"
        ></Box>
      </Flex>
    </Container>
  );
};

export default Home;
