import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Col, Row, Table } from "antd";
import {  useParams } from "react-router-dom";
import axios from "axios";
import "../style/viewuser.css"
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./Navbar";
import { Spin } from 'antd';
const ViewUser = () => {
  const [data,setData] = useState({})
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const url = "https://nodejsreact1234.herokuapp.com/user"

  useEffect(() => {
    getDataById();
  }, [id]);

//   const getDataById = async () => {
//     const response = await axios.get(`${url}/${id}`);
//     console.log(response);
    
//     console.log(response.data.data);
//     console.log(response.data.data.fname);
//     setData(response.data.data);
//     console.log(data.fname);
//     };

const getDataById = async () => {
    setLoading(true);
    await axios
      .get(`${url}/${id}`)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <>
    <Navbar/>
    <Row>
        <Col span={10}></Col>
        <Col span={4}><h1>User Detail</h1></Col>
        <Col span={10}></Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
        { loading ? (
            <Row>
                <Col span={8}></Col>
                <Col span={4}>
                  <div style={{ textAlign: "center" }}>
                    <Spin spinning={loading} size="large" tip="Loading..."></Spin>
                  </div>
                </Col>
                <Col span={8}></Col>
              </Row>
        ) : (
            <div className="styleViewBox">
         <h2>First Name : {data.fname}</h2> 
         <h2>Last Name : {data.lname}</h2> 
         <h2>Email : {data.email}</h2> 
         <h2>Mobile : {data.mobile}</h2> 
         <h2>Gender : {data.gender}</h2> 
         <h2>State : {data.state}</h2> 
         </div>
        )}
        
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};
export default ViewUser;
