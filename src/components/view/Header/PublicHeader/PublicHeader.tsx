import Navbar from "@/components/ui/Navbar/Navbar";

const PublicHeader = () => {
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
    <Navbar items={items}/>
  )
}
export default PublicHeader