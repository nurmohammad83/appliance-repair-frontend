'use client'

import React from 'react';
import { Card, Form, Input, Button, Avatar, Upload } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import { IUser } from '@/types/user';

const MyProfile = (user:any) => {
  console.log(user.user)
  // Handle form submission
//   const handleFormSubmit = (values:any) => {
//     // Handle the form submission here (e.g., updating user data).
//     console.log('Form values:', values);
//   };

//   const onFinishFailed = (errorInfo:any) => {
//     console.log('Failed:', errorInfo);
//   };

  // Upload Avatar function (for demo purposes)
//   const customRequest = ({ file, onSuccess }:any) => {
//     // Simulate uploading the file
//     setTimeout(() => {
//       onSuccess('ok');
//     }, 0);
//   };

//   const uploadProps = {
//     customRequest,
//     showUploadList: false,
//   };

  return (
    <Card title="My Profile" style={{ width: 400, margin: '0 auto' }}>
      <Form
        // onFinish={handleFormSubmit}
        // onFinishFailed={onFinishFailed}
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
          <Button>Update Profile</Button>
        </div>
      </Form>
    </Card>
  );
};

export default MyProfile;
