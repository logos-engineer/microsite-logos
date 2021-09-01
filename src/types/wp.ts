export type wpArticle = {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  _embedded: {
    "wp:featuredmedia": [
      {
        source_url: string;
        slug: string;
        media_details: {
          sizes: {
            thumbnail: {
              source_url: string;
            };
            medium: { source_url: string };
            large: { source_url: string };
          };
        };
      }
    ];
  };
};
