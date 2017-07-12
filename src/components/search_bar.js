import React, { Component } from 'react';

// define a new class and give it all the functionality React.Component has
class SearchBar extends Component {
  // this function is called automatically everytime a new instance of a class is created.
  constructor(props) {
    // must call super or it will throw error.
    super(props);

    // initialize state by creating a new object
    // we only update our state inside the constructor function.
    this.state = { term: '' };
  }
  // this is the syntax we use to define a methods on a class. Notice it's different than a javascript object (no colon)
  render() {
    return (
      <div className="search-bar">
        <input
          // made the input element a controlled component by telling it to receive its value from state:
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    )
  }

}

export default SearchBar; // only exporting our SearchBar component
