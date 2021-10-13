import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CarouselEasycook from "./Components/CarouselEasycook";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Post from "./Components/Post";
import Register from "./Components/Register";
import TemplateDetail from "./Components/TemplateDetail";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
          <Route exact path="/post">
            <Post />
          </Route>
          <Route exact path="/search">
            <Header />
          </Route>
          <Route exact path="/filter">
            <Header />
            <Filter />
          </Route>
          <Route exact path="/detail">
            <Header />
            <TemplateDetail />
          </Route>
          <Route exact path="/profile">
            <Header />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

