import {
  AspectRatio,
  Box,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export interface ArticleCardMobileProps {
  imageBg: string;
  headlineCard: string;
}

const ArticleCardMobile = ({
  imageBg,
  headlineCard,
}: ArticleCardMobileProps) => {
  const variantHeadline = useBreakpointValue({ base: "subtitle2", sm: "h4" });
  return (
    <AspectRatio
      ratio={2 / 1}
      position="relative"
      borderRadius="12px"
      bg={`url(${imageBg})`}
      bgSize="cover"
      overflow="hidden"
      w="full"
      h=""
    >
      <Box
        bg="linear-gradient(360deg, rgba(0, 0, 0, 0.64) 45.78%, rgba(0, 0, 0, 0) 100%)"
        w="full"
        h="full"
        position="absolute"
        padding={{ base: "16px", sm: "24px" }}
        d="flex"
      >
        <Heading as="h2" variant={variantHeadline} mt="auto" color="white">
          {headlineCard}
        </Heading>
      </Box>
    </AspectRatio>
  );
};

export default ArticleCardMobile;
