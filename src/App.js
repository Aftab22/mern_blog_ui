import React, { Component } from "react";
import HomePage from "./pages/home.page";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/about.page";
import ArticlesPage from "./pages/article.page";
import ArticlesListPage from "./pages/articles.list.page";
import PageNotFound from "./pages/PageNotFound.page";
import Navbar from "./navbar";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div id="page-body">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/article/:name" component={ArticlesPage} />
              <Route exact path="/articles-list" component={ArticlesListPage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
