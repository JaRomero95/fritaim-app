import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase';
import ListBooksPage from 'components/books/list/ListBooksPage';
import BookForm from 'components/books/form/BookForm';

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

                    <ul>
                        <li><Link to='/app'>List</Link></li>
                        <li><Link to='/app/new'>Form</Link></li>
                    </ul>
                </div>

                ul

                <Switch>
                    <Route path='/app/new' component={BookForm} />
                    <Route exact component={ListBooksPage} />
                </Switch>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    email: state.user.email,
});

export default connect(mapStateToProps, null)(Main);