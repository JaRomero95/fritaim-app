import React, { Component } from 'react';
import firebase from 'firebase';

const authProvider = new firebase.auth.GoogleAuthProvider();

export class Login extends Component {
    openLoginPopUp() {
        firebase.auth().signInWithPopup(authProvider);
    }

    render() {
        return (
            <div>
                <button onClick={this.openLoginPopUp}>Entrar</button>
            </div>
        );
    }
};

export default Login;