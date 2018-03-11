import React, { Component } from 'react';
import IdeaLabel from './IdeaLabel.jsx';

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {topic: props.topic,
      canvas: props.canvas,
      tech: props.tech};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      topic: nextProps.topic,
      canvas: nextProps.canvas,
      tech: nextProps.tech
    });
  }

  render() {
    return (
      <p className="Idea">
        Create a&nbsp;
        <IdeaLabel text={this.state.topic} />
        <IdeaLabel text={this.state.canvas} />
        &nbsp;using&nbsp;
        <IdeaLabel text={this.state.tech} />
      </p>
    );
  }
}

  export default Idea;