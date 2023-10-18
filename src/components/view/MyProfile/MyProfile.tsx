'use client'

import React, { useState } from 'react';
import { Card, Button, Avatar, Upload, Modal, Row, Col, message } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import { IUser } from '@/types/user';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';

const MyProfile = (user:any) => {
  console.log(user)
  const [handleModalOpen, setHandleModalOpen] = useState<boolean>(false);
  const onSubmit = async (values: { fullName: string, email:string,contactNo:string,gender:string}) => {
    message.loading("Updating.....");
    try {
      // await updateDepartment({id, body:values});
      message.success("Department Update successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    fullName: user?.user.fullName || "",
    email: user?.user.email || ""
  };
  
  return (
   <div>
     <Card title="My Profile" style={{ width: 400, margin: '0 auto' }}>
      <div
      >
        <div className='flex gap-5 justify-center items-center'>
          <Upload >
            <Avatar size={100} icon={<UserOutlined />} />
          </Upload>
        </div>
        <div className='flex font-roboto flex-col mt-6 justify-center items-start gap-5'>
        <div className='text-base font-bold'>
         <span>Name:</span> <span className='text-sm text-primary'>{user.user.fullName}</span>
        </div>
        <div className='text-base font-bold'>
         <span>Email:</span> <span className='text-sm'>{user.user.email}</span>
        </div>
        </div>
        <div className='flex justify-end'>
          <Button onClick={()=>setHandleModalOpen(true)}>Update Profile</Button>
        </div>
      </div>
    </Card>
    <Modal  title="Edit Guest Information"
        open={handleModalOpen}
        onOk={() => setHandleModalOpen(false)}
        onCancel={() => setHandleModalOpen(false)}
        footer={null}
        centered>
          <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={24} style={{ margin: "10px 0" }}>
            <FormInput size="middle" name="fullName" label="Name" />
          </Col>
          <Col span={24} style={{ margin: "10px 0" }}>
            <FormInput size="middle" name="email" label="Email" />
          </Col>
          <Col span={24} style={{ margin: "10px 0" }}>
            <FormInput size="middle" name="contNo" label="Phone" />
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
