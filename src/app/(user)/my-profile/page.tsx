import { authOptions } from "@/app/lib/AuthOptions";
import MyProfile from "@/components/view/MyProfile/MyProfile"
import { getServerSession } from "next-auth";

const MyProfilePage =async ()=> {
  const session = await getServerSession(authOptions);
  // @ts-ignore
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/users?email=${session?.email}`, {
    headers: {
      "Content-Type": "application/json",
      // @ts-ignore
      Authorization: `${session?.accessToken}`,
    },
    next: {
      tags: ["all-users"],
    },
  });
  const {data}  = await res.json()

  const userData = data ? data[0] : null;
  return (
    <div>
      <MyProfile session={userData}/>
    </div>
  )
}
export default MyProfilePage