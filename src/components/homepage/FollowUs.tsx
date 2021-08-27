import { VStack, HStack, Heading } from "@chakra-ui/react";
import AccessibleLink from "@/components/AccessibleLink";
import Instagram from "../icons/Instagram";
import Spotify from "../icons/Spotify";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";

const FollowUs = () => {
  return (
    <VStack spacing="64px" as="section" mb="140px" id="sosial-media">
      <Heading variant="h1" as="h1" color="black.primary">
        Follow Us
      </Heading>
      <HStack minW="555px" spacing="111px">
        <AccessibleLink
          href="https://instagram.com/_logosid"
          isExternal
          aria-label="Instagram"
        >
          <Instagram boxSize="64px" color="pink.500" />
        </AccessibleLink>
        <AccessibleLink
          href="https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML?si=VflhXjXRQqCL0VTVTO2_Zw&nd=1"
          isExternal
          aria-label="Spotify"
        >
          <Spotify boxSize="64px" color="pink.500" />
        </AccessibleLink>
        <AccessibleLink
          href="https://twitter.com/logos_id"
          isExternal
          aria-label="Twitter"
        >
          <Twitter width="60px" height="64px" color="pink.500" />
        </AccessibleLink>
        <AccessibleLink
          href="https://www.youtube.com/channel/UCh3AnUWH0gaiRi-ibilRj2Q"
          isExternal
          aria-label="Youtube"
        >
          <Youtube width="92px" height="64px" color="pink.500" />
        </AccessibleLink>
      </HStack>
    </VStack>
  );
};

export default FollowUs;
