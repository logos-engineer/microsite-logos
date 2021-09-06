import { Heading, Box, GridItem, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import { wpArticle } from "@/types/wp";
import Link from "next/link";
import useDataUrl from "../../../hooks/useDataUrl";

interface Props {
  data: wpArticle;
}

export default function ArticleCard({ data }: Props) {
  const dataUrl = useDataUrl(275, 332);

  const imageURL = data._embedded["wp:featuredmedia"][0].source_url;
  return (
    <Box w="full" display="grid" gridTemplateColumns="repeat(5,1fr)">
      <GridItem colSpan={2}>
        <Box width="100%" height="100%">
          <Image
            src={imageURL}
            width={360}
            height={352}
            alt={data._embedded["wp:featuredmedia"][0].slug.replaceAll(
              "-",
              " "
            )}
            placeholder="blur"
            blurDataURL={dataUrl}
            layout="responsive"
          />
        </Box>
      </GridItem>
      <GridItem
        boxSizing="border-box"
        colStart={3}
        colSpan={3}
        bgColor="white"
        display="flex"
        flexDir="column"
        justifyContent="center"
        py="2"
        px="4"
        gridGap="5"
        borderRightRadius="3xl"
        position="relative"
        zIndex="1"
      >
        <Heading as="h2" variant="h4" fontWeight="bold">
          {data.title.rendered}
        </Heading>
        <Text dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
        <Link href={data.link} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"baca " + data.title.rendered}
          >
            <Button
              aria-label={"read more " + data.title.rendered}
              variant="outline"
              w="max-content"
              _hover={{
                color: "white",
                bg: "blue.400",
              }}
            >
              Read More
            </Button>
          </a>
        </Link>
      </GridItem>
    </Box>
  );
}
