import { authOptions } from "@/app/lib/AuthOptions";
import ServiceDetails from "@/components/view/Services/ServiceDetails";
import { getSingleService } from "@/services/our-service/get-single-service";
import { getAllReviews } from "@/services/review/get-all-reviews";
import { getAllSlots } from "@/services/slots/getAllSlots";
import { getSingleUser } from "@/services/users/getSingleUser";
import { getServerSession } from "next-auth";

const SingleService =async ({
    params: { id },
  }: {
    params: { id: string };
  }) => {
    const session = await getServerSession(authOptions);
    const user = await getSingleUser(session?.user?.email as string)
    const service = await getSingleService(id)
    const reviews = await getAllReviews()
    const slots = await getAllSlots()
  return (
    <div>
        <ServiceDetails service={service} user={user} reviews={reviews} slots={slots}/>
    </div>
  )
}
export default SingleService