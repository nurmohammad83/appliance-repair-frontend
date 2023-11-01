"use client";

import React, { useState } from "react";
import { Card, Button, Avatar, Upload, Modal, Row, Col, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Form from "../Form/Form";
import FormInput from "../Form/FormInput";
import { updateUser } from "@/services/users/updateUser";

const MyProfile = ({ session }: any) => {
  
  const id = session
  const [handleModalOpen, setHandleModalOpen] = useState<boolean>(false);
  const onSubmit = async (values:any) => {
    message.loading("Updating.....");
    try {
    const result =  await updateUser({id,values})
     if(result){
      message.success("User Update successfully");
     }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    fullName: session?.fullName || "",
    email: session?.email || "",
    contactNo: session?.contactNo || "",
    gender: session?.gender || "",
  };

  return (
    <div>
      <Card title="My Profile" style={{ width: 400, margin: "10px auto" }}>
        <div>
          <div className="flex gap-5 justify-center items-center">
            <Upload>
              <Avatar size={100} icon={<UserOutlined />} />
            </Upload>
          </div>
          <div className="flex font-roboto flex-col mt-6 justify-center items-start gap-5">
            <div className="text-base font-bold">
              <span>Name:</span>{" "}
              <span className="text-sm text-primary">{session?.fullName}</span>
            </div>
            <div className="text-base font-bold">
              <span>Email:</span>{" "}
              <span className="text-sm">{session?.email}</span>
            </div>
            <div className="text-base font-bold">
              <span>Phone:</span>{" "}
              <span className="text-sm">{session?.contactNo}</span>
            </div>
            <div className="text-base font-bold">
              <span>Gender:</span>{" "}
              <span className="text-sm">{session?.gender ? session?.gender : "N/A"}</span>
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="bg-primary border-primary text-white font-semibold" onClick={() => setHandleModalOpen(true)}>
              Update Profile
            </Button>
          </div>
        </div>
      </Card>
      <Modal
        title="Edit User Information"
        open={handleModalOpen}
        onOk={() => setHandleModalOpen(false)}
        onCancel={() => setHandleModalOpen(false)}
        footer={null}
        centered
      >
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
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default MyProfile;
