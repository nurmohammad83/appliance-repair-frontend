"use client";
import {  Typography } from "antd";
import { StarFilled, CheckOutlined, ArrowRightOutlined } from "@ant-design/icons";
import BreadCrumb from "@/components/ui/BreadCrumb/BreadCrumb";
import ServiceSidebar from "./ServicesSidebar";

const { Title, Paragraph } = Typography;

const ServiceDetails = ({service}:any) => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center lg:h-[500px] l"
        style={{
          backgroundImage:
            `url(${service.image})`,
        }}
      >
        <div className="bg-black bg-opacity-50 h-full px-8 sm:px-14 w-full py-8 md:px-28">
          <BreadCrumb
            items={[
              {
                label: `All Services`,
                link: `/all-services`,
              },
              {
                label: `${service.category.title}`,
                link: `/all-services/#${service.category.title}`,
              },
            ]}
          />
          <div className="sm:flex justify-between">
            <div className="text-white md:w-1/2 font-poppins mt-5 sm:mt-12">
              <Title className="text-white text-2xl sm:leading-[60px] sm:text-5xl font-roboto font-bold">
                {service.name}
              </Title>
              <Paragraph className="text-3xl text-white/90">
                Price:{" "}
                <span className="font-bold text-white text-4xl">${service.price}</span>
              </Paragraph>
              <span className="text-lg px-2 py-2 rounded-sm bg-primary text-white/90">
                <span className="text-2xl font-bold">
                  <StarFilled /> {service.rating}
                </span>{" "}
                out of 5
              </span>
              {/* Subtitle */}
              <div className="py-5">
                {
                  service.subTitle.map((s:any)=>(
                    <Paragraph key={s} className="text-xl flex items-center gap-8 text-white/90">
                  <CheckOutlined className="bg-white text-black p-1 rounded-full text-lg " />
                  <span>{s}</span>
                </Paragraph>
                  ))
                }
               
              </div>
            </div>

            <div className="md:w-1/2 text-end mt-10">
              <button className="text-white group shadow-lg  border-none text-xl font-poppins rounded-lg hover:font-bold bg-dimPrimary cursor-pointer px-3 py-2 md:px-5 md:py-4">
                Order Now
                <ArrowRightOutlined className="transition group-hover:translate-x-4 duration-700 ease-in-out ml-4 font-bold"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-14 py-12">
        <ServiceSidebar service={service}/>
      </div>
    </div>
  );
};
export default ServiceDetails;
