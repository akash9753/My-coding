import React, { useState } from "react";

const FilterMapMethod = () => {
  // const [studyConfigList] = useState([
  //   {
  //     studyConfigurationID: 63,
  //     workFlowActivityID: null,
  //     configurationName: "StudyRootPath",
  //     configurationValue:
  //       "\\\\172.16.2.193\\TransBot_Files\\TransBotAppData\\InternalStudyFiles",
  //   },
  //   {
  //     studyConfigurationID: 64,
  //     workFlowActivityID: null,
  //     configurationName: "Transformation",
  //     configurationValue: "1",
  //   },
  //   {
  //     studyConfigurationID: 65,
  //     workFlowActivityID: null,
  //     configurationName: "Annotation",
  //     configurationValue: "1",
  //   },
  //   {
  //     studyConfigurationID: 66,
  //     workFlowActivityID: null,
  //     configurationName: "ProtocolDocument",
  //     configurationValue: null,
  //   },
  //   {
  //     studyConfigurationID: 67,
  //     workFlowActivityID: null,
  //     configurationName: "AnnotationType",
  //     configurationValue: "Metadata Annotatation",
  //   },
  //   {
  //     studyConfigurationID: 68,
  //     workFlowActivityID: 4,
  //     configurationName: "Define",
  //     configurationValue: "1",
  //   },
  //   {
  //     studyConfigurationID: 69,
  //     workFlowActivityID: 4,
  //     configurationName: "StandardDatasetLoc",
  //     configurationValue:
  //       "\\\\172.16.2.193\\TransBot_Files\\AllProjects\\Training\\Test",
  //   },
  // ]);

     const [studyConfigs] = useState([
      {
     "StudyID":3,
     "TimeZone":"IST",
     "StudyConfigurationID":18,
      "ConfigurationName":"CRFDocument",
      "ConfigurationValue":"CRF_Agat"
      },
      {
     "StudyID":3,
     "TimeZone":"IST",
     "StudyConfigurationID":19,
      "ConfigurationName":"StandardDatasetLocation",
      "ConfigurationValue":"\\\\1"
      },
      {
     "StudyID":3,
     "TimeZone":"IST",
     "StudyConfigurationID":20,
      "ConfigurationName":"DefineOutputType",
      "ConfigurationValue":"2.0.0"
      }
   ],)

   const studyConfigsn =  studyConfigs.map((singleObj,index)=>{
      if(singleObj.ConfigurationName === "CRFDocument"){
        singleObj.ConfigurationValue = "//akash//akash"//values.ConfigurationValue
        
      }else if(singleObj.ConfigurationName === "StandardDatasetLocation"){
        singleObj.ConfigurationValue = "/akash/akash"//values.StandardDatasetLocation
        
      }else if(singleObj.ConfigurationName === "DefineOutputType"){
        singleObj.ConfigurationValue = "new DefineOutputType"
        
      }
      return singleObj;
  })

   const postobj = {
    "studyConfigs" : studyConfigsn
   };
   console.log(postobj);

  // const filterData = studyConfigList.filter((singleObj, index)=>{
  //       return singleObj.configurationName === "Define" || singleObj.configurationName === "Transformation" || singleObj.configurationName === "Annotation"
  // })
  // console.log(filterData);

  // const filterData = studyConfigList.filter((singleObj, index) => {
  //   return singleObj.configurationValue === "Metadata Annotatation";
  // });
  // console.log(filterData);


  return (
    <div>
      {/* {filterData.map((item, i) => {
        return (
          <>
            <h5>{item.configurationValue}</h5>
          </>
        );
      })} */}
      akash
    </div>
  );
};

export default FilterMapMethod;
