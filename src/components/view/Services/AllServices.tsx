"use client";

import { Col, Layout, Menu, Row, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AllServices = ({data}:any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
          className="bg-transparent bg-white"
        >
          <Menu
            className="bg-transparent h-full"
            defaultSelectedKeys={[`${data[0].id}`]}
            mode="inline"
            >
              {data?.map((item:any) => (
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
          data.map((item:any)=>(
            <section id={item.title} key={item.id}>
              <h2 className="text-xl sm:text-2xl font-bold font-roboto">{item.title}</h2>
              <hr className="h-1 bg-primary" />
               <Row
            className="my-10"
            justify={"center"}
            align={"middle"}
            gutter={[24, 24]}
          >
            {
              item?.services?.map(((service:any)=>(
                <Col className="h-[230px]" key={service?.id} xs={24} sm={24} md={12} lg={12} xl={8}>
               <Link className="group rounded-md" href={`/all-services/${service.id}`}>
                 <div className="w-full h-[200px]">
                 <Image
                    src={service?.image}
                    alt="oven"
                    layout="responsive"
                    height={200}
                    width={300}
                    className="w-full h-full"
                  />
                 </div>
                  <h3 className="text-center group-hover:text-primary text-secondary text-sm font-poppins pt-1">
                    {service.name}
                  </h3>
                </Link>
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
