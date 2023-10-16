import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader"
import { ReactNode } from "react"
import { authOptions } from "../lib/AuthOptions";
import { getServerSession } from "next-auth";

const UserLayout =async ({children}:{children:ReactNode}) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
        <PublicHeader session={session? true : false}/>
        {children}
    </div>
  )
}
export default UserLayout