import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const { Header } = Layout;

const Navbar = () => {
  
  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "#6495EW" }}>
          <h1 style={{ color: "white" }}>
            <Link to="/" >
            Crud App Ant Design{" "}
            </Link>
            <Avatar
              style={{ float: "right", marginTop: 10 }}
              size={40}
              icon={<UserOutlined />}
            />
          </h1>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
