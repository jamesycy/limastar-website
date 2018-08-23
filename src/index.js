import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

import firebase from 'firebase/app'
import config from './firebase.json'

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })


const root: ?Element = document.getElementById("root");

if (root != null) {
    ReactDOM.render(<App />, root);
    registerServiceWorker();
}
