"use client";
import Link from "next/link";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";

// const handelDelete = async (id: string) => {
//   await deleteDoctor(id);
// };

// const getMenuItems = (id: string): MenuProps["items"] => [
//   {
//     key: "1",
//     label: <Link href={`/admins/doctors/${id}`}>Details</Link>,
//   },
//   {
//     key: "2",
//     label: <Link href={`/admins/doctors/${id}/update`}>Edit</Link>,
//     onClick: () => {
//       console.log("Edit");
//     },
//   },
//   {
//     key: "3",
//     label: <span>Delete</span>,
//     onClick: () => {
//       handelDelete(id);
//     },
//   },
// ];

export const columns = [
  {
    title: "Service Id",
    dataIndex: "serviceId",
    key: "serviceId",
  },
  {
    title: "User Id",
    dataIndex: "userId",
    key: "userId",
  },
  {
    status: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    render: (record: any) => {
    
      return (
          <Button>
            <EllipsisOutlined />
          </Button>

      );
    },
  },
];
