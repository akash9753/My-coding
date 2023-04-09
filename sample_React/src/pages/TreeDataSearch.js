import { Input, Tree } from "antd";
import { useMemo, useState } from "react";
import { defaultData } from "./treeData2";
const { Search } = Input;

const TreeDataSearch = () => {
  const [expandedKeys, setExpandedKeys] = useState(["Study"]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (newExpandedKeys) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const dataList = [];
  const generateList = (data) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const { key } = node;
      dataList.push({
        key,
        title: key,
      });
      if (node.children) {
        generateList(node.children);
      }
    }
  };

  generateList(defaultData);
  console.log(dataList);
  const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item) => item.key === key)) {
          parentKey = node.key;
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };

   const onChange = (e) => {
     const { value } = e.target;
     const res1 = dataList.map((item) => {
       if (item.title.indexOf(value) > -1) {
         return getParentKey(item.key, defaultData);
       }
       return null;
     });
     console.log(res1);
     const newExpandedKeys = res1.filter((item, i, self) => {
       return item && self.indexOf(item) === i;
     });
     setExpandedKeys(newExpandedKeys);
     setSearchValue(value);
     setAutoExpandParent(true);
   };
  const treeData = useMemo(
    () => {
      const loop = (data) =>
        data.map((item) => {
          const strTitle = item.title;
          const index = strTitle.indexOf(searchValue);
          const beforeStr = strTitle.substring(0, index);
          const afterStr = strTitle.slice(index + searchValue.length);
          const title =
            index > -1 ? (
              <span>
                {beforeStr}
                <span className="site-tree-search-value">{searchValue}</span>
                {afterStr}
              </span>
            ) : (
              <span>{strTitle}</span>
            );
          if (item.children) {
            return {
              title,
              key: item.key,
              children: loop(item.children),
            };
          }
          return {
            title,
            key: item.key,
          };
        });
      console.log(defaultData);
      return loop(defaultData);
    },
    [searchValue],
    defaultData
  );

  return (
    <div>
      <Search
        style={{
          marginBottom: 8,
        }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
      />
    </div>
  );
};
export default TreeDataSearch;
