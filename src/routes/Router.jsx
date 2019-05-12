// @flow

import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import About from '~/components/about/About';

import Home from '~/components/Home';
import LoginWindow from '~/components/LoginWindow';
import NotFound from '~/components/NotFound';
import Publish from '~/components/publish/Publish';
import ChangePassword from '~/components/ChangePassword';
import ViewLeasing from '~/components/ViewLeasing/ViewLeasing';
import Profile from '~/components/profile/Profile';
import SearchPage from '~/components/SearchPage';
import GoogleMapTest from '~/components/GoogleMapTest';

import { TOKEN_KEY } from "../constants";
var convertType = function (value){
  try {
      return (new Function("return " + value + ";"))();
  } catch(e) {
      return value;
  }
};
export default class Router extends React.Component<{}> {
  constructor(props){
    super(props);
    const cookies = new Cookies();
    this.state = {
      isLoggedIn: !(cookies.get(TOKEN_KEY) == undefined),
    };
	}
  handleLogin = response => {
    const cookies = new Cookies();
    cookies.set(TOKEN_KEY, response.content._id);
    this.setState({ isLoggedIn: true });
  };
  handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove(TOKEN_KEY);
    this.setState({ isLoggedIn: false });
  }
  getHome = () => {
    return <Home handleLogin={this.handleLogin} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>;
  }
  getProfile = () => {
    if (this.state.isLoggedIn)
      return <Profile handleLogin={this.handleLogin} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>;
    else
      return this.getHome();
  }
  getPublish = () => {
    if (this.state.isLoggedIn)
      return <Publish handleLogin={this.handleLogin} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>;
    else
      return this.getHome();
  }
  getAbout = () => {
    return <About handleLogin={this.handleLogin} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
  }
  getViewLeasing = () => {
    return <ViewLeasing handleLogin={this.handleLogin} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
  }
  getSearchPage = () => {
    return <SearchPage handleLogin={this.handleLogin} handleLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn}/>
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={this.getHome} />
          <Route exact path="/login" component={LoginWindow} />
          <Route exact path="/about" render={this.getAbout} />
          <Route exact path="/publish" render={this.getPublish} />
          <Route exact path="/leasing" render={this.getViewLeasing}/>
          <Route exact path="/profile" render={this.getProfile} />
          <Route exact path="/profile/change_password" component={ChangePassword} />
          <Route exact path="/searchpage" render={this.getSearchPage} />
          <Route exact path="/map" component={GoogleMapTest} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
