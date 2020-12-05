import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lists">
        {this.props.people.map((person, key) => {
          return (
            <div className="list" key={person.id}>
              <img src={person.image} alt="null" />
              <div>
                <p className="name">{person.name}</p>
                <p className="age">{person.age}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
