import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

function FunctionalRestaurant(data) {
  const i = [];
  const j = [];
  const [items, setItems] = useState(i);
  const [Detailitems, setDetailitems] = useState(j);
  const categorymenu =
    "https://stream-restaurant-menu-svc.herokuapp.com/category";

  useEffect(() => {
    fetch(categorymenu)
      .then((response) => response.json())
      .then((result) => setItems(result));
  }, []);
  const renderdata = (Name) => {
    const url = `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${Name}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setDetailitems(result));
    console.log(Detailitems);
  };

  return (
    <div>
      <div className="row">
        <div className="column">
          <h3>Main Category</h3>
          {items.map((data) => (
            <ul>
              <li key={data.id}>
                <button onClick={() => renderdata(data.short_name)}>
                  {data.id} - &nbsp;
                  {data.name} - &nbsp;
                  {data.short_name} &nbsp;
                </button>
              </li>
            </ul>
          ))}
        </div>
        <div className="column">
          {Detailitems.map((data) => (
            <div>
              <h3>Items in Category:{data.name}</h3>

              <table>
                <thead>
                  <th> Name</th>
                  <th> Description</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FunctionalRestaurant;
