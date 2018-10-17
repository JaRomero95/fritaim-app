import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';

export class Main extends Component {
    onLogout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div>
                Email: {this.props.email}

                <div>
                    <button onClick={this.onLogout}>Salir</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    email: state.user.email,
});

export default connect(mapStateToProps, null)(Main);