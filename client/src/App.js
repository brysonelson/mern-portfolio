import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe"
import NoMatch from "./pages/NoMatch";
import ScrollToTop from "./components/ScrollToTop"
import "./App.css"

class App extends Component {

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/about" component={AboutMe} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
