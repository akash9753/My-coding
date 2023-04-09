import { Table } from 'antd';
import { useState } from 'react';



const SelectedRows = () => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      const data = [
        {
            "key": 0,
            "name": "Edward King 0",
            "age": 32,
            "address": "London, Park Lane no. 0"
        },
        {
            "key": 1,
            "name": "Edward King 1",
            "age": 32,
            "address": "London, Park Lane no. 1"
        },
        {
            "key": 2,
            "name": "Edward King 2",
            "age": 32,
            "address": "London, Park Lane no. 2"
        },
        {
            "key": 3,
            "name": "Edward King 3",
            "age": 32,
            "address": "London, Park Lane no. 3"
        },
    ];
      

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
      console.log('selectedRowKeys changed: ', newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
       
        onChange: onSelectChange,
       
      };
   
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  )
}

export default SelectedRows