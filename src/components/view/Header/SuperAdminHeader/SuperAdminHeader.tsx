'use client'

import React, { useEffect, useState } from "react";
import { Drawer, Button, Menu, Layout, Space, Dropdown, Avatar, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const { Header } = Layout;

const SuperAdminHeader =  ({session}:{session:boolean}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const handelSignOut = ()=>{
    signOut()
    router.push('/login')
  }
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: "1",
      label: "My Profile",
      href: "/super-admin/my-profile",
    },
    {
      key: "2",
      label: "All User",
      href: "/super-admin/all-user",
    },
    {
      key: "3",
      label: "Booked User",
      href: "/super-admin/all-booked-service",
    },
  ];
 

  return (
    <Header className="flex sticky opacity-100 top-0 z-50 justify-between shadow-lg items-center bg-white">
      
    <div className="flex items-center">
      <Link href="/">
        <h3 className="font-roboto text-2xl text-primary">PROTECHFIXERS</h3>
      </Link>
    </div>
    <Menu
      className="md:flex bg-transparent bg-none justify-center items-center text-black hidden"
      disabledOverflow
      theme="dark"
      mode="horizontal"
    >
      {items?.map((item) => (
        <Menu.Item
          className="bg-none  text-black bg-transparent font-medium leading-6 mx-4"
          key={item.href}
        >
          <Link className=" bg-none bg-transparent bg-opacity-0  listing" href={item.href}>
            {item.label}
          </Link>
        </Menu.Item>
      ))}
        {session ? (
        
        <Button
        size="large"
        danger
        className=" font-poppins font-medium bg-gray-300 text-black border-none"
        onClick={() => handelSignOut()}
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
};
export default SuperAdminHeader;
