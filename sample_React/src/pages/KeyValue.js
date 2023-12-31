import React, { useState } from "react";

const KeyValue = () => {
  const [data] = useState([
    {
      subjid: "0154",
      idpage: "37156",
      idmultirecord: "2",
      siteid: "01",
      siteidn: "01",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "2",
      adddaynum: "15",
      adddt_n: "21102",
      addmom: "1",
      addcaps: "2",
      adddt: "10/10/2017",
      addtime: "10:00",
    },
    {
      subjid: "0350",
      idpage: "37156",
      idmultirecord: "1",
      siteid: "03",
      siteidn: "03",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "1",
      adddaynum: "15",
      adddt_n: "20822",
      addmom: "1",
      addcaps: "2",
      adddt: "03/01/2017",
      addtime: "11:20",
    },
    {
      subjid: "0350",
      idpage: "37156",
      idmultirecord: "2",
      siteid: "03",
      siteidn: "03",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "1",
      adddaynum: "15",
      adddt_n: "20822",
      addmom: "2",
      addcaps: "2",
      adddt: "03/01/2017",
      addtime: "22:35",
    },
    {
      subjid: "0352",
      idpage: "37156",
      idmultirecord: "1",
      siteid: "03",
      siteidn: "03",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "3",
      adddaynum: "15",
      adddt_n: "21001",
      addmom: "1",
      addcaps: "2",
      adddt: "01/07/2017",
      addtime: "Unknown",
    },
    {
      subjid: "0352",
      idpage: "37156",
      idmultirecord: "2",
      siteid: "03",
      siteidn: "03",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "3",
      adddaynum: "15",
      adddt_n: "21001",
      addmom: "2",
      addcaps: "2",
      adddt: "01/07/2017",
      addtime: "Unknown",
    },
    {
      subjid: "0352",
      idpage: "37156",
      idmultirecord: "3",
      siteid: "03",
      siteidn: "03",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "3",
      adddaynum: "16",
      adddt_n: "21002",
      addmom: "1",
      addcaps: "2",
      adddt: "02/07/2017",
      addtime: "Unknown",
    },
    {
      subjid: "0352",
      idpage: "37156",
      idmultirecord: "4",
      siteid: "03",
      siteidn: "03",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "3",
      adddaynum: "16",
      adddt_n: "21002",
      addmom: "2",
      addcaps: "2",
      adddt: "02/07/2017",
      addtime: "Unknown",
    },
    {
      subjid: "0352",
      idpage: "37156",
      idmultirecord: "5",
      siteid: "03",
      siteidn: "03",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "3",
      adddaynum: "17",
      adddt_n: "21003",
      addmom: "1",
      addcaps: "2",
      adddt: "03/07/2017",
      addtime: "Unknown",
    },
    {
      subjid: "0558",
      idpage: "37156",
      idmultirecord: "1",
      siteid: "05",
      siteidn: "05",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "1",
      adddaynum: "15",
      adddt_n: "21336",
      addmom: "1",
      addcaps: "2",
      adddt: "01/06/2018",
      addtime: "09:00",
    },
    {
      subjid: "0750",
      idpage: "37156",
      idmultirecord: "1",
      siteid: "07",
      siteidn: "07",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "1",
      adddaynum: "15",
      adddt_n: "20728",
      addmom: "1",
      addcaps: "2",
      adddt: "01/10/2016",
      addtime: "10:00",
    },
    {
      subjid: "0866",
      idpage: "37156",
      idmultirecord: "1",
      siteid: "08",
      siteidn: "08",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "1",
      adddaynum: "15",
      adddt_n: "21284",
      addmom: "1",
      addcaps: "2",
      adddt: "10/04/2018",
      addtime: "Unknown",
    },
    {
      subjid: "0866",
      idpage: "37156",
      idmultirecord: "2",
      siteid: "08",
      siteidn: "08",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "1",
      adddaynum: "15",
      adddt_n: "21284",
      addmom: "2",
      addcaps: "2",
      adddt: "10/04/2018",
      addtime: "Unknown",
    },
    {
      subjid: "0866",
      idpage: "37156",
      idmultirecord: "3",
      siteid: "08",
      siteidn: "08",
      visit: "Diary Card",
      section: "Additional Diary Data",
      addcycle: "1",
      adddaynum: "16",
      adddt_n: "21285",
      addmom: "1",
      addcaps: "2",
      adddt: "11/04/2018",
      addtime: "Unknown",
    },
  ]);
  var filterColObj = []
  for(let i = 0; i < data.length; i++){
     var obj = data[i];
     for(let key in obj){
       let s = key.toUpperCase();
    //    console.log(`Key ${s}`, `Value ${obj[key]}`);
       filterColObj.push({
        title:s,
        dataIndex:obj[key],
        key:s,
        width:1
       })
     }
  }
  filterColObj.map((f,i)=>(console.log(f.title," ",f.dataIndex," ",f.key," ",f.width)))

  return <div>KeyValue</div>;
};

export default KeyValue;
