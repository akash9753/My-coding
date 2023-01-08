import React, { useEffect, useState } from "react";
import Hoc from "./Hoc";
const TodoList = ({ data }) => {
  //   const [todos, setTodos ] = useState([]);
  //   const [term, setTerm] = useState("");
  //   const fetchTodos = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const json = await res.json();
  //     setTodos(json);
  //     console.log(json);
  //   };

  //   useEffect(() => {
  //     fetchTodos();
  //   }, []);

  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.title}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  //   let filterTodos = todos
  //     .filter(({ title }) => {
  //       return title.indexOf(term) >= 0;
  //     }).slice(0,10)
  //     .map((todo) => {
  //       return (
  //         <div key={todo.title}>
  //           <p>
  //             <strong>{todo.title}</strong>
  //           </p>
  //         </div>
  //       );
  //     });

  return (
    <div>
      <h2>Todos</h2>
      <div> {renderTodos}</div>
    </div>
  );
};

const SearchTodos = Hoc(TodoList, "todos");

export default SearchTodos;
