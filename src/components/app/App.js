import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import firebase from 'firebase';
import Login from 'components/login/Login';
import Main from 'components/app/Main';
import { actions as userActions } from 'store/user';

class App extends Component {
  state = {
    loading: true,
  };

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
      history.push('/login');
    }

    this.setState({ loading: false });
  }
  
  render() {
    const { loading } = this.state;

    if (loading) {
      return <CircularProgress />;
    }

    return (
      <div>
        <Route path='/app' component={Main} />
        <Route exact path='/login' component={Login} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: (uid, email) => dispatch(userActions.setUser(uid, email)),
  removeUser: () => dispatch(userActions.removeUser()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
