import React, { Component } from 'react';
import Idea from './Idea.jsx';
import './App.css';
import getRandomTopic from './dictionaries/topics.js';
import getRandomCanvas from './dictionaries/canvases';
import getRandomTechnology from './dictionaries/technologies';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: getRandomTopic(),
      canvas: getRandomCanvas(),
      tech: getRandomTechnology()
    };
    this.reloadProject = this.reloadProject.bind(this);
  }

  reloadProject() {
    this.setState({
      topic: getRandomTopic(),
      canvas: getRandomCanvas(),
      tech: getRandomTechnology()
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random Pet Project Generator</h1>
        </header>
        <div id="Ideas">
          <h2>Here's an Idea!</h2>
          <Idea 
            topic={this.state.topic} 
            canvas={this.state.canvas} 
            tech={this.state.tech} />
        </div>
        <button id="changeBtn" onClick={this.reloadProject}>
          Change
        </button>
      </div>
    );
  }
}

export default App;
