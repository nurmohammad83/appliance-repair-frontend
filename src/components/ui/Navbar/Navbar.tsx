"use client";
import React, { useEffect, useState } from "react";

import { Drawer, Button, Menu, Layout } from "antd";
import {
  MenuOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const { Header } = Layout;

function Navbar({
    items,
    hasSider,
    session,
  }: {
    items: { key: string; label: string; href: string }[];
    hasSider?: boolean;
    session?: boolean;
  }) {
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
    <Header className="flex sticky opacity-100 top-0 z-50 justify-between shadow-lg items-center bg-gray-100">
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
      <div className="brand-logo">
        <Link href="/">
          <h2 className="text-black uppercase cursor-pointer">
          ProTechFixers
          </h2>
        </Link>
      </div>
      <Menu
          className="md:flex bg-transparent justify-center items-center text-black hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
         
        >
          {items?.map((item) => (
            <Menu.Item className="bg-none  text-black font-medium leading-6 p-0 mx-4" key={item.href}>
              <Link className="m-0 p-0 bg-none listing" href={item.href}>{item.label}</Link>
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
 
      <div className=" block md:hidden">
        <Button
          className=" block md:hidden"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer placement="right" title="Menubar" onClose={onClose} open={open}>
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
      </div>
    </Header>
  );
}

export default Navbar;

