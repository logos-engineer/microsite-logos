import {
  AspectRatio,
  Box,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { wpArticle } from "@/types/wp";
import Link from "next/link";

export interface ArticleCardMobileProps {
  data: wpArticle;
}

const ArticleCardMobile = ({ data }: ArticleCardMobileProps) => {
  const variantHeadline = useBreakpointValue({ base: "subtitle2", sm: "h4" });
  return (
    <Link href={data.link} passHref>
      <Box
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={"baca " + data.title.rendered}
        width="100%"
      >
        <AspectRatio
          ratio={2 / 1}
          position="relative"
          zIndex="1"
          borderRadius="12px"
          bg={`url(${data._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url})`}
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
              {data.title.rendered}
            </Heading>
          </Box>
        </AspectRatio>
      </Box>
    </Link>
  );
};

export default ArticleCardMobile;
