import React from 'react'
import { useState, useEffect } from "react";
const CascadedDropdown = () => {

    const [country, setCountry] = useState([]);
    const [cities, setCities] = useState([]);
  
    const countries = [
      { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
      { name: "USA", value: "US", cities: ["Miami", "Florida"] },
      { name: "China", value: "CH", cities: ["Sanghai", "Bijing"] }
    ];
    useEffect(() => {
      setCountry(countries);
    }, []);
  
    const onChangeHandler = (e) => {
      console.log(e.target.value);
      let { value } = e.target;
      console.log(`value`, value);
      let temp = country.filter((c) => {
        console.log(`c`, c);
        if (c.value === value) {
          console.log(`c`, c);
          return c;
        }
      });
      console.log(`temp`, temp[0]?.cities);
  
      setCities(temp[0]?.cities);
    };

  return (
    <>
      <select onChange={onChangeHandler}>
        <option placeholder=" ">Select</option>
        {country &&
          country.map((con) => {
            return (
              <option key={con.value} value={con.value} placeholder="Select">
                {con.name}
              </option>
            );
          })}
      </select>
      <select>
        {cities &&
          cities.map((c, i) => {
            return (
              <option key={c} value={c}>
                {c}
              </option>
            );
          })}
      </select>
    </>
  )
}

export default CascadedDropdown