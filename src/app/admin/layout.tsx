import AdminHeader from "@/components/view/Header/AdminHeader/AdminHeader"
import { getServerSession } from "next-auth";
import { ReactNode } from "react"
import { authOptions } from "../lib/AuthOptions";

const AdminLayout =async ({children}:{children:ReactNode}) => {
    const session = await getServerSession(authOptions);
  return (
    <div>
        <AdminHeader session={session ? true : false}/>
        {children}
    </div>
  )
}
export default AdminLayout