import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC2NzO06fKSr7isPpOhxOwFCZ02_MJrimE",
    authDomain: "expensify-78191.firebaseapp.com",
    databaseURL: "https://expensify-78191.firebaseio.com",
    projectId: "expensify-78191",
    storageBucket: "expensify-78191.appspot.com",
    messagingSenderId: "1064895740685"
};
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
    'prompt': 'select_account'
});

export {firebase, googleAuthProvider, database as default}



