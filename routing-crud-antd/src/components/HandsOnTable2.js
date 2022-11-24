import React from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import Navbar from "./Navbar"
const HandsOnTable2 = () => {
  return (
    <>
    
      <HotTable
        data={[
          ["Lorem", "ipsum", "dolor", "sit", "12/1/2015", 23],
          ["adipiscing", "elit", "Ut", "imperdiet", "5/12/2015", 6],
          ["Pellentesque", "vulputate", "leo", "semper", "10/23/2015", 26],
          ["diam", "et", "malesuada", "libero", "12/1/2014", 98],
          ["orci", "et", "dignissim", "hendrerit", "12/1/2016", 8.5],
        ]}
        columns={[
          { type: "text" },
          { type: "text" },
          { type: "text" },
          { type: "text" },
          { type: "date", dateFormat: "M/D/YYYY" },
          { type: "numeric" },
        ]}
        colHeaders={true}
        rowHeaders={true}
        filters={true}
        dropdownMenu={["filter_by_condition", "filter_action_bar"]}
        height="auto"
        licenseKey="non-commercial-and-evaluation"
      />
      );
    </>
  );
};
export default HandsOnTable2;
