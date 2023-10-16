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
      ];
      const logedInItem =[
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
          key: '3',
          label: "My Profile",
          href: "/my-profile",
        },
      ];
  return (
    <Navbar session={session ? true : false} items={!!session?logedInItem : items}/>
  )
}
export default PublicHeader