import { Component } from "react";
import "./App.css";
import CardList from "./components/cardlist/CardList";
import SearchInput from "./components/searchinput/SearchInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomUsers: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=12")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { randomUsers: users.results };
        })
      );
  }

  searchInputHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchValue };
    });
  };

  render() {
    const { randomUsers, searchValue } = this.state;

    const filteredUsers = randomUsers.filter((user) => {
      return user.name.first.toLowerCase().includes(searchValue);
    });
    return (
      <div className="App">
        <h1 className="title">Random Users</h1>
        <SearchInput
          placeholder="Search Users"
          searchInputHandler={this.searchInputHandler}
        />
        <CardList randomUsers={filteredUsers} />
      </div>
    );
  }
}

export default App;
