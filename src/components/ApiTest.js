import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
const base_url = "http://192.168.1.234/Dropbox/ucare/cronRequest/";

export default class ApiTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(base_url + "testApi")
      .then(Response => Response.json())
      .then(findResponse => {
        console.log(findResponse);
        this.setState({
          data: findResponse,
          isLoaded: true
        });
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }

  //   showRow = () => {
  //     return this.state.data.map((dynamicData, key) => (
  //       <tr>
  //         <td key={key}>{dynamicData.admin_id}</td>
  //         <td>{dynamicData.admin_name}</td>
  //         <td>{dynamicData.user_name}</td>
  //         <td>{dynamicData.admin_email}</td>
  //       </tr>
  //     ));
  //   };
  render() {
    const columns = [
      {
        Header: "Admin ",
        accessor: "admin_id",
        sortable: false,
        filterable: false
      },
      {
        Header: "Name ",
        accessor: "admin_name"
      },

      {
        Header: "User Name ",
        accessor: "admin_name"
      },

      {
        Header: "Email ID ",
        accessor: "admin_email"
      }
    ];

    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {/* Data Loaded */}
          <ReactTable columns={columns} data={this.state.data} />
          {/* {this.state.data.map(itemNodes => (
            <li key={itemNodes.admin_id}>
              ID : {itemNodes.admin_id} || Email : {itemNodes.admin_email} ||
              Name : {itemNodes.admin_name}
            </li>
          ))}
          ; */}
        </div>
      );
    }
    // return (
    //   <div>
    //     <h1>User List</h1>
    //     <table>
    //       <thead>
    //         <tr>
    //           <td>ID</td>
    //           <td>Name</td>
    //           <td>User ID</td>
    //           <td>Email ID</td>
    //         </tr>
    //       </thead>
    //       {/* <tbody>{this.showRow}</tbody> */}

    //     </table>
    //   </div>
    // );
  }
}
