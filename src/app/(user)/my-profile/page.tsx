import { authOptions } from "@/app/lib/AuthOptions";
import MyProfile from "@/components/view/MyProfile/MyProfile"
import { getSingleUser } from "@/services/users/getSingleUser";
import { getServerSession } from "next-auth";

const MyProfilePage =async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <MyProfile user={session}/>
    </div>
  )
}
export default MyProfilePage