import { VStack, HStack, Heading, useBreakpointValue } from "@chakra-ui/react";
import AccessibleLink from "@/components/AccessibleLink";
import Instagram from "../icons/Instagram";
import Spotify from "../icons/Spotify";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";

const FollowUs = () => {
  const variantHeading = useBreakpointValue({ base: "h4", lg: "h2" });
  return (
    <VStack
      spacing={{ base: "20px", lg: "64px" }}
      as="section"
      mb={{ base: "45px", lg: "140px" }}
      id="sosial-media"
      maxW="container.xl"
      w="full"
      mx="auto"
    >
      <Heading variant={variantHeading} as="h1" color="black.primary">
        Follow Us
      </Heading>
      <HStack
        mx="auto"
        w="full"
        justifyContent="center"
        spacing={{ base: "36px", lg: "64px" }}
      >
        <AccessibleLink
          href="https://instagram.com/_logosid"
          isExternal
          aria-label="Instagram"
          _hover={{
            opacity: "0.6",
          }}
        >
          <Instagram boxSize={{ base: "30px", lg: "64px" }} color="pink.500" />
        </AccessibleLink>
        <AccessibleLink
          href="https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML?si=VflhXjXRQqCL0VTVTO2_Zw&nd=1"
          isExternal
          aria-label="Spotify"
          _hover={{
            opacity: "0.6",
          }}
        >
          <Spotify boxSize={{ base: "30px", lg: "64px" }} color="pink.500" />
        </AccessibleLink>
        <AccessibleLink
          href="https://twitter.com/logos_id"
          isExternal
          aria-label="Twitter"
          _hover={{
            opacity: "0.6",
          }}
        >
          <Twitter boxSize={{ base: "30px", lg: "64px" }} color="pink.500" />
        </AccessibleLink>
        <AccessibleLink
          href="https://www.youtube.com/channel/UCh3AnUWH0gaiRi-ibilRj2Q"
          isExternal
          aria-label="Youtube"
          _hover={{
            opacity: "0.6",
          }}
        >
          <Youtube boxSize={{ base: "30px", lg: "64px" }} color="pink.500" />
        </AccessibleLink>
      </HStack>
    </VStack>
  );
};

export default FollowUs;
