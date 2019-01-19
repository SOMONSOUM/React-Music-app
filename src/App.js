import React, { Component } from 'react';
import Card  from './components/Card/Card';
import './App.css';

export class App extends Component {
  state = {
    data: [],
    audio: "",
  }
  
  componentDidMount() {
    fetch("https://fbdev.khmercoders.co/music.json")
    .then(res => res.json())
    .then(data => {
      this.setState({data});
    })
    .catch(err => console.log(err));
  }

  render() {
    const playlists = this.state.data.map(playlist => {
      return (<Card
        key={playlist.title}
        title={playlist.title}
        image={playlist.image}
        onPlay={() => {
          this.setState({audio: playlist.path})
        }}
      />)
    })

    return (
      <div className="container">
          <div className="text-center">
              <h1>Playlist</h1>
          </div>
          <audio src={this.state.audio} controls autoPlay />
        <div className="playlists">
 
          {playlists}
        </div>
      </div>
    )
  }
}

export default App;


