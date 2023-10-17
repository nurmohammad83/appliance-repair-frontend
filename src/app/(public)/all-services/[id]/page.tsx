import ServiceDetails from "@/components/view/Services/ServiceDetails";
import { getSingleService } from "@/services/our-service/get-single-service";
import { getAllSlots } from "@/services/slots/getAllSlots";

const SingleService =async ({
    params: { id },
  }: {
    params: { id: string };
  }) => {
    const service = await getSingleService(id)
    const slots = await getAllSlots()
  return (
    <div>
        <ServiceDetails service={service} slots={slots}/>
    </div>
  )
}
export default SingleService