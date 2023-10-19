import { authOptions } from "@/app/lib/AuthOptions";
import ServiceDetails from "@/components/view/Services/ServiceDetails";

import { getAllReviews } from "@/services/review/get-all-reviews";
import { getAllSlots } from "@/services/slots/getAllSlots";
import { getSingleUser } from "@/services/users/getSingleUser";
import { IService, IUser } from "@/types/common";
import { getServerSession } from "next-auth";

const SingleService =async ({
  params: { id },
}: {
  params: { id: string };
}) => {

    const session = await getServerSession(authOptions);

    const res = await fetch(
      `${process.env.NEXT_SERVER_URL}/services/${id}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    const { data:service } = await res.json();
    
     // @ts-ignore
  const userResult = await fetch(`${process.env.NEXT_SERVER_URL}/users?email=${session?.email}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["all-users"],
    },
  });
  const {data:user}  = await userResult.json()


    const reviews = await getAllReviews()
    const slots = await getAllSlots()
   
  return (
    <div>
        <ServiceDetails service={service as IService} user={user[0] as IUser} reviews={reviews} slots={slots}/>
    </div>
  )
}
export default SingleService