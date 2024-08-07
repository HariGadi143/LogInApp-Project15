import React, { Component } from "react";
import styles from "./index.module.css";
import Message from "../Message";
import Login from "../Login";
import Logout from "../Logout";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogIn = () => {
    this.setState((prevState) => ({ isLoggedIn: !prevState.isLoggedIn }));
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.loginWrapper}>
          <Message message={isLoggedIn ? "Welcome User" : "Please Login"} />
          {isLoggedIn ? (
            <Logout handleClick={this.handleLogIn} />
          ) : (
            <Login handleClick={this.handleLogIn} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
