import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {selectors as userSelectors} from 'store/user';
import {database} from 'config/firebase';

export class ListBooksPage extends Component {
  static propTypes = {}

  state = {
      books: [],
  };

  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    const { uid } = this.props;
    
    try {
        const querySnapshot = await database.collection('users').doc(uid).collection('books').get();
        const books = [];

        querySnapshot.forEach(doc => books.push({ id: doc.id, ...doc.data() }));
        
        this.setState({ books });
    } catch(e) {
        throw e;
    }
  }

  render() {
    const {books} = this.state;

    return (
      <div>
        <h1>List page</h1>

        {books.map(({ id, title }) => (
          <div>
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
    uid: userSelectors.getUid(state),
})

export default connect(mapStateToProps)(ListBooksPage);
