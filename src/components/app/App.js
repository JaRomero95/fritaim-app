import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import firebase from 'firebase';
import Login from 'components/login/Login';
import Main from 'components/app/Main';
import { actions as userActions } from 'store/user';

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    const { setUser, removeUser, history } = this.props;

    if (user) {
      const { uid, email } = user;
      setUser(uid, email);
      history.push('/app');
    } else {
      removeUser();
      history.push('/');
    }
  }
  
  render() {
    return (
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/app' component={Main} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (uid, email) => dispatch(userActions.setUser(uid, email)),
  removeUser: () => dispatch(userActions.removeUser()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
