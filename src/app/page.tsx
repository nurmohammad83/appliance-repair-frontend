import Hero from "@/components/view/Public/Hero";
import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import ChooseUs from "@/components/view/Public/ChooseUs";
import Services from "@/components/view/Public/Services";
import TrendingService from "@/components/view/Public/TrendingService";
import Work from "@/components/view/Public/Work";
import Testimonial from "@/components/view/Public/Testimonial";

const Home = () => {
  return (
    <>
      <PublicHeader />
      <Hero />
      <Services />
      <TrendingService />
      <ChooseUs />
      <Work />
      <Testimonial />
    </>
  );
};
export default Home;
