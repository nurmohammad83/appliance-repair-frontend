import { getAllCategories } from "@/services/category/get-all-category"
import AllServices from "@/components/view/Services/AllServices"
import { getAllServices } from "@/services/our-service/get-all-services"

const ServicesPage =async () => {
  const data = await getAllCategories()
  return (
    <div className="relative min-h-screen block scroll-smooth">
        <AllServices data={data}/>
    </div>
  )
}
export default ServicesPage