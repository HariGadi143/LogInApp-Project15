import React, { Component } from "react";
import styles from "./index.module.css";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.handleClick} className={styles.btnCon}>Login</button>;
  }
}

export default Login;
