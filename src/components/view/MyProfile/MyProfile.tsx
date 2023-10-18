'use client'

import React from 'react';
import { Card, Form, Input, Button, Avatar, Upload } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';

const MyProfile = () => {
  // Handle form submission
  const handleFormSubmit = (values:any) => {
    // Handle the form submission here (e.g., updating user data).
    console.log('Form values:', values);
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };

  // Upload Avatar function (for demo purposes)
  const customRequest = ({ file, onSuccess }:any) => {
    // Simulate uploading the file
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const uploadProps = {
    customRequest,
    showUploadList: false,
  };

  return (
    <Card title="My Profile" style={{ width: 400, margin: '0 auto' }}>
      <Form
        onFinish={handleFormSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item className='flex justify-center items-center'>
          <Upload {...uploadProps}>
            <Avatar size={100} icon={<UserOutlined />} />
          </Upload>
        </Form.Item>
        <Form.Item
          label="Full Name"
          name="fullName"
        >
          <Input disabled className='placeholder:text-primary' placeholder="Nur Mohammad" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
        >
          <Input disabled className='placeholder:text-primary' placeholder="mohamamdnur@gmailcom" value="mohamamdnur@gmailcom"/>
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
        >
          <Input disabled className='placeholder:text-primary' placeholder="N/A" value="m"/>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default MyProfile;
