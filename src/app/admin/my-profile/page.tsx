import { authOptions } from "@/app/lib/AuthOptions";
import MyProfile from "@/components/view/MyProfile/MyProfile"
import { getServerSession } from "next-auth";
const AminMyProfile =async () => {
    const session = await getServerSession(authOptions);
  return (
    <div className="min-h-[calc(100vh-64px)]">
        <MyProfile session={session}/>
    </div>
  )
}
export default AminMyProfile