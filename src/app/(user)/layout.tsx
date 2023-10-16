import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader"
import { ReactNode } from "react"

const UserLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <PublicHeader />
        {children}
    </div>
  )
}
export default UserLayout