import Hero from "@/components/view/Public/Hero";
import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import ChooseUs from "@/components/view/Public/ChooseUs";
import Services from "@/components/view/Public/Services";
import TrendingService from "@/components/view/Public/TrendingService";
import Work from "@/components/view/Public/Work";
import Testimonial from "@/components/view/Public/Testimonial";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";
import { getAllCategories } from "@/services/category/get-all-category";
import { getAllServices } from "@/services/our-service/get-all-services";

const Home =async () => {
  const session = await getServerSession(authOptions);
  const data = await getAllCategories()
 const services = await getAllServices()
  return (
    <div>
      <PublicHeader session={session ? true : false}/>
      <div className="min-h-[calc(100vh-64px)]">
      <Hero data={data}/>
      <Services data={data}/>
      <TrendingService services={services}/>
      <ChooseUs />
      <Work />
      <Testimonial />
      </div>
    </div>
  );
};
export default Home;
