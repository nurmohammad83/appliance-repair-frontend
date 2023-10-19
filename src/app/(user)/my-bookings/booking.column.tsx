"use client";
import { Button } from "antd";

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
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    render: (record: any) => {
    
      return (
          <Button type="primary" className="bg-primary">
            PAY
          </Button>

      );
    },
  },
];
