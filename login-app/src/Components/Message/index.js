import React, { Component } from "react";
import styles from "./index.module.css";

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return (
      <h1 style={{ color: "white", fontSize: "40px", fontWeight: "800" }}>
        {message}
      </h1>
    );
  }
}

export default Message;

Message.defaultProps = {
  message: "Please Send proper props",
};
