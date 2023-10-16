import { authOptions } from "@/app/lib/AuthOptions";
import Navbar from "@/components/ui/Navbar/Navbar";
import { getServerSession } from "next-auth";

const PublicHeader =async () => {
  const session =await getServerSession(authOptions)
    const items = [
        {
          key: '1',
          label: "Home",
          href: "/",
        },
        {
          key: '2',
          label: "Services",
          href: "/all-services",
        },
        {
          key: '3',
          label: "About",
          href: "/about-us",
        },
        {
          key: '4',
          label: "Contact",
          href: "/contact-us",
        },
      ];
  return (
    <Navbar session={session ? true : false} items={items}/>
  )
}
export default PublicHeader