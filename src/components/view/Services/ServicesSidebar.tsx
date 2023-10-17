"use client";

import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const ServiceSidebar = ({service}:any) => {
  const items = [
    {
      label: "Service Details",
      key: 1,
      href: `/all-services/${service.id}/#details`,
    },
    {
      label: "Reviews",
      key: 2,
      href: `/all-services/${service.id}/#reviews`,
    },
  ];
  return (
    <div className="font-poppins">
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
          className="bg-transparent hidden sm:block bg-white"
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
        <Content className="px-5 bg-white">
          <section id="details">
            <h2 className="text-2xl font-bold font-poppins py-5"> Details of {service.name}</h2>
            {
              service.description.map((des:any)=>(
                <div className="py-6" key={des.id}>
                  <h2 className="font-roboto text-2xl text-black">{des.title}</h2>
                  <ul>
                   {des.subTitle.map((sub:string)=>(
                    <li className="text-lg font-roboto py-2 ml-12" key={sub}>{sub}</li>
                   ))}
                  </ul>
                 
                </div>
              ))
            }
             <div className="mt-5">
              <h2 className="font-roboto text-2xl">How to Order</h2>
          <div>
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border bg-primary text-white rounded-full">
                      <FaArrowDown />
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-poppins font-bold">Select the Service</p>
                  <p className="text-secondary font-poppins text-sm">
                  Pick the service you are looking for- from the website or the app.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex bg-primary text-white items-center justify-center w-10 h-10 border rounded-full">
                      <FaArrowDown />
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-poppins font-bold">Pick your schedule</p>
                  <p className="text-secondary font-poppins text-sm">
                  Pick your convenient date and time to avail the service. Pick the service provider based on their rating.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex bg-primary text-white items-center justify-center w-10 h-10 rounded-full">
                      <FaArrowDown />
                    </div>
                  </div>
                  <div className="h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-poppins font-bold">Place Your Order & Relax</p>
                  <p className="text-secondary font-poppins text-sm">
                  Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>
          <section id="reviews">
          <h2 className="text-2xl font-bold font-poppins py-5"> Reviews & Rating of {service.name}</h2>
          </section>
        </Content>
      </Layout>
    </div>
  );
};

export default ServiceSidebar;
