"use client";
import { Button, message } from "antd";
import {
  DeleteOutlined,
} from "@ant-design/icons";
import { deleteBooking } from "@/services/booking/delete-booking";



const deleteHandler = async(id:string)=>{
  message.loading('Deleting...')
  try {
    const result =await deleteBooking(id)
    // @ts-ignore
    if (result?.ok && !result.error) {
      message.success("Booking Delete successfully");
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
    title: "Booking Date",
    dataIndex: "date",
    key: "date",
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
            onClick={() => deleteHandler(data?.id)}
            type="primary"
            danger
          >
            <DeleteOutlined />
          </Button>
        </>
      );
    },
  },
];
