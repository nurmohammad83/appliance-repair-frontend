import ServiceDetails from "@/components/view/Services/ServiceDetails";
import { getSingleService } from "@/services/our-service/get-single-service";

const SingleService =async ({
    params: { id },
  }: {
    params: { id: string };
  }) => {
    const service = await getSingleService(id)
  return (
    <div>
        <ServiceDetails service={service}/>
    </div>
  )
}
export default SingleService