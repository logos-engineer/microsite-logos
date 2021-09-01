import { VStack, HStack, Heading, Button } from "@chakra-ui/react";
import AccessibleLink from "@/components/AccessibleLink";
import splitbee from "@splitbee/web";
import { SPLITBEE_EVENTS_NAME } from "constants/eventSplitbee";
import { SOCIAL_MEDIA } from '../../constants/data';
import { Instagram, Spotify, Twitter, Youtube} from '../icons/index';

const FollowUs = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "instagram":
       return <Instagram boxSize="64px" color="pink.500" />
      case "spotify":
        return  <Spotify boxSize="64px" color="pink.500" />  
      case "twitter":
        return <Twitter width="60px" height="64px" color="pink.500" />
      case "youtube":
        return <Youtube width="92px" height="64px" color="pink.500" />
      default:
        break;
    }
  }
  
  const renderItem = (item:any, index: number) => {
    return (
    <AccessibleLink
      key={index}
      href={item.link}
      isExternal
      aria-label={item.label}
      onClick={()=> splitbee.track(SPLITBEE_EVENTS_NAME.EXTERNAL_LINK, {type: item.label, link:item.link})}
      >
        {renderIcon(item.label)}
    </AccessibleLink>
    );
  };

  return (
    <VStack spacing="64px" as="section" mb="140px" id="sosial-media">
      <Heading variant="h1" as="h1" color="black.primary">
        Follow Us
      </Heading>
      <HStack minW="555px" spacing="111px">
        {SOCIAL_MEDIA.map((item, index)=>renderItem(item, index))}
      </HStack>
    </VStack>
  );
};

export default FollowUs;
