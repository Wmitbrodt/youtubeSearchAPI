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

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    )
  }

}

export default SearchBar;
