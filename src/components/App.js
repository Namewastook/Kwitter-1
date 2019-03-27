import React, { Component } from "react";
import "../App.css";
import Title from "./Title.js";
import LoginPage from "./login/LoginPage.js";
import ProfilePage from "./profile/ProfilePage.js";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./login/SignUp.js";
import FeedPage from "./feed/FeedPage.js";
import { connectRouter } from "connected-react-router";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    //const {login} =this.props
    return (
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/profile" render={() => <NavBar />} />
          <Route exact path="/feed" render={() => <NavBar />} />
          {/* <Route exact path="/feed" render={() => login ?  <FeedPage />: <LoginPage />} /> */}
        </Switch>
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route exact path="/register" render={() => <SignUpForm />} />
          <Route exact path="/profile" render={() => <ProfilePage />} />
          <Route exact path="/feed" render={() => <FeedPage />} />

        </Switch>
      </div>
    );
  }
}

export default connectRouter(
  ({ auth }) => ({
    login: auth.login
  }),
  null
)(App);
