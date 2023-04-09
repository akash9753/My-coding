import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";

const DropDownClick = () => {
  const onClick = (items) => {
    console.log(items);
    message.info(`Click on item ${items.label}`);
  };

  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <>
      <Dropdown
        menu={{
          items,
          onClick: (key) => {onClick(key)},
        }}
      >
        <a  onClick={(e) => e.preventDefault()}>
          <Space>
            Hover me, Click menu item
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default DropDownClick;

