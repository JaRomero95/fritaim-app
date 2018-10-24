import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {selectors as userSelectors} from 'store/user';
import {actions as booksActions} from 'store/books';

export class BookForm extends Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired,
  }

  state = {
      book: {
        title: '',
      },
  };

  onChange = event => this.setState({
    book: {
      ...this.state.book,
      title: event.target.value
    },
  });
  
  onSubmit = async event => {
      event.preventDefault();
      this.props.addBook(this.state.book);
  };

  render() {
    return (
      <div>
        <h1>Form page</h1>
        <form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} />

            <input type='submit' value='create!' />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addBook: booksActions.addBook,
};

export default connect(null, mapDispatchToProps)(BookForm);
