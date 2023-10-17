import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader"
import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { authOptions } from "../lib/AuthOptions"

const PublicLayout =async ({children}:{children:ReactNode}) => {
  const session =await getServerSession(authOptions)
  return (
    <div>
      <PublicHeader session={ session ? true : false}/>
      {children}
      </div>
  )
}
export default PublicLayout