import React, { Component } from 'react';

class IdeaLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {text: props.text};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({text: nextProps.text});
  }

  render() {
    return(
      <span className="IdeaLabel" id={this.state.text}> 
        {this.state.text}
      </span>
    );
  }
}

export default IdeaLabel;