import { Select, Form, Button } from "antd";
const options = [
  {
    variableLevelID: 132,
    referenceVariable: "CM.CMDOSFRQ",
  },
  {
    variableLevelID: 142,
    referenceVariable: "DA.DASEQ",
  },
  {
    variableLevelID: 136,
    referenceVariable: "CM.CMSTDY",
  },
  {
    variableLevelID: 147,
    referenceVariable: "DA.DAORRES",
  },
  {
    variableLevelID: 139,
    referenceVariable: "DA.STUDYID",
  },
  {
    variableLevelID: 131,
    referenceVariable: "CM.CMDOSU",
  },
  {
    variableLevelID: 90,
    referenceVariable: "AE.STUDYID",
  },
];
const { Option } = Select;
const handleChange = (e) => {
  //   console.log(`selected ${value} ${JSON.stringify(label)}`);
  console.log(e);
};

console.log(options);

const SelectSearch = () => {
  const [form] = Form.useForm();

  const onFormSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
    });
  };
  

  return (
    <Form form={form}>
      <Form.Item name="referenceVariableList" label="Reference Variable">
         <Select
           mode="tags"
           style={{
             width: "50%",
           }}
           placeholder="Tags Mode"
          onChange={handleChange}
           options={
             options?.length > 0
               ? options?.map((item, index) => ({
                 value: item.referenceVariable,
                 label: item.referenceVariable,
                 key: item.variableLevelID,
                 }))
               : []
           }
        /> 
        
      </Form.Item>
      <Button htmlType="submit" type="primary" onClick={onFormSubmit}>
        Save
      </Button>
    </Form>
  );
};

export default SelectSearch;
