import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Tasks from "./Tasks";
import Teachers from "./Characters";
import NotFound from "./NotFound";
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Tasks} />
        <Route exact path="/character" component={Teachers} />
        <Route path="/about" render={() => <About title="About this site" />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
