import { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    const { user } = this.props;
    const { title, first, last } = user.name;

    return (
      <div className="card-container">
        <img src={user.picture.medium} alt={first} />
        <div className="info">
          <h2>
            {title} {first} {last}
          </h2>
          <p>{user.location.country}</p>
        </div>
      </div>
    );
  }
}

export default Card;
