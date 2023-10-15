"use client";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { openSidebarClose } from "@/redux/slices/sidebarSlice";
import { Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const { Content, Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider 

     width={280}
     style={{
        overflow:'auto',
        height:'100vh',
        position:'sticky',
        left:0,
        top:0,
        bottom:0

     }}
     >
    <div style={{
        color:'white',
        fontSize:'2rem',
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:'.5rem',
        padding:'10px 0'
    }}>
        University <br /> Management
    </div>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={defaultSidebarItem(role)} />
  </Sider>
  );
};

export default Sidebar;