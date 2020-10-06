import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe"
import NoMatch from "./pages/NoMatch";
import ScrollToTop from "./components/ScrollToTop"
import ReactGA from 'react-ga'
import "./App.css"

ReactGA.initialize('UA-136219192-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <div>
            <Switch>
              {/* paths to home */}
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />

              {/* path to portfolio */}
              <Route exact path="/portfolio" component={Portfolio} />
              {/* path to about me */}
              <Route exact path="/about" component={AboutMe} />
              {/* 404 path */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
