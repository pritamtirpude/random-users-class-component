import { Component } from "react";
import "./searchinput.css";

class SearchInput extends Component {
  render() {
    const { searchInputHandler, placeholder } = this.props;
    return (
      <input
        className="search-input"
        type="search"
        placeholder={placeholder}
        onChange={searchInputHandler}
      />
    );
  }
}

export default SearchInput;
