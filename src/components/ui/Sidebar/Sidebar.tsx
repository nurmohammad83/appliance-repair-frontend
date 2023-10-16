"use client";

import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  {
    label: "One",
    key: 1,
    href: "/all-services/#div-1",
  },
  {
    label: "Two",
    key: 2,
    href: "/all-services/#div-2",
  },
  {
    label: "Yhtrr",
    key: 3,
    href: "/all-services/#div-3",
  },
  {
    label: "Yhtrr",
    key: 4,
    href: "/all-services/#div-3",
  },
  {
    label: "Yhtrr",
    key: 5,
    href: "/all-services/#div-3",
  },
  {
    label: "Yhtrr",
    key: 6,
    href: "/all-services/#div-3",
  },
  {
    label: "Yhtrr",
    key: 7,
    href: "/all-services/#div-3",
  },
  {
    label: "Yhtrr",
    key: 8,
    href: "/all-services/#div-3",
  },
];

const Sidebar = () => {
  return (
    <div className="px-24 font-poppins top-10 mt-20">
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
            top: 0,
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
        <Content className=" bg-white mt-24">
          <section style={{ padding: "10px" }}>
            <div id="div-1" className="mt-9 min-h-screen">Pne xime error ipsum, itaque quasi sunt eaque reprehenderit nam. Harum </div>
            <div id="div-2" className="mt-9 min-h-screen">xime error ipsum, itaque quasi sunt eaque reprehenderit nam. Harum </div>
            <div id="div-3" className="mt-9 min-h-screen">Three Lorem debitis doloremque, aperiam tenetur quia illo officia exercitationem reiciendis laborum odio quas aut veritatis, obcaecati cupiditate repudiandae atque. Exercitationem laudantium, aut necessitatibus ratione commodi magni!</div>
          </section>
        </Content>
      </Layout>
    </div>
  );
};

export default Sidebar;
