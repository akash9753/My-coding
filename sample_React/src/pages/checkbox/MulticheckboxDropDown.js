import React, { useState, useEffect } from "react";

const userData = [
  { name: "Jeevan" },
  { name: "Manish" },
  { name: "Prince" },
  { name: "Akash" },
];

const MulticheckboxDropDown = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user, index) => ({
        ...user,
        isChecked: checked,
      }));
      console.log(tempUser);
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      console.log(tempUser);
      setUsers(tempUser);
    }
  };

  return (
    <>
      <h3>Select Users</h3>
      <input type="checkbox" name="allSelect" onChange={handleChange} 
      checked={users.filter((user,index)=>user?.isChecked !== true).length < 1 }
      />
      <label htmlFor="">All Select</label>
      {users.map((user, index) => (
        <div key={index}>
          <input
            type="checkbox"
            name={user.name}
            onChange={handleChange}
            checked={user?.isChecked || false}
          />
          <label htmlFor="">{user.name}</label>
        </div>
      ))}
    </>
  );
};

export default MulticheckboxDropDown;
