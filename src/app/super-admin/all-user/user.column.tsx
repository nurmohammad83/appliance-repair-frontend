"use client";
import Link from "next/link";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { Button, message } from "antd";
import { deleteUser } from "@/services/users/delete-user";

const deleteHandler = async(id:string)=>{
  message.loading('Deleting...')
  try {
    const result =await deleteUser(id)
    // @ts-ignore
    if (result?.ok && !result.error) {
      message.success("User Delete successfully");
    }
  } catch (error) {
    message.error("Please try again");
  }
}

export const userColumns = [
  {
    title: "Name",
    dataIndex:'fullName',
    key: "fullName",
  },
  {
    title: "Email",
    dataIndex:'email',
    key: "email",
  },
  {
    title: "Gender",
    render:function(data:Record<string,string>){
        return <>{data.gender ? data.gender : "N/A"}</>
      },
    key: "gender",
  },
  {
    title: "Date Of Birth",
    render:function(data:Record<string,string>){
        return <>{data.dob ? data.dob : "N/A"}</>
      },
    key: "dob",
  },
  {
    title: "Action",
    render: function (data: any) {
      return (
        <>
          <Link href={`/super-admin/all-user/edit/${data?.id}`}>
            <Button
              style={{
                margin: "0px 5px",
              }}
              onClick={() => console.log(data)}
              type="primary"
            >
              <EditOutlined />
            </Button>
          </Link>
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
