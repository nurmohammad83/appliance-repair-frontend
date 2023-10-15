"use client";
import { Button, Typography } from "antd";
import { StarFilled, CheckOutlined } from "@ant-design/icons";
import Image from "next/image";
import BreadCrumb from "@/components/ui/BreadCrumb/BreadCrumb";

const { Title, Paragraph } = Typography;

const ServiceDetails = () => {
  return (
    <div className="">
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage:
            'url("https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/services_images/banners/1639292259_microwaveovencheckup.jpg")',
        }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full py-8 px-28">
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
          <div className="flex justify-between">
            <div className="text-white w-1/2 font-poppins mt-5 sm:mt-12">
              <Title className="text-white leading-[60px] text-5xl font-roboto font-bold">
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

            <div className="w-1/2 flex justify-center items-center">
              <button className="text-white bg-primary px-5 py-4">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
