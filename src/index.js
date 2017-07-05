import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDrLw8yro0C8qH8SznqNuIrQYv5lCt0irk';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should
// produce some HTML
const App = () => {
  return ( // if you don't use parenthesis here, make sure the <div> is on the first line, beside the return
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
// <App /> is just an instance of the class App
ReactDOM.render(<App />, document.querySelector('.container')); // reference to root container
