import { IService } from "@/types/common"
import Image from "next/image"
import Link from "next/link"

const ServiceCard = ({service}:{service:IService}) => {
  return (
    <Link className="group" href={`/all-services/${service.id}`}>
    <div className="w-full h-[200px]">
    <Image
       src={service?.image}
       alt="oven"
       layout="responsive"
       height={200}
       width={300}
       className="w-full rounded-md h-full"
     />
    </div>
     <h3 className="text-center group-hover:text-primary text-secondary text-sm font-poppins pt-1">
       {service.name}
     </h3>
   </Link>
  )
}
export default ServiceCard