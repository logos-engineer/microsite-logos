import { useEffect } from "react";
import splitbee from "@splitbee/web";
import Hero from "@/components/homepage/Hero";
import Webinar from "@/components/homepage/Webinar";
import Article from "@/components/homepage/Article/Article";
import Layout from "@/components/layout";
import FollowUs from "@/components/homepage/FollowUs";
import Cta from "@/components/homepage/Cta";

const Home = () => {

  useEffect((): void => {
    splitbee.init({
      token: 'M6FJO0PCQR94', 
      disableCookie: false,
      scriptUrl: "https://cdn.splitbee.io/sb.js",
      apiUrl: "https://hive.splitbee.io",
    })
    
  }, []);

  return (
    <Layout>
      <Hero />
      <Webinar />
      <Article />
      <Cta />
      <FollowUs />
    </Layout>
  );
};

export default Home;
