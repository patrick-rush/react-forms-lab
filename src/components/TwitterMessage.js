import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      charsLeft: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length
    })
  } 

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <div>{this.state.charsLeft} characters left of {this.props.maxChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
