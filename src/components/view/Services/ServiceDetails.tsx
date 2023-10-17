"use client";
import { Button, Modal, Typography, message } from "antd";
import {
  StarFilled,
  CheckOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import BreadCrumb from "@/components/ui/BreadCrumb/BreadCrumb";
import ServiceSidebar from "./ServicesSidebar";
import { useState } from "react";
import Schedule from "./Schedule";
import dayjs from "dayjs";
const { Title, Paragraph } = Typography;

const ServiceDetails = ({ service, slots }: any) => {
  const [handleModalOpen, setHandleModalOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2023-10-18"));
  const [slot, setSlot] = useState(null);
  console.log(selectedValue.format("DD/MM/YYYY"), "selected value");

  const handleCreateBooking = async (value: any) => {
    console.log(value);
  };
  return (
    <div>
      <div
        className="relative bg-cover bg-center lg:h-[500px] l"
        style={{
          backgroundImage: `url(${service.image})`,
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
                <span className="font-bold text-white text-4xl">
                  ${service.price}
                </span>
              </Paragraph>
              <span className="text-lg px-2 py-2 rounded-sm bg-primary text-white/90">
                <span className="text-2xl font-bold">
                  <StarFilled /> {service.rating}
                </span>{" "}
                out of 5
              </span>
              {/* Subtitle */}
              <div className="py-5">
                {service.subTitle.map((s: any) => (
                  <Paragraph
                    key={s}
                    className="text-xl flex items-center gap-8 text-white/90"
                  >
                    <CheckOutlined className="bg-white text-black p-1 rounded-full text-lg " />
                    <span>{s}</span>
                  </Paragraph>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 text-end mt-10">
              <button
                onClick={() => setHandleModalOpen(true)}
                className="text-white group shadow-lg  border-none text-xl font-poppins rounded-lg hover:font-bold bg-dimPrimary cursor-pointer px-3 py-2 md:px-5 md:py-4"
              >
                Order Now
                <ArrowRightOutlined className="transition group-hover:translate-x-4 duration-700 ease-in-out ml-4 font-bold" />
              </button>
              <Modal
                centered
                open={handleModalOpen}
                onOk={() => setHandleModalOpen(false)}
                onCancel={() => setHandleModalOpen(false)}
                footer={null}
                width={800}
              >
                <div className="py-2 text-center shadow-lg shadow-gray-300">
                  <h2>Schedule Time</h2>
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <h3 className="mr-4 py-4 text-primary font-poppins">
                    Select your prefer date
                  </h3>
                  <Schedule
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                  />
                </div>
                <div className="py-8">
                  <h2 className="text-sm py-4 text-secondary font-roboto text-center">
                    Select your prefer time, expert will arrive by your selected
                    time
                  </h2>
                  <div className="grid grid-cols-5 gap-5">
                    {slots.map((slot: any) => (
                      <Button
                        onClick={() => setSlot(slot.slotTime)}
                        key={slot}
                        className="text-primary border-primary"
                      >
                        {slot.slotTime}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    size="large"
                    type="primary"
                    onClick={() => {
                      handleCreateBooking("");
                    }}
                    className=" mt-6 bg-primary hover:bg-primary text-white font-semibold rounded"
                  >
                    Confirm
                  </Button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-14 mt-12">
        <ServiceSidebar service={service} />
      </div>
    </div>
  );
};
export default ServiceDetails;
