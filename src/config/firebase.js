import firebase from 'firebase';
import settings from 'config/settings';

const config = {
    apiKey: settings.FIREBASE_API_KEY,
    authDomain: settings.FIREBASE_AUTH_DOMAIN,
    databaseURL: settings.FIREBASE_DATABASE_URL,
    projectId: settings.FIREBASE_MESSAGING_SENDER_ID,
    storageBucket: settings.FIREBASE_PROJECT_ID,
    messagingSenderId: settings.FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(config);