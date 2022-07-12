import React, { Component } from "react";
import axios from "axios";
import "./Restaurant.css";
import { TableHTMLAttributes } from "react";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], category: [] };
  }
  componentDidMount() {
    fetch("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ items: result });
      });
  }
  handleCheck = (shortName) => {
    fetch(
      `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${shortName}`
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ category: result });
      });

    console.log(shortName);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <h3>Main Category</h3>
            {this.state.items.map((data) => (
              <ul>
                <li key={data.id}>
                  <button onClick={() => this.handleCheck(data.short_name)}>
                    {data.id} - &nbsp;
                    {data.name} - &nbsp;
                    {data.short_name} &nbsp;
                  </button>
                </li>
              </ul>
            ))}
          </div>
          <div className="column">
            {this.state.category.map((data) => (
              <div>
                <h3>Items in Category:{data.short_name}</h3>

                <table>
                  <thead>
                    <tr>
                      <th> Name</th>
                      <th> Description</th>
                    </tr>
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
}
export default Restaurant