import react from "react";
import { Col, Row } from "antd";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
registerAllModules();
const HandsOnTable3 = () => {
  const data = [
    ["", "Tesla", "Nissan", "Toyota", "Honda", "Mazda", "Ford"],
    ["2017", 10, 11, 12, 13, 15, 16],
    ["2018", 10, 11, 12, 13, 15, 16],
    ["2019", 10, 11, 12, 13, 15, 16],
    ["2020", 10, 11, 12, 13, 15, 16],
    ["2021", 10, 11, 12, 13, 15, 16],
  ];
  return (
    <>
      <HotTable
        data={data}
        // readOnly={true}
        startRows={5}
        startCols={5}
        height="300"
        width="800"
        colHeaders={true}
        minSpareRows={1}
        licenseKey="non-commercial-and-evaluation"
      />
    </>
  );
};
export default HandsOnTable3;
