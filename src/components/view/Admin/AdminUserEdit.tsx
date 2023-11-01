"use client";

import React, { useState } from "react";
import { Card, Button, Avatar, Upload, Modal, Row, Col, message } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import { updateUser } from "@/services/users/updateUser";
import { IUser } from "@/types/common";

const AdminUserEdit = ({data}:{data:IUser}) => {
 
  const id = data
  const onSubmit = async (values:any) => {
    message.loading("Updating.....");
    try {
    const result =   await updateUser({id,values})

     if(result){
      message.success("User Update successfully");
     }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    fullName: data.fullName || "",
    email: data.email || "",
    contactNo: data.contactNo || "",
    gender: data.gender || "",
  };

  return (
    <div className="container w-[400px] py-10 min-h-screen mx-auto">
      <h2 className="text-center font-roboto">Update User</h2>
        <Form  submitHandler={onSubmit}  defaultValues={defaultValues}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput size="middle" name="fullName" label="Name" />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput size="middle" name="email" label="Email" />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput size="middle" name="contactNo" label="Phone" />
            </Col>
            <Col span={24} style={{ margin: "10px 0" }}>
              <FormInput size="middle" name="gender" label="Gender" />
            </Col>
          </Row>
          <Button className="bg-primary border-primary" type="primary" htmlType="submit">
            Update
          </Button>
        </Form>

    </div>
  );
};

export default AdminUserEdit;
