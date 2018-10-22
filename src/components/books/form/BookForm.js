import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase';
import 'firebase/firestore';
import { connect } from 'react-redux';
import {selectors as userSelectors} from 'store/user';
import {database} from 'config/firebase';

export class BookForm extends Component {
  static propTypes = {}

  state = {
      title: [],
  };

  onChange = event => this.setState({ title: event.target.value });
  
  onSubmit = async event => {
      event.preventDefault();
      const { title } = this.state;
      const { uid } = this.props;

      const result = await database.collection('users').doc(uid).collection('books').add({ title });
      console.log(result);
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

const mapStateToProps = state => ({
    uid: userSelectors.getUid(state),
})

export default connect(mapStateToProps)(BookForm);
