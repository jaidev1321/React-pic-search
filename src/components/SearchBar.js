import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchInput: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchInput);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchInput}
              onChange={e => this.setState({ searchInput: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
