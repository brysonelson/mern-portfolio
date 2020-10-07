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

  state = {
    introAnimationFinished: false
  }

  componentDidMount = () => {
    setTimeout(function() {
      this.setState({
        introAnimationFinished: true
      })
      console.log(this.state.introAnimationFinished)
    }.bind(this), 7000);
  }
  

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <div>
            <Switch>
              {/* paths to home */}
              <Route exact path="/" render={(props) => (
                <Home {...props} loaded={this.state.introAnimationFinished} />
              )} />
              <Route exact path="/home" component={Home} loaded={this.state.introAnimationFinished}/>

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
