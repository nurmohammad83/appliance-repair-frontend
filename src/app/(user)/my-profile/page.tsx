import { authOptions } from "@/app/lib/AuthOptions";
import MyProfile from "@/components/view/MyProfile/MyProfile"
import { getSingleUser } from "@/services/users/getSingleUser";
import { getServerSession } from "next-auth";

const MyProfilePage =async () => {
  const session = await getServerSession(authOptions);
  const user = await getSingleUser(session?.email)
  console.log(user,'orginal')
  return (
    <div>
      <MyProfile user={user}/>
    </div>
  )
}
export default MyProfilePage