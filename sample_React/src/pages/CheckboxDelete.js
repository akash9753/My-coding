import React from "react";
import { useState, useEffect } from "react";
const CheckboxDelete = () => {
  const arr = ["play cricket", "play video game", "read book"];

  
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push({
      id: i,
      game: arr[i],
      isChecked: false,
    });
  }
  const [obj, setObj] = useState(temp);

  const onChangeHandler = (e) =>{
    let temp = [...obj]
    const {name, checked} = e.target
    temp = temp.map((t)=>(t.game === name ? {...t,isChecked:checked} : t))
    setObj(temp)
  }

  const onDelete = (id) =>{
    console.log(id);
    let temp = [...obj]
    temp = temp.filter((t)=>(t.id !== id))
    setObj(temp)
  }
  console.log(obj);
  return (
    <>
      {obj.length > 0 && (
        <div>
          {obj.map((o, i) => {
            return (
              <div key={i}>
                <span>
                  <input type="checkbox" checked={o.isChecked} onChange={onChangeHandler} name={o.game} />
                </span>
                {o.game}
                {o.isChecked && <button onClick={()=>onDelete(o.id)}>Delete</button>}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CheckboxDelete;
