import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDrLw8yro0C8qH8SznqNuIrQYv5lCt0irk';

// Create a new component. This component should
// produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
// <App /> is just an instance of the class App
ReactDOM.render(<App />, document.querySelector('.container'));
