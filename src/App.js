import React from "react";
import List from "./List";
import data from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: data };
  }
  render() {
    return (
      <div className="container">
        <h2>{this.state.people.length} Birthdays today</h2>
        <List people={this.state.people} />
        <button onClick={() => this.setState({ people: [] })} className="clear">
          Clear All
        </button>
      </div>
    );
  }
}

export default App;
