import fetcher from "../../utils/utils";

export default async function getArticle(req: any, res: any) {
  try {
    const result = await fetcher(
      "https://logosid.xyz/wp-json/wp/v2/posts?per_page=2&_embed"
    );

    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({
      message: "Fail to fetch API Wordpress",
    });
  }
}
