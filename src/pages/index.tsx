import Hero from "@/components/homepage/Hero";
import Layout from "@/components/layout";
import FollowUs from "@/components/homepage/FollowUs";
import Cta from "@/components/homepage/Cta";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Cta />
      <FollowUs />
    </Layout>
  );
};

export default Home;
