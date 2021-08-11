import Hero from "@/components/homepage/Hero";
import Webinar from "@/components/homepage/Webinar";
import Article from "@/components/homepage/Article/Article";
import Layout from "@/components/layout";
import FollowUs from "@/components/homepage/FollowUs";
import Cta from "@/components/homepage/Cta";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Cta />
      <FollowUs />
      <Webinar />
      <Article />
    </Layout>
  );
};

export default Home;
