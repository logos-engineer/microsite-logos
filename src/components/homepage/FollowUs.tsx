import { VStack, HStack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import instagram from "@/public/icon/instagram.svg";
import spotify from "@/public/icon/spotify.svg";
import twitter from "@/public/icon/twitter.svg";
import youtube from "@/public/icon/youtube.svg";
import AccessibleLink from "@/components/AccessibleLink";

const FollowUs = () => {
  return (
    <VStack spacing="64px">
      <Heading variant="h1" as="h1" color="pink.primary">
        Follow Us
      </Heading>
      <HStack minW="555px" spacing="111px">
        <AccessibleLink href="https://instagram.com/_logosid" isExternal>
          <Image src={instagram} alt="" height="100px" width="100px" />
        </AccessibleLink>
        <AccessibleLink
          href="https://open.spotify.com/show/2bwe0dyWnFKmqXaYCSwhML?si=VflhXjXRQqCL0VTVTO2_Zw&nd=1"
          isExternal
        >
          <Image src={spotify} alt="" height="100px" width="100px" />
        </AccessibleLink>
        <AccessibleLink href="https://twitter.com/logos_id" isExternal>
          <Image src={twitter} alt="" height="100px" width="100px" />
        </AccessibleLink>
        <AccessibleLink
          href="https://www.youtube.com/channel/UCh3AnUWH0gaiRi-ibilRj2Q"
          isExternal
        >
          <Image src={youtube} alt="" height="100px" width="143px" />
        </AccessibleLink>
      </HStack>
    </VStack>
  );
};

export default FollowUs;
