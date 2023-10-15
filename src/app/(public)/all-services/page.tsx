import ServiceSidebar from "@/components/view/Public/ServicesSidebar"
import { ReactNode } from "react"

const ServicesPage = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <ServiceSidebar>{children}</ServiceSidebar>
    </div>
  )
}
export default ServicesPage