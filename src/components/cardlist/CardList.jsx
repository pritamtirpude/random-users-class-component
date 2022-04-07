import { Component } from "react";
import "./cardlist.css";
import Card from "../card/Card";

class CardList extends Component {
  render() {
    const { randomUsers } = this.props;
    return (
      <div className="card-list-container">
        {randomUsers.map((user) => (
          <Card user={user} key={user.login.uuid} />
        ))}
      </div>
    );
  }
}

export default CardList;
