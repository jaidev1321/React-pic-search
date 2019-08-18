import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
// import axios from "axios";
export default class App extends Component {
  constructor(props) {
    super(props);
    // this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
  }
  state = {
    errorMsg: "",
    images: [],
    searchLoader: ""
  };
  // searchSubmitHandler = val => {
  //   this.setState({
  //     searchLoader: "searching...",
  //     images: []
  //   });
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: val },
  //       headers: {
  //         Authorization:
  //           "Client-ID 82db2a1179f4f71a43c7390e6fd4ff3bfbacfe73a6d0a56660956702440a414e"
  //       }
  //     })
  //     .then(resp => {
  //       console.log(resp.data.results);
  //     });
  // };

  // async searchSubmitHandler(term) {
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: { query: term },
  //     headers: {
  //       Authorization:
  //         "Client-ID 82db2a1179f4f71a43c7390e6fd4ff3bfbacfe73a6d0a56660956702440a414e"
  //     }
  //   });
  //   // console.log(response.data.results);
  //   this.setState({ images: response.data.results });
  // }

  searchSubmitHandler = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  componentDidUpdate() {
    console.log("c d u");
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.searchSubmitHandler} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
        <h4>
          <center>{this.state.errorMsg}</center>
        </h4>
        <h4>{this.state.searchLoader}</h4>
      </div>
    );
  }
}
