import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
  session?: any;
}

const DashTable = ({ columns, data, session }: TableProps<[]>) =>{
  console.log(data,'daa')
  console.log(session,'user')
  const filterBookingData = data.filter((booking:any)=>booking.user.email === session.email)
  // console.log(filterBookingData,'filter')
  return  (
    <Table columns={columns} dataSource={data} />
  )
};

export default DashTable;
