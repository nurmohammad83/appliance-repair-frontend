import { ReactNode } from "react"
import Sidebar from "@/components/ui/Sidebar/Sidebar"

const ServicesPage = ({children}:{children:ReactNode}) => {
  return (
    <>
        <Sidebar>{children}</Sidebar>
    </>
  )
}
export default ServicesPage