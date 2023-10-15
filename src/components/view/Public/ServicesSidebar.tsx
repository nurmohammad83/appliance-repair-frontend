"use client";

import { Layout, Menu } from "antd";

import Sidebar from "@/components/ui/Sidebar/Sidebar";
import Contents from "@/components/ui/Sidebar/Content";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  {
    label: "One",
    key: 1,
    href: "/all-services/#1",
  },
  {
    label: "Two",
    key: 2,
    href: "/all-services/#2",
  },
  {
    label: "Yhtrr",
    key: 3,
    href: "/all-services/#3",
  },
];

const ServiceSidebar = () => {
  return (
    <div className="px-24 font-poppins">
      <div className="text-secondary font-bold text-3xl font-poppins  py-10">
        All Services
      </div>
      <Layout hasSider>
        <Sider
          width={280}
          style={{
            height: "100vh",
            position: "sticky",
            left: 0,
            top: 50,
            bottom: 0,
          }}
          className="bg-transparent bg-white"
        >
          <Menu
            className="bg-transparent h-full"
            defaultSelectedKeys={["1"]}
            mode="inline"
            >
              {items?.map((item) => (
            <Menu.Item className="rounded-none" key={item.href}>
              <Link className="hover:font-bold font-poppins hover:text-primary" href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
            </Menu>
        </Sider>
        <Content className="min-h-screen bg-white">
          <div style={{ padding: "10px" }}>
            <section>One</section>
            <section>One</section>
            <section>One</section>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ServiceSidebar;
