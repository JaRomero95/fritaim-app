import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { selectors } from 'store/books';

export class ListBooksPage extends Component {
  static propTypes = {}

  render() {
    const { books } = this.props;

    return (
      <div>
        <h1>List page</h1>

        {books.map(({ id, title }) => (
          <div key={id}>
            <h5>{id}</h5>
            <p>{title}</p>
            <hr/>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: selectors.getBooks(state),
});

export default connect(mapStateToProps, null)(ListBooksPage);
