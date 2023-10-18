"use client";
import { Button, Menu, Modal, Typography, message } from "antd";
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
const { confirm } = Modal;

const ServiceDetails = ({ service, slots, user , reviews}: any) => {
  const [handleModalOpen, setHandleModalOpen] = useState<boolean>(false);
  
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2023-10-18"));
  const [slot, setSlot] = useState(null);
  // console.log(selectedValue?.format('YYYY-MM-DD'))
  
  // const filerBooking = service.bookings.find((book:any)=> book.date)
  

  // const filterSlot = slots.filter((slot:any)=>slot.id !== filerBooking.slotId)

  // console.log(filterSlot,'filter slot')


  const handleCreateBooking = async (id: string) => {
    confirm({
      title: (
        <div>
          <h2 className="text-secondary text-lg font-poppins text-center py-4">
            Please note for this Services
          </h2>
          <ul>
            <li>Hanging Charge 499 tk (If applicable)</li>
            <li>Transportation Cost (if applicable)</li>
            <li>Hanging Charge 499 tk (If applicable)</li>
          </ul>
        </div>
      ),
      okType: "primary",
      async onOk() {
        try {
          const data = {
            userId: user.id,
            serviceId: id,
            slotId: slot,
            date: selectedValue.format("YYYY-MM-DD"),
          };
          console.log(data);
          message.success("Successfully Booked");
        } catch (error) {
          message.error("Failed to booking. Please try again");
        }
      },
    });
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
                  <div className="">
                    <Menu
                      className="bg-transparent h-full"
                      disabledOverflow
                      mode="horizontal"
                    >
                      {slots?.map((slot: any) => (
                        <Menu.Item className="rounded-none" key={slot.id}>
                          <Button
                            className="text-primary border-dimPrimary"
                            onClick={() => setSlot(slot.id)}
                          >
                            {slot.slotTime}
                          </Button>
                        </Menu.Item>
                      ))}
                    </Menu>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    size="large"
                    type="primary"
                    onClick={() => {
                      handleCreateBooking(service.id);
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
        <ServiceSidebar reviews={reviews} user={user} service={service} />
      </div>
    </div>
  );
};
export default ServiceDetails;
