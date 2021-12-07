import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import About from './Pages/About';
import './App.css';


class App extends React.Component {

  state = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  async componentDidMount() {
    // axios is similar to fetch api call
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false });
  }

  // search Github Users
  searchUsers = async text => {
    // console.log(text);

    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  }

  // Get single Github user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  }

  // get user repos from github
  getUserRepos = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ repos: res.data, loading: false });
  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });


  render() {

    const { users, user, repos, loading } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' render={props => (
                <>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                  />
                  <Users loading={loading} users={users} />
                </>
              )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
