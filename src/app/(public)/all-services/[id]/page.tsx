import { authOptions } from "@/app/lib/AuthOptions";
import ServiceDetails from "@/components/view/Services/ServiceDetails";
import { getSingleService } from "@/services/our-service/get-single-service";
import { getAllReviews } from "@/services/review/get-all-reviews";
import { getAllSlots } from "@/services/slots/getAllSlots";
import { getSingleUser } from "@/services/users/getSingleUser";
import { IService } from "@/types/common";
import { getServerSession } from "next-auth";

const SingleService =async ({
    params: { id },
  }: {
    params: { id: string };
  }) => {
    const res = await fetch(
      `${process.env.NEXT_SERVER_URL}/services/${id}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const { data:service } = await res.json();
    
    const session = await getServerSession(authOptions);
    const user = await getSingleUser(session?.user?.email as string)
    const reviews = await getAllReviews()
    const slots = await getAllSlots()
  return (
    <div>
        <ServiceDetails service={service as IService} user={user} reviews={reviews} slots={slots}/>
    </div>
  )
}
export default SingleService