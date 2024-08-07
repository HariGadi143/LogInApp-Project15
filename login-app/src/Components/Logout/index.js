import React, { Component } from "react";
import styles from "./index.module.css";

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.handleClick} className={styles.btnCon}>
        Logout
      </button>
    );
  }
}

export default Logout;
