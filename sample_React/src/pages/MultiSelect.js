import React from "react";
import { Select, Button, Form } from "antd";

const MultiSelect = () => {
  const [form] = Form.useForm();

  const options = [
    { id: 1, name: "akash" },
    { id: 2, name: "sam" },
  ];

  const handleChange = (value) => {
    // console.log(`selected ${value}`);

    console.log(typeof value);
    const propertyNames = Object.keys(value);
    console.log(propertyNames);
    console.log(typeof propertyNames);
    const propertyValues = Object.values(value);
    console.log(propertyValues);
    console.log(typeof propertyValues);
    const userValues = [];
    propertyValues.map((item,index)=>{
        userValues.push({
            RoleID: 4,
            UserID: item,
            action: "add",
            studyID: 1,
            projectID: 1,
            UserAssignmentID: 1
        })
    })
    console.log(userValues);
  };

  const onFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form
        layout="vertical"
        style={{ fontWeight: 600 }}
        form={form}
        autoComplete="off"
      >
        <Form.Item
          name="userAssignments"
          label="Users For Project Manager Role"
          rules={[
            {
              required: true,
              message: "Users For Project Manager Role is mandatory",
            },
          ]}
          hasFeedback
        >
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            defaultValue={["zim", "surya"]}
            onChange={handleChange}
            options={options.map((item) => ({
              value: item.name,
              key: item.id,
              label: item.name,
            }))}
          />
        </Form.Item>
        <Button
          style={{ borderRadius: "16px", float: "right" }}
          type="primary"
          onClick={onFormSubmit}
        >
          Save
        </Button>
      </Form>
    </>
  );
};

export default MultiSelect;
