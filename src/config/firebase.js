import firebase from 'firebase';
import 'firebase/firestore';
import settings from 'config/settings';

// Initialize firebase

const config = {
    apiKey: settings.FIREBASE_API_KEY,
    authDomain: settings.FIREBASE_AUTH_DOMAIN,
    databaseURL: settings.FIREBASE_DATABASE_URL,
    projectId: settings.FIREBASE_PROJECT_ID,
    storageBucket: settings.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: settings.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

// Initialize firestore

const database = firebase.firestore();

const dbConfig = {
    timestampsInSnapshots: true,
};

database.settings(dbConfig);

export {
    database,
};