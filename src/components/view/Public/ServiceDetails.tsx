"use client";
import { Button, Typography } from "antd";
import { StarFilled, CheckOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import BreadCrumb from "@/components/ui/BreadCrumb/BreadCrumb";
import ServiceSummery from "./ServiceSummery";
import ServiceSidebar from "./ServicesSidebar";

const { Title, Paragraph } = Typography;

const ServiceDetails = () => {
  return (
    <div className="">
      <div
        className="relative bg-cover bg-center md:h-[500px]"
        style={{
          backgroundImage:
            'url("https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/services_images/banners/1639292259_microwaveovencheckup.jpg")',
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
                label: `All c`,
                link: `/all-services`,
              },
            ]}
          />
          <div className="sm:flex justify-between">
            <div className="text-white md:w-1/2 font-poppins mt-5 sm:mt-12">
              <Title className="text-white text-2xl sm:leading-[60px] sm:text-5xl font-roboto font-bold">
                Oven Check Up & Outdoor Cleaning
              </Title>
              <Paragraph className="text-3xl text-white/90">
                Price:{" "}
                <span className="font-bold text-white text-4xl">$99</span>
              </Paragraph>
              <span className="text-lg px-2 py-2 rounded-sm bg-primary text-white/90">
                <span className="text-2xl font-bold">
                  <StarFilled /> 4.75
                </span>{" "}
                out of 5
              </span>
              {/* Subtitle */}
              <div className="py-5">
                <Paragraph className="text-xl flex items-center gap-8 text-white/90">
                  <CheckOutlined className="bg-white text-black p-1 rounded-full text-lg " />
                  <span>On Time Work Completion</span>
                </Paragraph>
                <Paragraph className="text-xl flex items-center gap-8 text-white/90">
                  <CheckOutlined className="bg-white text-black p-1 rounded-full text-lg " />
                  <span>On Time Work Completion</span>
                </Paragraph>
              </div>
            </div>

            <div className="md:w-1/2 text-end mt-10">
              <button className="text-white group shadow-lg  border-none text-xl font-poppins hover:font-bold bg-dimPrimary cursor-pointer px-3 py-2 md:px-5 md:py-4">
                Order Now
                <ArrowRightOutlined className="transition group-hover:translate-x-4 duration-700 ease-in-out ml-4 font-bold"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24 py-12">
        <ServiceSidebar />
      </div>
    </div>
  );
};
export default ServiceDetails;
