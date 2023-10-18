import React from "react";
import { Table  } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableProps<T> {
  columns: ColumnsType<T>;
  data: T[];
}

function DashTable<T>({ columns, data }: TableProps<T[]>) {
  return <Table columns={columns} dataSource={data} />;
}
export default DashTable;
