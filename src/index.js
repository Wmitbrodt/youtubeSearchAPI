import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDrLw8yro0C8qH8SznqNuIrQYv5lCt0irk';

// Create a new component. This component should
// produce some HTML
class App extends Component {
  constructor(props) {
    super(props);
    // returns the list of videos
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'john frusciante'}, (videos) => {
      //console.log(videos);
      // we can update the state with the new list of videos:
      //this.setState({ videos: videos });
      // when the key and value are the same e.g., videos: videos, we can shorten with ES6 syntax: videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return ( // if you don't use parenthesis here, make sure the <div> is on the first line, beside the return
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          // 👇🏻 has one purpose, to just update app's state. Takes a video, and updates the selectedVideo
          // it's passed in as property to videolist. 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }

}

// Take this component's generated HTML and put it
// on the page (in the DOM)
// <App /> is just an instance of the class App
ReactDOM.render(<App />, document.querySelector('.container')); // reference to root container
