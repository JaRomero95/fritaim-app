import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase';
import BooksListPage from 'components/books/BooksListPage';
import BookFormPage from 'components/books/BookFormPage';
import { actions } from 'store/books';

export class Main extends Component {
    componentDidMount() {
        this.props.getBooks();
    }

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
                    <Route path='/app/new' component={BookFormPage} />
                    <Route exact component={BooksListPage} />
                </Switch>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    email: state.user.email,
});

const mapDispatchToProps = {
    getBooks: actions.getBooks,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Main);