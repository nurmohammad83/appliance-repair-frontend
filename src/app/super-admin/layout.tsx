import { getServerSession } from "next-auth";
import { ReactNode } from "react"
import { authOptions } from "@/app/lib/AuthOptions"
import SuperAdminHeader from "@/components/view/Header/SuperAdminHeader/SuperAdminHeader";

const SuperAdminLayout =async ({children}:{children:ReactNode}) => {
    const session = await getServerSession(authOptions);
  return (
    <div>
        <SuperAdminHeader session={session ? true : false}/>
        {children}
    </div>
  )
}
export default SuperAdminLayout