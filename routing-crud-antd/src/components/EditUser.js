import React, { useState, useEffect } from "react";
import { Col, Row, Button, Input, Form, Select, DatePicker } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const EditUser = () => {
  const [data, setData] = useState({});
  const [pageLoading, setPageLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();
  const url = "https://nodejsreact1234.herokuapp.com/user";
  const editUrl = "https://nodejsreact1234.herokuapp.com/user/update";
  useEffect(() => {
    getDataById();
  }, [id]);

  const getDataById = async () => {
    setPageLoading(true);
    await axios
      .get(`${url}/${id}`)
      .then((response) => {
        setData(response.data.data);
        setPageLoading(false);
      })
      .catch((error) => {
        setPageLoading(false);
      });
  };

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
    setButtonLoading(true);
    console.log(data);
    console.log(id);
    try {
      const response = await axios.put(`${editUrl}/${id}`, data);
      if (response.status === 200) {
        toast.success("User data updated successfully");

        setTimeout(() => {
          setButtonLoading(false);
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      setButtonLoading(false);
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
          <h1>{editMode ? "Edit User" : "View User" }</h1>
        </Col>
        <Col span={10}></Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          {pageLoading ? (
            <>
              <Row>
                <Col span={8}></Col>
                <Col span={4}>
                  <div style={{ textAlign: "center" }}>
                    <Spin
                      spinning={pageLoading}
                      size="large"
                      tip="Loading..."
                    ></Spin>
                  </div>
                </Col>
                <Col span={8}></Col>
              </Row>
            </>
          ) : (
            <>
              {editMode ? (
                <>
                <Form
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 14 }}
                  onFinish={(values) => {
                    saveNewUserdata(values);
                    console.log(values);
                  }}
                  // initialValues={{
                  //   fname: data.fname,
                  //   lname: data.lname,
                  //   email: data.email,
                  //   mobile: data.mobile,
                  //   gender: data.gender,
                  // }}
                >
                  <Form.Item
                    name="fname"
                    label="First Name"
                    initialValue={data.fname}
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
                    initialValue={data.lname}
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
                    initialValue={data.email}
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
                    initialValue={data.mobile}
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
                    <Input placeholder="Enter your mobile no" />
                  </Form.Item>
                  <Form.Item
                    initialValue={data.gender}
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
                    initialValue={data.state}
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
                    <Input placeholder="Enter your state" />
                  </Form.Item>

                  <Form.Item>
                  <span>
                    <Button
                      disabled={buttonLoading}
                      style={{ width: "100%" }}
                      block
                      type="primary"
                      htmlType="submit"
                    >
                      Save {buttonLoading && <Spin indicator={antIcon} />}
                      
                    </Button>
                    
                    <Button style={{marginTop:4}}
                    onClick={() => setEditMode(false)}
                    >
                    Go Back
                    </Button>
                    </span>
                  </Form.Item>
                </Form>
                </>
                
              ) : (
                <>
                <Form
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 14 }}
                >
                  <Form.Item
                    label="First Name"
                    >
                    <div>{data.fname}</div> 
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    >
                    <div>{data.lname}</div> 
                  </Form.Item>
                  <Form.Item
                    label="Email"
                  >
                  <div>{data.email}</div> 
                  </Form.Item>
                  <Form.Item
                    label="Mobile No"
                  >
                  <div>{data.mobile}</div> 
                  </Form.Item>
                  <Form.Item
                    label="Gender"
                  >
                  <div>{data.gender}</div> 
                  </Form.Item>
                  <Form.Item
                    name="state"
                    initialValue={data.state}
                    label="State"
                  >
                  <div>{data.state}</div> 
                  </Form.Item>

                   <Row>
                   <Col span={6}></Col>
                   <Col span={12}>
                   <Button
                   style={{ width: "100%" }}
                   type="primary"
                   onClick={() => setEditMode(true)}
                 >
                   Edit
                 </Button>
                   </Col>
                   <Col span={6}></Col>
                   </Row>
                   
               
                </Form>
                </>
                )}
            </>
          
          )}
        </Col>
        <Col span={8}></Col>
      </Row>
      <ToastContainer />
    </>
  );
};
export default EditUser;
