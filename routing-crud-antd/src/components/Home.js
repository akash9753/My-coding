import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";

import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./Navbar";
import { Col, Row, Button, Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";
import { Popconfirm } from "antd";
import { Layout } from "antd";
const { Content } = Layout;

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userUrl = "https://nodejsreact1234.herokuapp.com/user/all";
  const deleteUserUrl = "https://nodejsreact1234.herokuapp.com/user/delete";
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  //   const getData = async () => {
  //     const response = await axios.get(userUrl);
  //     console.log(response.data);
  //     setUserData(response.data.data);
  //   };

  const getData = async () => {
    setLoading(true);
    await axios
      .get(userUrl)
      .then((response) => {
        setUserData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const confirm = () => {
    alert("record deleted succrssfully");
  };

  const cancel = () => {
    alert("ok no problem");
  };

  const columns = [
    // {
    //   key: 1,
    //   title: "ID",
    //   dataIndex: "_id",
    // },
    {
      key: 2,
      title: "First Name",
      dataIndex: "fname",
    },
    {
      key: 3,
      title: "Last Name",
      dataIndex: "lname",
    },
    {
      key: 4,
      title: "Email",
      dataIndex: "email",
    },
    {
      key: 5,
      title: "Mobile",
      dataIndex: "mobile",
    },
    {
      key: 6,
      title: "Gender",
      dataIndex: "gender",
    },
    {
      key: 7,
      title: "State",
      dataIndex: "state",
    },

    {
      key: "8",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EyeOutlined
              onClick={() => {
                navigate(`/edit-user/${record._id}`);
              }}
              style={{ color: "blue", marginLeft: 12 }}
            />
            <EditOutlined
              style={{ color: "green", marginLeft: 12 }}
              onClick={() => {
                navigate(`/edit-user/${record._id}`);
              }}
            />

            <Popconfirm
              title="Are you sure delete this record?"
              okText="Yes"
              cancelText="Cancel"
              onConfirm={()=>onDeleteStudent(record._id)}
              
              onCancel={()=>cancel()}
              
            >
              <DeleteOutlined style={{ color: "red", marginLeft: 12 }} />
            </Popconfirm>
          </>
        );
      },
    },
  ];

  //   <DeleteOutlined
  //   onClick={() => {
  //     // setDeleteId(record._id)
  //     onDeleteStudent(record._id);
  //   }}
  //   style={{ color: "red", marginLeft: 12 }}
  // />

  //     const onDeleteStudent = (id) => {

  //       Modal.confirm({
  //           title:"Are You Sure, you want to delete this user record ?",
  //           okText:"Yes",
  //           okType:"danger",
  //           onOk:()=>{
  //               const deleteUser = async () => {
  //                   const response = await axios.delete(`${deleteUserUrl}/${id}`);
  //                   console.log(response);
  //                   if(response.status === 200){
  //                       getData();
  //                       toast.success("User deleted successfully")
  //                   }
  //                 };
  //                 deleteUser();
  //           }
  //       })
  // };

  const onDeleteStudent = async (id) => {
    console.log(id);
    const response = await axios.delete(`${deleteUserUrl}/${id}`);
    console.log(response);
    if (response.status === 200) {
      getData();
      toast.success("User deleted successfully");
    }
  };

  return (
    <>
      <Navbar />
      <Layout>
        <Content>
          <Row>
            <Col span={10}></Col>
            <Col span={4}>
              <h1>User Data Table</h1>
            </Col>
            <Col span={10}></Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              {loading ? (
                <>
                  <Row>
                    <Col span={8}></Col>
                    <Col span={4}>
                      <div style={{ textAlign: "center" }}>
                        <Spin
                          spinning={loading}
                          size="large"
                          tip="Loading..."
                        ></Spin>
                      </div>
                    </Col>
                    <Col span={8}></Col>
                  </Row>
                </>
              ) : (
                <div>
                  <Button 
                    style={{ marginBottom: 6, float:"right" }}
                    onClick={() => {
                      navigate("/add-user");
                    }}
                  >
                    Add a New User
                  </Button>
                  <Button 
                    style={{ marginBottom: 6, float:"right", marginRight:4 }}
                    onClick={() => {
                      navigate("/hands-on-table1");
                    }}
                  >
                    HandsOnTable Demo 1
                  </Button>
                  <Button 
                    style={{ marginBottom: 6, float:"right", marginRight:4 }}
                    onClick={() => {
                      navigate("/hands-on-table2");
                    }}
                  >
                    HandsOnTable Demo 2
                  </Button>
                  <Button 
                    style={{ marginBottom: 6, float:"right", marginRight:4 }}
                    onClick={() => {
                      navigate("/hands-on-table3");
                    }}
                  >
                    HandsOnTable Demo 3
                  </Button>
                  <Button 
                    style={{ marginBottom: 6, float:"right", marginRight:4 }}
                    onClick={() => {
                      navigate("/blockly");
                    }}
                  >
                    Blockly
                  </Button>
                  <Table columns={columns} dataSource={userData}></Table>
                </div>
              )}
            </Col>
            <Col span={2}></Col>
          </Row>
        </Content>
      </Layout>

      <ToastContainer />
    </>
  );
};
export default Home;
