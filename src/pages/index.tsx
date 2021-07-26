import Hero from "@/components/homepage/Hero";
import Webinar from "@/components/homepage/Webinar";
import Article from "@/components/homepage/Article";
import Layout from "@/components/layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Webinar />
      <Article />
    </Layout>
  );
};

export default Home;
