import React, { useEffect, useState } from "react";
import Hoc from "./Hoc";
const Users = ({ data }) => {
  // const [users, setUsers] = useState([]);
  // const [term, setTerm] = useState("");
  // const fetchUsers = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const json = await res.json();
  //   setUsers(json);
  //   console.log(json);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  // let filterUsers = users
  //   .filter(({ name }) => {
  //     return name.indexOf(term) >= 0;
  //   })
  //   .map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p>
  //           <strong>{user.name}</strong>
  //         </p>
  //       </div>
  //     );
  //   });

  return (
    <div>
      <h2>Users</h2>
      <div> {renderUsers}</div>
    </div>
  );
};

const SearchUsers = Hoc(Users, "users");

export default SearchUsers;
