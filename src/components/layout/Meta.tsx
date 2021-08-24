import Head from "next/head";
import { BRAND, BRAND_TAGLINE, KEYWORDS, SITE } from "constants/texts";
import { HOME, META_IMAGE } from "constants/paths";

const Meta = ({
  title = `${SITE} - ${BRAND}`,
  description = `${BRAND_TAGLINE}`,
  url = HOME,
  image = `${HOME}${META_IMAGE}`,
  keywords = KEYWORDS,
}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <title>{title}</title>

      <meta name="description" content={description} key="description" />
      <meta name="keywords" content={keywords} />

      <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />

      <meta property="og:site_name" content={`${SITE} ${BRAND}`} />
      <meta key="og-title" property="og:title" content={title} />
      <meta key="og-image" property="og:image" content={image} />
      <meta key="og-url" property="og:url" content={url} />
    </Head>
  );
};

export default Meta;
