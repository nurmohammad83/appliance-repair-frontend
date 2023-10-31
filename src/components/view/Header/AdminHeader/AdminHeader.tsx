"use client";

import React, { useState } from "react";
import { Drawer, Button, Menu, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
const { Header } = Layout;
import logo from "@/assets/pro_logo.png";

const AdminHeader = ({ session }: { session: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const handelSignOut = () => {
    signOut();
    router.push("/login");
  };
  const onClose = () => {
    setOpen(false);
  };

  const items = [
    {
      key: "1",
      label: "My Profile",
      href: "/admin/my-profile",
    },
    {
      key: "2",
      label: "All User",
      href: "/admin/all-user",
    },
    {
      key: "3",
      label: "Booked Service",
      href: "/admin/all-booked-service",
    },
  ];

  return (
    <Header className="flex font-roboto sticky opacity-100 top-0 z-50 justify-between shadow-lg items-center bg-white">
      <div className="flex justify-center items-center">
        <Link className="flex justify-center items-center" href="/">
          <Image width={100} height={50} src={logo} alt="logo" />
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
            <Link
              className=" bg-none bg-transparent bg-opacity-0  listing"
              href={item.href}
            >
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
export default AdminHeader;
