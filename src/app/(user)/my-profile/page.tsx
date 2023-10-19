import { authOptions } from "@/app/lib/AuthOptions";
import MyProfile from "@/components/view/MyProfile/MyProfile"
import { IUser } from "@/types/common";
import { getServerSession } from "next-auth";

const MyProfilePage =async ()=> {
  const session = await getServerSession(authOptions);
  // @ts-ignore
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/users?email=${session?.email}`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["all-users"],
    },
  });
  const {data}  = await res.json()
  return (
    <div>
      <MyProfile session={data[0]}/>
    </div>
  )
}
export default MyProfilePage