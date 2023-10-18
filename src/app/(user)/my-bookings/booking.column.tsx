"use client";
import Link from "next/link";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";

export const columns = [
  {
    title: "Name",
    render:function(data:Record<string,string>){
      const fullName = `${data?.user?.fullName}`
      return <>{fullName}</>
    },
    key: "name",
  },
  {
    title: "Service",
    render:function(data:Record<string,string>){
      
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
