"use client";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Typography } from "antd";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = ({
  items,
  hasSider,
  session,
}: {
  items: { key: string; label: string; href: string }[];
  hasSider?: boolean;
  session?: boolean;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
    <Layout className="layout">
     <Header className="flex sticky top-0 z-50 justify-between shadow-lg items-center bg-gray-100">
        {hasSider && (
          <Button
            type="primary"
            className="lg:hidden"
            // onClick={() => {
            //   dispatch(showSidebarDrawer());
            // }}
          >
            <MenuOutlined />
          </Button>
        )}
        <div>
          <Link href="/">
            <Title
              className={`m-0 text-primary text-2xl ${
                hasSider && "text-center lg:text-left"
              }`}
            >
             ProTechFixers
            </Title>
          </Link>
        </div>
        <Menu
          className="lg:flex bg-transparent justify-center items-center text-black hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
         
        >
          {items?.map((item) => (
            <Menu.Item className="bg-none  text-black font-medium leading-6 p-0 mx-4" key={item.href}>
              <Link className="m-0 p-0 listing" href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}

          {session ? (
            <Button
              type="primary"
            //   onClick={() => {
            //     signOut();
            //   }}
            >
              Sign Out
            </Button>
          ) : (
            <Button
             size="large"
              className="bg-primary font-poppins font-medium text-white border-none"
              onClick={() => {
                router.push("/login");
              }}
            >
              Sign In
            </Button>
          )}
        </Menu>

        <Button type="primary" className="lg:hidden" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer title="Menu" placement="right" onClose={onClose} visible={open}>
          <Menu
            theme="light"
            mode="vertical"
            selectedKeys={[pathname]}
            style={{ borderRight: 0 }}
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;