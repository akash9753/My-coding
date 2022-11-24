import React, { useState, useEffect } from "react";
import { Col, Row, Button, Input, Form, Select, DatePicker, Spin } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "antd/dist/antd.css";
import { LoadingOutlined } from "@ant-design/icons";

const AddUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const saveNewUserdata = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const response = await axios.post(
        "https://nodejsreact1234.herokuapp.com/user/Create",
        data
      );
      if (response.status === 200) {
        toast.success("User added successfully");
        setTimeout(() => {
          navigate("/");
          setLoading(false);
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
      console.log("something went wrong", error.message);
    }
  };
  return (
    <>
      <Navbar />
      <Row>
        <Col span={10}></Col>
        <Col span={4}>
          <h1>Add New User</h1>
        </Col>
        <Col span={10}></Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Form
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 14 }}
            onFinish={(values) => {
              saveNewUserdata(values);
            }}
          >
            <Form.Item
              name="fname"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your full name",
                },
                { whitespace: true },
                { min: 3 },
                {
                  pattern: /^[a-zA-Z ]+$/,
                  message: `Only character allowed`,
                },
                //
              ]}
              hasFeedback
            >
              <Input placeholder="Enter Your First Name" />
            </Form.Item>
            <Form.Item
              name="lname"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your full name",
                },
                { whitespace: true },
                { min: 3 },
                {
                  pattern: /^[a-zA-Z ]+$/,
                  message: `Only character allowed`,
                },
                //
              ]}
              hasFeedback
            >
              <Input placeholder="Enter Your last Name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter email",
                },
                {
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: `Please enter a valid email address`,
                },
                //^[a-zA-Z ]+$
              ]}
              hasFeedback
            >
              <Input placeholder="Enter Your Email" />
            </Form.Item>
            <Form.Item
              name="mobile"
              label="Mobile No"
              rules={[
                {
                  required: true,
                  message: "Please enter your mobile number",
                },
                // {min:8},
                // {
                //   validator:(_,value)=>
                //   value && value.includes("A")
                //   ?Promise.resolve() : Promise.reject("password does not match criteria")
                // },
                {
                  pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: `Please enter 10 digit valid mobile number`,
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter Your Password" />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please enter your gender",
                },
              ]}
              hasFeedback
            >
              <Select placeholder="select your gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="state"
              label="State"
              rules={[
                {
                  required: true,
                  message: "Please enter your state",
                },
                { whitespace: true },
                { min: 3 },
                {
                  pattern: /^[a-zA-Z ]+$/,
                  message: `Only character allowed`,
                },
                //
              ]}
              hasFeedback
            >
              <Input placeholder="Enter Your First Name" />
            </Form.Item>

            <Form.Item>
              <Button 
                disabled={loading}
                style={{ width: "100%" }}
                block
                type="primary"
                htmlType="submit"
              >
                Add  
                {loading && <> <div>{" "}<Spin indicator={antIcon} /> </div></>}
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row></Row>
      <ToastContainer />
    </>
  );
};
export default AddUser;
