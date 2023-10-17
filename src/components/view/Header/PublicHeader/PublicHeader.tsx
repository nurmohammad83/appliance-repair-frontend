'use client'

import React, { useEffect, useState } from "react";
import { Drawer, Button, Menu, Layout, Space, Dropdown, Avatar, MenuProps } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const { Header } = Layout;

const PublicHeader =  ({session}:{session:boolean}) => {
  
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const publicItems = [
    {
      key: "1",
      label: "Home",
      href: "/",
    },
    {
      key: "2",
      label: "Services",
      href: "/all-services",
    },
    {
      key: "3",
      label: "About",
      href: "/about-us",
    },
  ];
  const logInItem = [
    {
      key: "1",
      label: "Home",
      href: "/",
    },
    {
      key: "2",
      label: "Services",
      href: "/all-services",
    },
    {
      key: "3",
      label: "About",
      href: "/about-us",
    },
    {
      key: "3",
      label: "My Profile",
      href: "/my-profile",
    },
  ];

  const totalEndpoint = session ? logInItem : publicItems
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/my-profile">My Profile</Link>,
    },
    {
      key: "2",
      label: <Link href="/dashboard">Dashboard</Link>,
    },
    {
      key: "3",
      label: <Button type="primary" className="text-white m-0" block danger onClick={()=>signOut()} href="/log">Log Out</Button>,
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
      className="md:flex bg-transparent justify-center items-center text-black hidden"
      disabledOverflow
      theme="dark"
      mode="horizontal"
    >
      {totalEndpoint?.map((item) => (
        <Menu.Item
          className="bg-none  text-black font-medium leading-6 p-0 mx-4"
          key={item.href}
        >
          <Link className="m-0 p-0 bg-none listing" href={item.href}>
            {item.label}
          </Link>
        </Menu.Item>
      ))}

      {session ? (
        
          <div style={{display:'flex' , justifyContent:'center', gap:"5px"}}>
          <Dropdown menu={ {items} }>
            <a>
              <Space size={28}>
                <Avatar shape="circle" size="large" />
              </Space>
            </a>
          </Dropdown>
          </div>
       
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
          {totalEndpoint?.map((item) => (
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
export default PublicHeader;
