import store from 'store';
import { selectors as userSelectors } from 'store/user';
import { database } from 'config/firebase';

const getUid = () => userSelectors.getUid(store.getState());

const getBooksCollection = () => database.collection('users').doc(getUid()).collection('books');

const ApiService = {
    getBooks: async () => {
        // Get books
        const querySnapshot = await getBooksCollection().get();

        // Format response
        const books = [];
        querySnapshot.forEach(doc => books.push({ id: doc.id, ...doc.data() }));

        return books;
    },
};

export default ApiService;