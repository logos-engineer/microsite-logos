import { fetcher } from "../../utils/utils";

export default async function getArticle(req: any, res: any) {
  const result = await fetcher(
    "https://logosid.xyz/wp-json/wp/v2/posts?per_page=2&_embed"
  );

  res.status(200).json(result);
}
