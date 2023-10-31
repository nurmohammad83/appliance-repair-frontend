"use client";

import { ICategory, IService,  } from "@/types/common";
import { Col, Layout, Menu, Row, } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

interface IProps {
  data:ICategory[],
}

const AllServices = ({data}:IProps) => {
  return (
    <div className="px-6 sm:px-12 relative min-h-screen block md:px-24 font-poppins">
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
            top: 80,
            bottom: 0,
          }}
          className="bg-transparent md:block hidden bg-white"
        >
          <Menu
            className="bg-transparent h-full"
            defaultSelectedKeys={[`${data[0].id}`]}
            mode="inline"
            >
              {data?.map((item:ICategory) => (
            <Menu.Item className="rounded-none" key={item.id}>
              <Link className="hover:font-bold font-poppins hover:text-primary" href={`/all-services/#${item.title}`}>{item.title}</Link>
            </Menu.Item>
          ))}
            </Menu>
        </Sider>
        <Content style={{
            position: "sticky",
            left: 0,
            top: 80,
            bottom: 0,
          }} className="bg-white px-4">
        {
          data.map((item:ICategory)=>(
            <section className="py-4 sm:py-10" style={{
              scrollMarginTop: '100px',
            }} id={item.title} key={item.id}>
              <h2 className="text-xl sm:text-2xl font-bold font-roboto">{item.title}</h2>
              <hr className="h-1 bg-primary" />
               <Row
            className="my-10"
            justify={"center"}
            align={"middle"}
            gutter={[24, 24]}
          >
            {
              item?.services?.map(((service:IService)=>(
                <Col className="h-[230px]" key={service?.id} xs={24} sm={24} md={12} lg={12} xl={8}>
              <ServiceCard service={service}/>
              </Col>
              )))
            }
          </Row>
            </section>
          ))
        }
        </Content>
      </Layout>
    </div>
  );
};

export default AllServices;
