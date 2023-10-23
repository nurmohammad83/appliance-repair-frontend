"use client";
import { deleteBooking } from "@/services/booking/delete-booking";
import { Button, message } from "antd";

const handelPay =async(id:string)=>{
  message.loading('Paying...')
  try {
    const result =await deleteBooking(id)
    // @ts-ignore
    if (result?.ok && !result.error) {
      message.success("Thanks you, Payment successfully");
    }
  } catch (error) {
    message.error("Please try again");
  }
}


export const columns = [
  {
    title: "Name",
    render:function(data:Record<string,string>){
      //@ts-ignore
      const fullName = `${data.user.fullName}`
      return <>{fullName}</>
    },
    key: "name",
  },
  {
    title: "Service",
    render:function(data:Record<string,string>){
      //@ts-ignore
      return <>{data.service?.name}</>
    },
    key: "service",
  },
  {
    title: "Service Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Slot Time",
    render:function(data:Record<string,string>){
      //@ts-ignore
      return <>{data.slots?.slotTime}</>
    },
    key: "slotTime",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    render: function (data: any) {
      return (
        <>
          <Button
            onClick={() => handelPay(data?.id)}
            type="primary"
            className="bg-primary"
          >
            PAY
          </Button>
        </>
      );
    },
  },
];
