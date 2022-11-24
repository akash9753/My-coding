import React from "react";
import Navbar from "./Navbar";
import { Col, Row } from "antd";
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
const HandsOnTable1 = () => {

    registerAllModules();

    const data = [
        ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
        ['2019', 10, 11, 12, 13],
        ['2020', 20, 11, 14, 13],
        ['2021', 30, 15, 12, 13]
      ];

  return (
    <>
      <Navbar />
      <Row>
        <Col span={10}></Col>
        <Col span={4}>
        <h1>Hand On Table</h1>
        </Col>
        <Col span={10}></Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
        <HotTable
        data={data}
        rowHeaders={true}
        colHeaders={true}
        height="auto"
        licenseKey="non-commercial-and-evaluation" // for non-commercial use only
      />
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

export default HandsOnTable1;
